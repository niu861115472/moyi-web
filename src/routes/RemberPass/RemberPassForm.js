import React, { useState, useRef } from 'react';
import { Input, Form, Loading, Message } from 'element-react';
import { Link } from 'react-router-dom'

const RemeberPass = () => {
    return (
        <div className="remeber">
            <Link to="/register">
                <p>注册</p>
            </Link>
            <div></div>
<<<<<<< HEAD
            <Link to="/">
=======
            <Link to="/login">
>>>>>>> 9-25 update
                <p>登录</p>
            </Link>
        </div>
    )
}

function LoginForm(props) {
    const [code, setText] = useState({
        text: '发送',
        isClick: true
    })
    const register = useRef()
    const [form, setForm] = useState({
        name: '',
        pass: '',
        checkPass: '',
        telephone: '',
        code: ''
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
            { required: true, message: '请输入密码', trigger: 'blur' },
            {
                validator: (rule, value, callback) => {
                    if (value === '') {
                        callback(new Error('请输入密码'));
                    }
                    else {
                        if (form.checkPass !== '') {
                            // register.form.validateField('checkPass');
                        }
                        callback();
                    }
                }
            }
        ],
        checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            {
                validator: (rule, value, callback) => {
                    if (value === '') {
                        callback(new Error('请再次输入密码'));
                    }
                    else if (value !== form.pass) {
                        callback(new Error('两次输入密码不一致!'));
                    }
                    else {
                        callback();
                    }
                }
            }
        ],
        telephone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            {
                validator: (rule, value, callback) => {
                    if (value === '') {
                        callback(new Error('请输入手机号'));
                    } else if (value.length !== 11) {
                        callback(new Error('请输入11位手机号'));
                    } else {
                        callback();
                    }
                }
            }
        ],
        code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            {
                validator: (rule, value, callback) => {
                    if (value === '') {
                        callback(new Error('请输入验证码'));
                    }
                    callback();
                }
            }
        ]
    }
    function onChange(key, value) {
        setForm(Object.assign({}, form, { [key]: value }));
    }
    function handleSubmit(e) {
        console.log(form)
        e.preventDefault();
        register.current.validate((valid) => {
            console.log(valid)
            if (valid) {
                clearTimeout(timeout)
                let timeout = setTimeout(() => {
                    setFull(false)
                }, 3000)

                setFull(true)
                console.log('submit!!')
            } else {
                console.log('error submit!!')
                return false;
            }
        });
    }
    function SendCode() {
        if (!form.telephone) {
            Message('请输入手机号！');
            return
        }
        if (!code.isClick) return
        let maxTime = 10
        setInterval(() => {
            if (maxTime > 0) {
                --maxTime
                setText({
                    text: maxTime.toString() + ' 秒',
                    isClick: false
                })
            }
            else {
                setText({
                    text: '发送',
                    isClick: true
                })
            }
        }, 1000)
    }
    return (

        <div className="register_form login_form">
            <p>重置密码</p>
            <Loading loading={fullscreen}>
                <div className="form_box">
                    <div className="linear_color"></div>
                    <Form ref={register} model={form} rules={rules}>
                        <Form.Item prop="telephone">
                            <Input
                                className="user_name"
                                maxLength={11}
                                value={form.telephone}
                                placeholder="手机号"
                                onChange={(value) => onChange('telephone', value)}
                            />
                        </Form.Item>
                        <Form.Item prop="code">
                            <Input
                                className="code"
                                value={form.code}
                                placeholder="验证码"
                                onChange={(value) => onChange('code', value)}
                            />
                            <span onClick={SendCode} className="send_code">{code.text}</span>
                        </Form.Item>
                        <Form.Item prop="pass">
                            <Input
                                className="user_name"
                                value={form.pass}
                                type="password"
                                placeholder="密码"
                                onChange={(value) => onChange('pass', value)}
                            />
                        </Form.Item>
                        <Form.Item prop="checkPass">
                            <Input
                                className="user_name"
                                type="password"
                                value={form.checkPass}
                                placeholder="确认密码"
                                onChange={(value) => onChange('checkPass', value)}
                            />
                        </Form.Item>
                        <div className="login_btn" onClick={(e) => handleSubmit(e)}>确定</div>
                    </Form>
                    <RemeberPass />
                </div>
            </Loading>
        </div>
    )
}

export default LoginForm