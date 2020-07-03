import React, { useState, useRef } from 'react';
import { Input, Form, Loading } from 'element-react';

function LoginForm(props) {
    const refs = useRef()
    const [form, setForm] = useState({
        name: '',
        pass: '',
        checkPass: '',
        telephone: '',
        code:''
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
                    } else {
                        if (form.checkPass !== '') {
                            refs.form.validateField('checkPass');
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
                    } else if (value !== form.pass) {
                        callback(new Error('两次输入密码不一致!'));
                    } else {
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

        <div className="register_form login_form">
            <p>魔骥注册</p>
            <div className="form_box">
                <div className="linear_color"></div>
                <Form ref={refs} model={form} rules={rules}>
                    <Form.Item prop="name">
                        <Input
                            className="user_name"
                            value={form.name}
                            placeholder="用户名"
                            onChange={(value) => onChange('name', value)}
                        />
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
                            autoComplete="off"
                        />
                    </Form.Item>
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
                        <span className="send_code">发送</span>
                    </Form.Item>
                    <div className="login_btn" onClick={(e) => handleSubmit(e)}>
                        {
                            fullscreen ? <Loading fullscreen={false} /> : '注册'
                        }
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default LoginForm