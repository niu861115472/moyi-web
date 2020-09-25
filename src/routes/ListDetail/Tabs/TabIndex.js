<<<<<<< HEAD
import React, { Component } from 'react';
import { Tabs } from 'element-react'
import BaseInfo from './BaseInfo'
import IosVersion from './IosVersion'
import AndroidVersion from './Android'
=======
import React, { useState } from 'react';
import { Tabs } from 'element-react'
import { connect } from 'dva'
import BaseInfo from './BaseInfo'
import IosVersion from './IosVersion'
import AndroidVersion from './Android'
import InstallRecord from './InstallRecord'
>>>>>>> 9-25 update
import DownRecord from './DownRecord'
import FlowContro from './FlowContro'
import './style.css'

<<<<<<< HEAD
function TabIndex() {

    return (
        <div className="tabs">
            <Tabs activeName="1" onTabClick={(tab) =>{}}>
                <Tabs.Pane label="基本信息" name="1">
                    <BaseInfo />
                </Tabs.Pane>
                <Tabs.Pane label="iOS版本" name="2">
                    <IosVersion />
                </Tabs.Pane>
                <Tabs.Pane label="Android版本" name="3">
                    <AndroidVersion />
                </Tabs.Pane>
                <Tabs.Pane label="装机记录" name="4">定时补偿任务</Tabs.Pane>
                <Tabs.Pane label="下载记录" name="5">
                    <DownRecord />
                </Tabs.Pane>
                <Tabs.Pane label="流量控制" name="6">
                    <FlowContro />
=======
function TabIndex(props) {
    const [tabIndex, setTabIndex] = useState("1")
    const handleTabClick = (tab) => {
        setTabIndex(tab.props.name)
    }
    return (
        <div className="tabs">
            <Tabs activeName="1" onTabClick={(tab) => handleTabClick(tab)}>
                <Tabs.Pane label="基本信息" name="1">
                    {
                        tabIndex == "1" ? <BaseInfo /> : null
                    }
                </Tabs.Pane>
                <Tabs.Pane label="iOS版本" name="2">
                    {
                        tabIndex == "2" ? <IosVersion /> : null
                    }
                </Tabs.Pane>
                <Tabs.Pane label="Android版本" name="3">
                    {
                        tabIndex == "3" ? <AndroidVersion /> : null
                    }
                </Tabs.Pane>
                <Tabs.Pane label="装机记录" name="4">
                    {
                        tabIndex == "4" ? <InstallRecord /> : null
                    }
                </Tabs.Pane>
                <Tabs.Pane label="下载记录" name="5">
                    {
                        tabIndex == "5" ? <DownRecord /> : null
                    }
                </Tabs.Pane>
                <Tabs.Pane label="流量控制" name="6">
                    {
                        tabIndex == "6" ? <FlowContro /> : null
                    }
>>>>>>> 9-25 update
                </Tabs.Pane>
            </Tabs>
        </div>
    )
}

<<<<<<< HEAD
export default TabIndex
=======
const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps)(TabIndex)
>>>>>>> 9-25 update
