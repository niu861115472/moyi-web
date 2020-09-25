<<<<<<< HEAD
import React, { Component } from 'react';

function InstallRecord(){

    return (
        <div className="install_record">
            
=======
import React, { useEffect } from 'react';
import Pagination from '../../../components/Pagination/Pagination'
import { connect } from 'dva'

const ListItem = (props) => {
    const { item } = props
    return (
        <div className="bottom" style={{ borderBottom: "1px solid #f1f1f1" }}>
            <p>{item.udid}</p>
            <p>{item.ios_version}</p>
            <p>{item.device_name}</p>
            <p>{item.app_version}</p>
            <p>{item.ip}</p>
            <p>{item.create_time_fmt}</p>
        </div>
    )
}

function InstallRecord(props) {
    console.log(props)
    const { dispatch, list, pageInfo } = props
    useEffect(() => {
        dispatch({
            type: 'appDetail/getInstallListAsync',
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
                            <p>UDID</p>
                            <p>设备型号</p>
                            <p>系统版本</p>
                            <p>app版本</p>
                            <p>IP</p>
                            <p>装机时间</p>
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
                        pageInfo && pageInfo.total_page > 0 ? <Pagination pageSize={pageInfo.page_size} total={pageInfo.total_records} space="appDetail" asyncFunc="getInstallListAsync" /> : null
                    }
                </div>
            }
>>>>>>> 9-25 update
        </div>
    )
}

<<<<<<< HEAD
export default InstallRecord
=======
const mapStateToProps = (state) => {
    return {
        pageInfo: state.appDetail.installData.page_info,
        list: state.appDetail.installData.list
    }
}

export default connect(mapStateToProps)(InstallRecord)
>>>>>>> 9-25 update
