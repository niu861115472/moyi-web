<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { MessageBox, Message } from 'element-react'
import { connect } from 'dva'

function VersionComponent(props) {
    const { data, dispatch, type } = props
    const [install_way, setInstallWay] = useState('')
    const [install_passwd, setInstallPasswd] = useState('')
    const [isVisible, setVisible] = useState(false)
    const [isHasPswBox, setisHasPswBox] = useState(false)
    useEffect(() => {
        setInstallWay(data.install_way)
        data.install_way == 1 ? setisHasPswBox(true) : null
    }, [data.install_way])
    useEffect(() => {
        setInstallPasswd(data.install_passwd)
    }, [data.install_passwd])
    const handlePublic = () => {
        setInstallWay(0)
        dispatch({
            type: `appDetail/change${type}InfoAsync`,
            payload: { key: data.key, install_way: 0, install_passwd: "" }
        })
    }
    const handleSecret = () => {
        setInstallWay(1)
>>>>>>> 9-25 update
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
<<<<<<< HEAD
=======
            dispatch({
                type: `appDetail/change${type}InfoAsync`,
                payload: { key: data.key, install_way: 1, install_passwd: value }
            })
>>>>>>> 9-25 update
            Message({
                type: 'success',
                message: '设置成功'
            })
<<<<<<< HEAD
            setPsw(value)
        })
    }
=======
            setisHasPswBox(true)
            setInstallPasswd(value)
        })
    }
    const handleUpdate = () => {
        if (type == 'ios') {
            dispatch({
                type: "appDetail/iosChange",
                has_ios: "0"
            })
        } else {
            dispatch({
                type: "appDetail/androidChange",
                has_android: "0"
            })
        }
    }
>>>>>>> 9-25 update

    return (
        <div className="component_version">
            <div className="distribute">
                <p>操作</p>
<<<<<<< HEAD
                <div className="btn">
=======
                <div className="btn" onClick={handleUpdate}>
>>>>>>> 9-25 update
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
<<<<<<< HEAD
                <p>当前版本 1.0</p>
                <p className="public_p">版本记录</p>
            </div>
            <div className="distribute_1">
                <p>安装方式</p> 
                <div className="public" onClick={handlePublic}>
                    {
                        publicRadio ?
=======
                <p>当前版本 {data.version}</p>
                <p className="public_p">版本记录</p>
            </div>
            <div className="distribute_1">
                <p>安装方式</p>
                <div className="public" onClick={handlePublic}>
                    {
                        install_way == 0 ?
>>>>>>> 9-25 update
                            <img src={require('../../../assets/images/apply_list/选中.png')} alt="" /> :
                            <img src={require('../../../assets/images/apply_list/未选中.png')} alt="" />
                    }
                    <p>公开</p>
                </div>
                <div className="secret" onClick={handleSecret}>
                    {
<<<<<<< HEAD
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
=======
                        install_way == 1 ?
                            <img src={require('../../../assets/images/apply_list/选中.png')} alt="" /> :
                            <img src={require('../../../assets/images/apply_list/未选中.png')} alt="" />
                    }
                    <p>密码{install_way == 0 || !isHasPswBox ? '(暂无)' : ''}</p>
                </div>
                {
                    install_way == 0 || !isHasPswBox ? null :
                        <div className="password_box">
                            {
                                isVisible ?
                                    <p>{install_passwd}</p> :
>>>>>>> 9-25 update
                                    <p>******</p>
                            }
                            {
                                isVisible ?
                                    <img onClick={handleVisible} src={require('../../../assets/images/apply_list/可见.png')} alt="" /> :
                                    <img onClick={handleVisible} src={require('../../../assets/images/apply_list/不可见.png')} alt="" />
                            }
                        </div>
                }
<<<<<<< HEAD

=======
>>>>>>> 9-25 update
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default IosVersion
=======
const mapStateToProps = (state) => {
    return {
        has_android: state.appDetail.has_android,
        has_ios: state.appDetail.has_ios
    }
}

export default connect(mapStateToProps)(VersionComponent)
>>>>>>> 9-25 update
