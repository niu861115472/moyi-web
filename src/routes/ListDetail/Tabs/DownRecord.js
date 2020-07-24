import React, { Component } from 'react';
import Pagination from '../../../components/Pagination/Pagination'

const ListItem = (props) => {
    return (
        <div className="bottom" style={{ borderBottom: "1px solid #f1f1f1" }}>
            <p>0.5M</p>
            <p>32</p>
            <p>1.0</p>
            <p>2019.8290.293</p>
            <p>2019-2-12 12:29:09</p>
        </div>
    )
}

function DownRecord() {

    const list = [1, 2, 3, 4, 5, 6]

    return (
        <div className="down_record detail_header apply_list">
            <div className="download_table">
                <div className="top">
                    <p>设备</p>
                    <p>系统版本</p>
                    <p>APP版本</p>
                    <p>下载IP</p>
                    <p>下载时间</p>
                </div>
                {
                    list.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                            />
                        )
                    })
                }
            </div>
            <Pagination />
        </div>
    )
}

export default DownRecord