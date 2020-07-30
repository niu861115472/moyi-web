import React, { useState, useRef } from 'react';
import { Input, Form } from 'element-react';

function ChangePas() {
    const changePass = useRef()
    const [form, setForm] = useState({
        pass: '',
        newPass: '',
        checkPass: ''
    })
    const rules = {
        pass: [
            { required: true, message: '请输入当前密码' },
            {
                validator: (rule, value, callback) => {
                    if (value === '') {
                        callback(new Error('请输入当前密码'));
                    }
                    callback()
                }
            }
        ],
        newPass: [
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
                    else if (value !== form.newPass) {
                        callback(new Error('两次输入密码不一致!'));
                    }
                    else {
                        callback();
                    }
                }
            }
        ]
    }
    const onChange = (key, value) => {
        setForm(Object.assign({}, form, { [key]: value }));
    }
    const handleSubmit = (e) => {
        console.log(form)
        e.preventDefault();
        changePass.current.validate((valid) => {
            console.log(valid)
            if (valid) {
                console.log('submit!!')
            } else {
                console.log('error submit!!')
                return false;
            }
        });
    }
    return (
        <div className="change_pas">
            <p className="account_title">修改密码</p>
            <div className="name_info">
                <Form ref={changePass} model={form} rules={rules}>
                    <Form.Item prop="pass">
                        <p>当前密码</p>
                        <Input
                            className="user_name"
                            value={form.pass}
                            placeholder="当前密码"
                            onChange={(value) => onChange('pass', value)}
                        />
                    </Form.Item>
                    <Form.Item prop="newPass">
                        <p>新密码</p>
                        <Input
                            className="user_name"
                            value={form.newPass}
                            type="password"
                            placeholder="密码"
                            onChange={(value) => onChange('newPass', value)}
                        />
                    </Form.Item>
                    <Form.Item prop="checkPass">
                        <p>确认密码</p>
                        <Input
                            className="user_name"
                            type="password"
                            value={form.checkPass}
                            placeholder="确认密码"
                            onChange={(value) => onChange('checkPass', value)}
                        />
                    </Form.Item>
                    <button className="save_btn" onClick={(e) => handleSubmit(e)}>保存</button>
                </Form>
            </div>
        </div>
    )
}

export default ChangePas