import React, { Component, Fragment } from 'react';

const NameInfo = (props) => {
    return (
        <Fragment>
            <p className="account_title">实名认证</p>
            <div className="name_info">

                <div className="personal_item">
                    <p>认证名称</p>
                    <p>张三</p>
                </div>
                <div className="personal_item">
                    <p>身份证号</p>
                    <p>15509384572</p>
                </div>
                <div className="personal_item">
                    <p>认证类型</p>
                    <p>个人用户</p>
                </div>
            </div>
        </Fragment>
    )
}

function RealName() {

    return (
        <div className="real_name">
            <NameInfo />
        </div>
    )
}

export default RealName