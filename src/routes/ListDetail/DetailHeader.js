<<<<<<< HEAD
import React, { Component } from 'react';

function DetailHeader() {
=======
import React, { useState, useEffect } from 'react';
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import Qrcode from '../../components/qrcode/Qrcode'

function DetailHeader(props) {
    const { search } = props.location
    const key = search.split('?')[1]
    const { data, dispatch } = props
    useEffect(() => {
        dispatch({
            type: "appDetail/getHeadInfoAsync",
            payload: {
                key
            }
        })
    }, [])
>>>>>>> 9-25 update
    return (
        <div className="detail_header">
            <div className="data_statis">
                <div className="left">
<<<<<<< HEAD
                    <img src={require('../../assets/images/a.jpg')} alt="" />
                    <div className="version">
                        <p>QQ浏览器</p>
                        <p>IOS版本 - 1.0</p>
                        <p>Android版本 - 2.0</p>
=======
                    <img src={data.icon} alt="" />
                    <div className="version">
                        <p>{data.name}</p>
                        <p>IOS版本 - {data.ios_version}</p>
                        <p>Android版本 - {data.android_version}</p>
>>>>>>> 9-25 update
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
<<<<<<< HEAD
                    <p>0.5MB</p>
                    <p>32</p>
                    <p>
                        <a href="">http://sdhlhsljdlk.com</a>
                    </p>
=======
                    <p>{data.size}MB</p>
                    <p>{data.bundle}</p>
                    <Qrcode url={data.download_url} />
>>>>>>> 9-25 update
                </div>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default DetailHeader
=======
const mapStateToProps = (state) => {
    return {
        data: state.appDetail.data
    }
}

export default withRouter(connect(mapStateToProps)(DetailHeader))
>>>>>>> 9-25 update
