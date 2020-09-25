<<<<<<< HEAD
import React from 'react';
import ListItem from './ListItem'
import Pagination from '../../components/Pagination/Pagination'

function ApplyList(props) {

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
=======
import React, { useState, useEffect } from 'react';
import ListItem from './ListItem'
import Pagination from '../../components/Pagination/Pagination'
import { connect } from 'dva'

function ApplyList(props) {
    const { dispatch, app_list, app_info, page } = props
    useEffect(() => {
        dispatch({
            type: 'appList/getAppListAsync',
            payload: {
                page
            }
        })
    }, [])
>>>>>>> 9-25 update
    return (
        <div className="apply_list">
            <div className="list_header">
                <ul>
                    <li>应用图标</li>
                    <li>应用名称</li>
                    <li>苹果版本</li>
                    <li>下载地址</li>
                    <li>上架状态</li>
                    <li>装机数量</li>
                    <li>下载数量</li>
                    <li>创建时间</li>
                    <li>操作</li>
                </ul>
            </div>
            {
<<<<<<< HEAD
                nums.map((item, index) => {
                    return (
                        <ListItem
                            key={index}
                            num={item} />
                    )
                })
            }
            {/* <Pagination layout="prev, pager, next" total={500} /> */}
            <Pagination />
=======
                app_list && app_list.map((item, index) => {
                    return (
                        <ListItem
                            key={index}
                            item={item} />
                    )
                })
            }
            {
                app_info && app_info.total_records > 0 ? <Pagination pageSize={app_info.page_size} total={app_info.total_records} space="appList" asyncFunc="getAppListAsync" /> : null
            }
>>>>>>> 9-25 update
        </div>
    )
}

<<<<<<< HEAD
export default ApplyList
=======
const mapStateToProps = (state) => {
    return {
        app_list: state.appList.list.list,
        app_info: state.appList.list.page_info,
        page: state.appList.pageSize
    }
}

export default connect(mapStateToProps)(ApplyList)
>>>>>>> 9-25 update
