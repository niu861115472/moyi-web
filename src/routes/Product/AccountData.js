import React, { Component } from 'react';
import { Progress } from 'element-react'

function AccountData() {

    return (
        <div className="account_data">
            <p className="account_title">账户资料</p>
            <div className="account_content">
                <div className="content_left">
                    <div>
                        <img src={require('../../assets/images/apply_list/头像@2x.png')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/images/apply_list/认证备份@2x.png')} alt="" />
                        <span>已认证</span>
                    </div>
                    <div>
                        手机号
                        <span>12354687951</span>
                    </div>
                    <div>
                        用户名
                        <span>niu85462133</span>
                    </div>
                </div>
                <div className="content_right">
                    <div>
                        当前等级：
                        <span>V0</span>
                    </div>
                    <div>
                        距离下级还需：
                        <span>3000</span>
                    </div>
                    <Progress className="progress" strokeWidth={18} percentage={50} showText={false} />
                    <div className="progress_icon_box">
                        <div className="progress_icon">V0</div>
                        <div className="progress_icon progress_icon_none">V0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountData