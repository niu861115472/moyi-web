import React, { Component } from 'react';
<<<<<<< HEAD

function TodayData(){

=======
import { connect } from 'dva'
import { useEffect } from 'react';

function TodayData(props) {
    const { data } = props
    useEffect(() => {
        props.dispatch({
            type: 'product/getTodayDataAsync'
        })
    }, [])
>>>>>>> 9-25 update
    return (
        <div className="today_data account_data">
            <p className="account_title">当日数据</p>
            <div className="data_list">
                <ul>
                    <li>
<<<<<<< HEAD
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
=======
                        <div>
                            <img src={require("../../assets/images/apply_list/今日下载.png")} alt="" />
                        </div>
                        <div>
                            <p style={{color:"#285EE9"}}>{data.today_download}次</p>
                            <p>今日下载</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={require("../../assets/images/apply_list/今日装机.png")} alt="" />
                        </div>
                        <div>
                            <p style={{color:"#1AD1E0"}}>{data.today_install}次</p>
                            <p>今日装机</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={require("../../assets/images/apply_list/剩余点数.png")} alt="" />
                        </div>
                        <div>
                            <p style={{color:"#EF981C"}}>{data.left_download_points}点</p>
                            <p>剩余点数</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={require("../../assets/images/apply_list/剩余设备.png")} alt="" />
                        </div>
                        <div>
                            <p style={{color:"#EB4E81"}}>{data.left_install_points}台</p>
                            <p>剩余设备</p>
                        </div>
>>>>>>> 9-25 update
                    </li>
                </ul>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default TodayData
=======
const mapStateToProps = (state) => {
    return {
        data: state.product.todayData
    }
}

export default connect(mapStateToProps)(TodayData)
>>>>>>> 9-25 update
