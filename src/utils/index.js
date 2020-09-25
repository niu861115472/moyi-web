import axios from 'axios'
import qs from 'qs'
import url from './url'
<<<<<<< HEAD

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 50000
axios.defaults.headers.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiIiLCJhdWQiOiIiLCJqdGkiOiI0ZjFnMjNhMTJhYSIsImlhdCI6MTU5Njc4NDc1MiwibmJmIjoxNTk2Nzg0NzUyLCJleHAiOjE1OTY4NzExNTIsInVzZXJfaWQiOjF9.fjgF_kxvd-XSairJMqMouv8h5AjqUYiNNAqG-Yh7Bek'

// 请求拦截器
axios.interceptors.request.use(config => {
  // if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
  //   config.headers.Authorization = `token ${store.state.token}`;
  // }
=======
import { Message } from 'element-react'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 50000
// axios.defaults.headers.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiIiLCJhdWQiOiIiLCJqdGkiOiI0ZjFnMjNhMTJhYSIsImlhdCI6MTU5Njc4NDc1MiwibmJmIjoxNTk2Nzg0NzUyLCJleHAiOjE1OTY4NzExNTIsInVzZXJfaWQiOjF9.fjgF_kxvd-XSairJMqMouv8h5AjqUYiNNAqG-Yh7Bek'

// 请求拦截器
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = token;
  }
>>>>>>> 9-25 update
  // if (Object.prototype.toString.call(config.data) !== '[object FormData]') {
  //   config.data = qs.stringify(config.data);
  // }
  return config
}, error => {
  //发送请求错误操作
<<<<<<< HEAD
  console.log('请求失败')
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(response => response.data)
=======
  // Message('请求失败')
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(response => {

  if (response.data.code == 401) {
    Message('登录过期')
    if (process.env.NODE_ENV === "production") {
      window.location.href = 'http://develop.mojsoft.com/'
    } else {
      window.location.href = 'http://localhost:8000/#/'
    }
  } else {
    return response.data
  }
}
)
>>>>>>> 9-25 update

/**
 * get请求
 * @method get
 * @param {url, params, loading} 请求地址，请求参数，是否需要加载层
 */
var get = function (url, params) {
  return new Promise((resolve, reject) => {
    // {
    //   params: params
    // }
    axios.get(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * post请求
 * @method post
 * @param {url, params} 请求地址，请求参数，是否需要加载层
 */
<<<<<<< HEAD
var post = function (url, data) {
=======
var post = function (url, data, IS_MSG) {
>>>>>>> 9-25 update
  return new Promise((resolve, reject) => {
    // qs.stringify(data)
    axios.post(url, JSON.stringify(data))
      .then(res => {
<<<<<<< HEAD
        console.log(res);
        resolve(res);
      })
      .catch(err => {
        reject(err);
=======
        if (IS_MSG) {
          if (res.code == 200) {
            Message({ type: 'success', message: res.msg })
          } else {
            Message({ message: res.msg, type: 'warning' })
          }
        }
        resolve(res);
      })
      .catch(err => {
        reject(err)
        if (IS_MSG) {
          Message({ message: err.msg, type: 'warning' })
        }
>>>>>>> 9-25 update
      });
  });
};

export default {
  ...url,
  get,
  post
}