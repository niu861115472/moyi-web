import React, { Component } from 'react';

function DetailHeader() {
    return (
        <div className="detail_header">
            <div className="data_statis">
                <div className="left">
                    <img src={require('../../assets/images/a.jpg')} alt="" />
                    <div className="version">
                        <p>QQ浏览器</p>
                        <p>IOS版本 - 1.0</p>
                        <p>Android版本 - 2.0</p>
                    </div>
                </div>
                <div className="right">数据统计</div>
            </div>
            <div className="download_table">
                <div className="top">
                    <p>大小</p>
                    <p>BundleID</p>
                    <p>原包下载地址</p>
                </div>
                <div className="bottom">
                    <p>0.5MB</p>
                    <p>32</p>
                    <p>
                        <a href="">http://sdhlhsljdlk.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailHeader