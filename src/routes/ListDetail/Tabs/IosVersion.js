import React, { Component } from 'react';

function IosVersion() {

    return (
        <div className="ios_version">
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
                <div className="public">
                    <img src={require('../')} alt=""/>
                    <p className="public_p">公开</p>
                </div>
                <div className="secret">
                    <img src="" alt=""/>
                    <p className="public_p">密码</p>
                </div>
            </div>
        </div>
    )
}

export default IosVersion