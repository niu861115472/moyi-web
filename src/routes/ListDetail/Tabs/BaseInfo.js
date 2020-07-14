import React, { Component } from 'react';
import { Input } from 'element-react'

function BaseInfo() {

    return (
        <div className="base_info">
            <div className="distribute">
                <p>分发图标</p>
                <img className="icon" src={require('../../../assets/images/a.jpg')} alt="" />
            </div>
            <div className="service distribute">
                <div>
                    <p>服务商/公司</p>
                    <input className="input" type="text" placeholder="暂无" />
                </div>
                <div>
                    <p>类别</p>
                    <input className="input" type="text" placeholder="暂无" />
                </div>
            </div>
            <div className="textarea">
                <p>版本描述</p>
                <Input
                    type="textarea"
                    rows={8}
                    placeholder="暂无"
                />
            </div>
            <div className="textarea">
            <p>应用描述</p>
                <Input
                    type="textarea"
                    rows={8}
                    placeholder="暂无"
                />
            </div>
            <div className="save_btn">保存</div>
        </div>
    )
}

export default BaseInfo