import React, { Component, Fragment } from 'react';
import { MessageBox } from 'element-react'

const DataList = (props) => {
    return (
        <Fragment>
            <p className="account_title">个人资料</p>
            <div className="name_info">
                <div className="personal_item">
                    <p>头像</p>
                    <img src={require('../../assets/images/apply_list/头像.png')} alt="" />
                    <button onClick={props.handleEditHead}>编辑</button>
                </div>
                <div className="personal_item">
                    <p>手机</p>
                    <p>{props.tel}</p>
                    <button onClick={() => props.handleEdit('手机号',props.tel)}>编辑</button>
                </div>
                <div className="personal_item">
                    <p>QQ</p>
                    <p>{props.QQ}</p>
                    <button onClick={() => props.handleEdit('QQ',props.QQ)}>编辑</button>
                </div>
                <div className="personal_item">
                    <p>邮箱</p>
                    <p>{props.email}</p>
                    <button onClick={() => props.handleEdit('邮箱',props.email)}>编辑</button>
                </div>
            </div>
        </Fragment>
    )
}

function PersonalData() {

    const handleEdit = (key,value) => {
        MessageBox.prompt(`请输入${key}`, '设置', {
            confirmButtonText: '确定',
            inputValue:value
        }).then(({ value }) => {
        })
    }
    const handleEditHead = () => {

    }

    return (
        <div className="personal_data">
            <DataList
                handleEdit={handleEdit}
                tel="155555555"
                QQ="8564212"
                email="59642312@qq.com"
            />
        </div>
    )
}

export default PersonalData