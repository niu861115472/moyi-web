import { getUploadIpa, getLogin } from '../../services/example'
import { Message } from 'element-react'
import axios from 'axios'

let app_url, icon_url = ''
const AppInfoParser = require('app-info-parser')
const COS = require('cos-js-sdk-v5')

export function uploadBefore(file) {
    var ipa = file.name;
    var num = file.size / 1024 / 1024;
    console.log('上传前')
    if (ipa.indexOf('ipa') == -1) {
        alert('请上传正确的ipa包！');
        return false;
    }

    if (num > 1024) {
        alert('您上传的文件为' + num + 'MB');
        return false;
    }
}

//解析包
export function AppInfoParser1(file, uploader) {
    // console.log(file)
    new AppInfoParser(file).parse().then(result => {
        console.log('app info ----> ', result)
        var img_file = dataURLtoFile(result.icon)
        uploadTencent(
            file,
            img_file,
            result.CFBundleDisplayName || result.CFBundleName,
            result.CFBundleShortVersionString,
            result.MinimumOSVersion,
            result.CFBundleIdentifier,
            file.size,
            uploader
        )
    }).catch(err => {
        console.log('err ----> ', err)
    })

}

//上传至腾讯云拿到地址
function uploadTencent(file, img_file, name, version, build, bundle, size, uploader) {
    //腾讯云存储的 名称 和 地区。写死就好
    var Bucket = 'package-1300474322';
    var Region = 'ap-shanghai';
    var login_token = '1';
    //登录接口 获取身份验证的token

    // getLogin({ username: '15503643053', password: '123456' }).then(res => {
    //     login_token = res.data.token
    //     console.log(res)
    //     console.log(login_token)
    // 初始化实例
    var cos = new COS({
        getAuthorization: function (options, callback) {
            //这是获取上传签名的接口，会返回一个对象，如下
            //{"credentials":{"sessionToken":"1bf21f06d6e75e03f91fc2d3cf796cf3b7bd8ce730001","tmpSecretId":"AKIDfQwV2zEbhozxbWS4Sk0p9R44RA7DSOlr","tmpSecretKey":"gsxeyxCaU6o3k2SHMurEt3D1qawjWB4V"},"expiredTime":1595340622}
            var url = 'http://test1.mojsoft.com/api/v1.Upload/getCosToken';
            //请求 获取签名的接口
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            //这是身份验证的token ，从登陆接口获取
            var login_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiIiLCJhdWQiOiIiLCJqdGkiOiI0ZjFnMjNhMTJhYSIsImlhdCI6MTU5Njc4NDc1MiwibmJmIjoxNTk2Nzg0NzUyLCJleHAiOjE1OTY4NzExNTIsInVzZXJfaWQiOjF9.fjgF_kxvd-XSairJMqMouv8h5AjqUYiNNAqG-Yh7Bek'
            xhr.setRequestHeader('Authorization', login_token);
            xhr.onload = function (e) {
                try {
                    var data = JSON.parse(e.target.responseText);
                    var credentials = data.credentials;
                } catch (e) {
                }
                if (!data || !credentials) return console.error('credentials invalid');
                callback({
                    //这里是上面 注释中的返回结果 的使用
                    TmpSecretId: credentials.tmpSecretId,
                    TmpSecretKey: credentials.tmpSecretKey,
                    XCosSecurityToken: credentials.sessionToken,
                    StartTime: data.startTime, // 时间戳，单位秒，如：1580000000，建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
                    ExpiredTime: data.expiredTime, // 时间戳，单位秒，如：1580000900
                });
            };
            xhr.send();
        }
    });
    if (!file) return;

    // 分片上传文件
    cos.sliceUploadFile({
        Bucket: Bucket,
        Region: Region,
        Key: `/origin_ipa/${file.name}`,
        Body: file,
        onHashProgress: function (progressData) {
            // console.log('校验中1', JSON.stringify(progressData));
        },
        onProgress: function (progressData) {
            // console.log('上传中1', JSON.stringify(progressData));
        },
    }, function (err, data) {
        app_url = data.Location
        // 分片上传图片
        cos.sliceUploadFile({
            Bucket: Bucket,
            Region: Region,
            Key: `/img/${img_file.name}`,
            Body: img_file,
            onHashProgress: function (progressData) {
                // console.log('校验中2', JSON.stringify(progressData));
            },
            onProgress: function (progressData) {
                // console.log('上传中2', JSON.stringify(progressData));
            },
        }, function (err, data) {
            icon_url = data.Location

            let form = new FormData();
            form.append('app_id', ''),
                form.append('url', app_url),
                form.append('name', name),
                form.append('version', version),
                form.append('build', build),
                form.append('icon', icon_url),
                form.append('bundle', bundle),
                form.append('size', size)
            axios.post('http://test1.mojsoft.com/api/v1.Upload/uploadIpa', form, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: progressEvent => {
                    let percent = parseInt(
                        (
                            progressEvent.loaded / progressEvent.total * 100)
                    ).toFixed(0)
                    //调用onProgress方法来显示进度条，需要传递个对象 percent为进度值
                    console.log(percent, uploader)
                    uploader.onProgress({percent:percent})
                }
            }).then((res) => {
                //上传成功 调用onSuccess方法，否则没有完成图标
                Message({ message: '上传成功！', type: 'success' })
                //处理自己的逻辑
                // console.log(res)
                uploader.onSuccess()
            }).catch((err) => {
                //上传失败 调用onError方法
                //处理自己的逻辑
                Message.error('上传失败!');
                uploader.onError()
            })
        })
    });

    // });
}

//base64转换图片
function dataURLtoFile(dataurl) {
    var arr = dataurl.split(',');
    var filename = `${new Date().getTime()}.png`
    var mime = arr[0].match(/:(.*?);/)[1];
    var bytes = window.atob(arr[1]);            // 去掉url的头，并转化为byte
    //let n = new ArrayBuffer(bytes.length);    // 处理异常,将ascii码小于0的转换为大于0
    var n = bytes.length,
        u8arr = new Uint8Array(n);                  // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
    while (n--) {
        u8arr[n] = bytes.charCodeAt(n);
    }
    // console.log(u8arr, "==>", [u8arr])
    return new File([u8arr], filename, { type: mime });
}

// export default AppInfoParser1