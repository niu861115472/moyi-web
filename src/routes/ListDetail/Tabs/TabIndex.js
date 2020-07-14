import React, { Component } from 'react';
import { Tabs } from 'element-react'
import BaseInfo from './BaseInfo'
import IosVersion from './IosVersion'
import './style.css'

function TabIndex() {

    return (
        <div className="tabs">
            <Tabs activeName="2" onTabClick={(tab) =>{}}>
                <Tabs.Pane label="基本信息" name="1">
                    <BaseInfo />
                </Tabs.Pane>
                <Tabs.Pane label="iOS版本" name="2">
                    <IosVersion />
                </Tabs.Pane>
                <Tabs.Pane label="Android版本" name="3">角色管理</Tabs.Pane>
                <Tabs.Pane label="装机记录" name="4">定时补偿任务</Tabs.Pane>
                <Tabs.Pane label="下载记录" name="5">定时补偿任务</Tabs.Pane>
                <Tabs.Pane label="流量控制" name="6">定时补偿任务</Tabs.Pane>
            </Tabs>
        </div>
    )
}

export default TabIndex