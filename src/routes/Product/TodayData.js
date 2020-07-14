import React, { Component } from 'react';

function TodayData(){

    return (
        <div className="today_data account_data">
            <p className="account_title">当日数据</p>
            <div className="data_list">
                <ul>
                    <li>
                        <p>1625次</p>
                        <p>今日下载</p>
                    </li>
                    <li>
                        <p>5633次</p>
                        <p>今日装机</p>
                    </li>
                    <li>
                        <p>66点</p>
                        <p>剩余点数</p>
                    </li>
                    <li>
                        <p>33台</p>
                        <p>剩余设备</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TodayData