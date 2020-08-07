import $axios from '../utils/index'

console.log($axios)

let apis = {
    login: `${$axios.baseUrl1}//api/v1.Index/login`,
    uploadIpa: `${$axios.baseUrl1}/api/v1.Upload/uploadIpa`
}

export const getLogin = (data) => { return $axios.post(apis.login, data).then(res => res) }

export const getUploadIpa = (data) => { return $axios.post(apis.uploadIpa, data).then(res => res) }