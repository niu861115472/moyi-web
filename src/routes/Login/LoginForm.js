import React, { useState, useRef } from 'react';
import { Input, Form, Loading } from 'element-react';
import { Link } from 'react-router-dom'

const RemeberPass = () => {
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

function LoginForm(props) {
    const refs = useRef()
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
    function onChange(key, value) {
        setForm(Object.assign({}, form, { [key]: value }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        refs.current.validate((valid) => {
            if (valid) {
                clearTimeout(timeout)
                let timeout = setTimeout(() => {
                    setFull(false)
                }, 3000)

                setFull(true)
            } else {
                console.log('error submit!!')
                return false;
            }
        });
    }
    return (

        <div className="login_form">
            <p>魔骥登录</p>
            <Loading loading={fullscreen}>
                <div className="form_box">
                    <div className="linear_color"></div>
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
                    <RemeberPass />
                </div>

            </Loading>
        </div>
    )
}

export default LoginForm