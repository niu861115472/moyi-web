import React, { useState } from 'react';
import { MessageBox, Message } from 'element-react'

function IosVersion(props) {

    const [publicRadio, setCheck] = useState(true)
    const [secretRadio, setCheck1] = useState(!publicRadio)
    const [password, setPsw] = useState('')
    const [isVisible, setVisible] = useState(false)

    const handlePublic = () => {
        if (publicRadio) return
        setCheck(true)
        setCheck1(false)
    }
    const handleSecret = () => {
        if (secretRadio) return
        setCheck(false)
        setCheck1(true)
        if(props.type == 'IOS')
        setPasswordBox()
    }
    const handleVisible = () => {
        setVisible(!isVisible)
    }
    const setPasswordBox = () => {
        MessageBox.prompt('请输入密码', '请设置安装密码', {
            confirmButtonText: '完成设置',
            confirmButtonClass: 'complete',
            cancelButtonClass: 'cancel'
        }).then(({ value }) => {
            Message({
                type: 'success',
                message: '设置成功'
            })
            setPsw(value)
        })
    }

    return (
        <div className="component_version">
            <div className="distribute">
                <p>操作</p>
                <div className="btn">
                    <img src={require('../../../assets/images/apply_list/更新.png')} alt="" />
                    更新
                </div>
                <div className="btn">
                    <img src={require('../../../assets/images/apply_list/修复.png')} alt="" />
                    修复
                </div>
            </div>
            <div className="distribute_address">
                <p>分发地址</p>
                <input className="input" type="text" placeholder="暂无" />
            </div>
            <div className="distribute_1">
                <p>当前版本 1.0</p>
                <p className="public_p">版本记录</p>
            </div>
            <div className="distribute_1">
                <p>安装方式</p> 
                <div className="public" onClick={handlePublic}>
                    {
                        publicRadio ?
                            <img src={require('../../../assets/images/apply_list/选中.png')} alt="" /> :
                            <img src={require('../../../assets/images/apply_list/未选中.png')} alt="" />
                    }
                    <p>公开</p>
                </div>
                <div className="secret" onClick={handleSecret}>
                    {
                        secretRadio ?
                            <img src={require('../../../assets/images/apply_list/选中.png')} alt="" /> :
                            <img src={require('../../../assets/images/apply_list/未选中.png')} alt="" />
                    }
                    <p>密码{props.type == 'ANDROID' ? '(暂无)' : ''}</p>
                </div>
                {
                    publicRadio || props.type == 'ANDROID' ? null :
                        <div className="password_box">
                            {
                                isVisible ?
                                    <p>{password}</p> :
                                    <p>******</p>
                            }
                            {
                                isVisible ?
                                    <img onClick={handleVisible} src={require('../../../assets/images/apply_list/可见.png')} alt="" /> :
                                    <img onClick={handleVisible} src={require('../../../assets/images/apply_list/不可见.png')} alt="" />
                            }
                        </div>
                }

            </div>
        </div>
    )
}

export default IosVersion