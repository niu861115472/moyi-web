import React, { useState } from 'react';
import { Tooltip } from 'element-react'
import QRCode from 'qrcode.react'
import "./style.css"

function QrCode(props) {
    const [androidShow, setAndroid] = useState(false)
    const [iosShow, setIos] = useState(false)
    const handleUploadCode = (e, type) => {
        e.stopPropagation()
        if (type == "android") {
            setAndroid(!androidShow)
            setIos(false)
            console.log(iosShow)
        } else {
            setIos(!iosShow)
            setAndroid(false)
        }
    }
    return (
        <div className="qrcode">
            <div onClick={(e) => handleUploadCode(e, 'android')}>
                <img src={require("../../assets/images/apply_list/安卓.png")} alt="" />
                <div className="android_code code_box" style={androidShow == true ? { display: "block" } : null}>
                    <QRCode
                        value='https://www.baidu.com/'// 生成二维码的内容
                        size={65} // 二维码的大小
                        fgColor="#000000" // 二维码的颜色
                    />
                    <Tooltip
                        className="tool-tip"
                        effect="dark"
                        content={props.url}
                        placement="top-start">
                        <p>{props.url}</p>
                    </Tooltip>
                </div>
            </div>
            <div onClick={(e) => handleUploadCode(e, 'ios')}>
                <img src={require("../../assets/images/apply_list/苹果.png")} alt="" />
                <div className="ios_code" style={iosShow == true ? { display: "block" } : null}>
                    <QRCode
                        value='https://www.baidu.com/'// 生成二维码的内容
                        size={65} // 二维码的大小
                        fgColor="#000000" // 二维码的颜色
                    />
                    <Tooltip
                        className="tool-tip"
                        effect="dark"
                        content={props.url}
                        placement="top-start">
                        <p>{props.url}</p>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default QrCode