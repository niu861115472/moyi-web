<<<<<<< HEAD
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
=======
import React, { useEffect } from 'react';
import Pagination from '../../../components/Pagination/Pagination'
import { connect } from 'dva'

const ListItem = (props) => {
    const { item } = props
    return (
        <div className="bottom" style={{ borderBottom: "1px solid #f1f1f1" }}>
            <p>{item.device_name}</p>
            <p>{item.ios_version}</p>
            <p>{item.app_version}</p>
            <p>{item.ip}</p>
            <p>{item.create_time_fmt}</p>
>>>>>>> 9-25 update
        </div>
    )
}

<<<<<<< HEAD
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
=======
function DownRecord(props) {

    console.log(props)
    const { dispatch, list, pageInfo } = props
    useEffect(() => {
        dispatch({
            type: 'appDetail/getDownloadListAsync',
            payload: {
                page: '1'
            }
        })
    }, [])

    return (
        <div className="down_record detail_header apply_list">
            {
                list &&
                <div>
                    <div className="download_table">
                        <div className="top">
                            <p>设备</p>
                            <p>系统版本</p>
                            <p>APP版本</p>
                            <p>下载IP</p>
                            <p>下载时间</p>
                        </div>
                        {
                            list.length == 0 ?
                                <div className="no_records">暂无记录!</div> :
                                list.map((item, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            item={item}
                                        />
                                    )
                                })
                        }
                    </div>
                    {
                        pageInfo && pageInfo.total_page > 0 ? <Pagination pageSize={pageInfo.page_size} total={pageInfo.total_records} space="appDetail" asyncFunc="getDownloadListAsync" /> : null
                    }
                </div>
            }
>>>>>>> 9-25 update
        </div>
    )
}

<<<<<<< HEAD
export default DownRecord
=======
const mapStateToProps = (state) => {
    return {
        pageInfo: state.appDetail.downData.page_info,
        list: state.appDetail.downData.list
    }
}

export default connect(mapStateToProps)(DownRecord)
>>>>>>> 9-25 update
