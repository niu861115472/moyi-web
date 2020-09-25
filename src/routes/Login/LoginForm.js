<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import { Input, Form, Loading } from 'element-react';
import { withRouter, Link } from 'dva/router'

const RemeberPass = () => {
=======
import React, { useState, useRef, useEffect } from 'react';
import { Input, Form, Loading, Checkbox } from 'element-react';
import { Link, withRouter } from 'dva/router'
import { connect } from 'dva'

const ForgetPass = () => {
>>>>>>> 9-25 update
    return (
        <div className="remeber">
            <Link to="/set_password">
                <p>忘记密码</p>
            </Link>
            <div></div>
            <Link to="/register">
                <p>注册</p>
            </Link>
        </div>
    )
}

<<<<<<< HEAD
function LoginForm(props) {
    console.log(props)
    const refs = useRef()
=======
const RemberPassword = (props) => {
    const handleOnchange = (value) => {
        props.dispatch({
            type: "login/setIsRember",
            isRember: value
        })
        console.log(props)
    }
    return (
        <div className="rember_pass">
            <Checkbox onChange={handleOnchange} checked={props.isRember}>记住密码</Checkbox>
        </div>
    )
}

function LoginForm(props) {
    const refs = useRef()
    const { dispatch, isRember, history } = props
    console.log(props)
>>>>>>> 9-25 update
    const [form, setForm] = useState({
        name: '',
        pass: ''
    })
    const [fullscreen, setFull] = useState(false)
    const rules = {
        name: [
            { required: true, message: '请输入用户名' },
            {
                validator: (rule, value, callback) => {
                    if (value === '') {
                        callback(new Error('请输入用户名'));
                    }
                    callback()
                }
            }
        ],
        pass: [
            { required: true, message: '请输入密码', trigger: 'change' },
            {
                validator: (rule, value, callback) => {
                    if (value === '') {
                        callback(new Error('请输入密码'));
                    }
                    callback()
                }
            }
        ]
    }
<<<<<<< HEAD
=======
    useEffect(() => {
        loadAccountInfo()
    }, [])
    function saveCookie() {
        if (isRember) {
            let accountInfo = form.name + '&' + form.pass
            let Days = 3;  //cookie保存时间
            let exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = 'accountInfo' + "=" + escape(accountInfo) + ";expires=" + exp.toGMTString();
        } else {
            let exp = new Date();
            exp.setTime(exp.getTime() - 1);
            let accountInfo = document.cookie
            var cookie_pos = accountInfo.indexOf('accountInfo');

            if (cookie_pos != -1) {
                document.cookie = 'accountInfo' + "=" + ' ' + ";expires=" + exp.toGMTString();
            }
            setForm({ name: '', pass: '' })
        }
    }
    function loadAccountInfo() {
        //读取cookie
        let arr, reg = new RegExp("(^| )" + 'accountInfo' + "=([^;]*)(;|$)");
        let accountInfo = ''
        if (arr = document.cookie.match(reg)) {
            accountInfo = unescape(arr[2]);
        }
        else {
            accountInfo = null;
        }
        if (Boolean(accountInfo) == false) {
            return false;
        } else {
            let userName = "";
            let passWord = "";

            let i = new Array()
            i = accountInfo.split("&");
            userName = i[0],
                passWord = i[1]
            setForm({ name: userName, pass: passWord })
        }
    }
>>>>>>> 9-25 update
    function onChange(key, value) {
        setForm(Object.assign({}, form, { [key]: value }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        refs.current.validate((valid) => {
<<<<<<< HEAD
            console.log(valid)
            if (valid) {
                clearTimeout(timeout)
                let timeout = setTimeout(() => {
                    setFull(false)
                    props.history.push('/client/index/0')
                }, 3000)
                setFull(true)
=======
            if (valid) {
                setFull(true)
                dispatch({
                    type: 'login/loginAsync',
                    payload: {
                        username: form.name, //15503643053
                        password: form.pass //123456
                    }
                }).then(res => {
                    if (res.code == 200) {
                        localStorage.setItem('token', res.data.token)
                        history.push('/client/index/0')
                    }
                })
>>>>>>> 9-25 update
                console.log('submit!!')
            } else {
                console.log('error submit!!')
                return false;
            }
<<<<<<< HEAD
        });
    }
    return (

        <div className="login_form">
            <p>魔骥登录</p>
            <Loading loading={fullscreen}>
                <div className="form_box">
                    <div className="linear_color"></div>
=======
        })
        saveCookie()
    }
    return (
        <div className="login_form">
            <div className="login_img">
                <img src={require("../../assets/images/login/左侧插图.png")} alt="" />
            </div>
            <Loading loading={fullscreen}>
                <div className="form_box">
                    <p className="welcome">欢迎登录疾风内测平台</p>
>>>>>>> 9-25 update
                    <Form ref={refs} model={form} rules={rules}>
                        <Form.Item prop="name">
                            <Input
                                className="user_name"
                                value={form.name}
                                placeholder="请输入用户名"
                                onChange={(value) => onChange('name', value)}
                            />
                        </Form.Item>
                        <Form.Item prop="pass">
                            <Input
                                className="user_name"
                                value={form.pass}
                                type="password"
                                placeholder="请输入密码"
                                onChange={(value) => onChange('pass', value)}
                            />
                        </Form.Item>
                        <div className="login_btn" onClick={(e) => handleSubmit(e)}>登录</div>
                    </Form>
<<<<<<< HEAD
                    <RemeberPass />
=======
                    <RemberPassword dispatch={dispatch} isRember={isRember} />
                    <ForgetPass />
>>>>>>> 9-25 update
                </div>

            </Loading>
        </div>
    )
}

<<<<<<< HEAD
export default withRouter(LoginForm)
=======
const mapStateToProps = (state) => {
    return {
        isRember: state.login.isRember
    }
}

export default withRouter(connect(mapStateToProps)(LoginForm))
>>>>>>> 9-25 update
