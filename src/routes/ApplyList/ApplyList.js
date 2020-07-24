import React from 'react';
import ListItem from './ListItem'
import Pagination from '../../components/Pagination/Pagination'

function ApplyList(props) {

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
        </div>
    )
}

export default ApplyList