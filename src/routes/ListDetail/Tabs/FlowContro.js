import React, { Component } from 'react';
import { Checkbox } from 'element-react'

function FlowContro() {

    return (
        <div className="flow_contro">
            <div className="download_set">
                <Checkbox checked={false}>下载超量预警</Checkbox>
                <p>填写手机号即可巴拉阿坝来来来</p>
                <ul>
                    <li>
                        <span>检测频率/分钟</span>
                        <input type="text"/>
                    </li>
                    <li>
                        <span>下载次数</span>
                        <input type="text"/>
                    </li>
                    <li>保存</li>
                </ul>
            </div>
            <div className="download_set">
                <Checkbox checked={true}>下载超量自动下架</Checkbox>
                <p>填写手机号即可巴拉阿坝来来来</p>
                <ul>
                    <li>
                        <span>检测频率/分钟</span>
                        <input type="text"/>
                    </li>
                    <li>
                        <span>下载次数</span>
                        <input type="text"/>
                    </li>
                    <li>保存</li>
                </ul>
            </div>
        </div>
    )
}

export default FlowContro