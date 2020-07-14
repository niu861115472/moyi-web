import React, { Component } from 'react';
import { Input } from 'element-react'

function BaseInfo() {

    return (
        <div className="base_info">
            <div>
                <p>分发图标</p>
                <img className="icon" src={require('../../../assets/images/a.jpg')} alt="" />
            </div>
            <div>
                <div>
                    <p>服务商/公司</p>
                    <input type="text" />
                </div>
                <div>
                    <p>类别</p>
                    <input type="text" />
                </div>
            </div>
            <div>
                <p>版本描述</p>
                <Input
                    type="textarea"
                    autosize={{ minRows: 2, maxRows: 4 }}
                    placeholder="暂无"
                />
            </div>
            <div>
            <p>应用描述</p>
                <Input
                    type="textarea"
                    autosize={{ minRows: 2, maxRows: 4 }}
                    placeholder="暂无"
                />
            </div>
            <div>保存</div>
        </div>
    )
}

export default BaseInfo