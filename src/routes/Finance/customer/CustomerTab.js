<<<<<<< HEAD
import React, { Component } from 'react';
import { Tabs } from 'element-react'
import TableComponent from './Component'

function CustomerTab() {
    const rechargeTitles = ['时间', '数量', '详情']
    const customTitles = ['订单编号', '订单时间', '购买业务', '数量', '金额', '状态']
    const records1 = [
        { date: '2020-07-08 12:00:00', num: '50', detail: '下载QQ,消费10个' },
        { date: '2020-07-08 12:00:00', num: '50', detail: '下载QQ,消费10个' },
        { date: '2020-07-08 12:00:00', num: '50', detail: '下载QQ,消费10个' },
        { date: '2020-07-08 12:00:00', num: '50', detail: '下载QQ,消费10个' }
    ]
    const records2 = [
        { orderId: '58796', date: '2020-07-08 12:00:00', type: '设备数', num: '1000', price: '8000', status: '已付款' },
        { orderId: '58796', date: '2020-07-08 12:00:00', type: '设备数', num: '1000', price: '8000', status: '已付款' },
        { orderId: '58796', date: '2020-07-08 12:00:00', type: '设备数', num: '1000', price: '8000', status: '已付款' },
        { orderId: '58796', date: '2020-07-08 12:00:00', type: '设备数', num: '1000', price: '8000', status: '已付款' }
    ]
    return (
        <div className="customer_tab tabs">
            <Tabs activeName="1" onTabClick={(tab) => { }}>
                <Tabs.Pane label="消费记录" name="1">
                    <TableComponent
                        titles={rechargeTitles}
                        list={records1}
                        type="1"
                    />
                </Tabs.Pane>
                <Tabs.Pane label="充值记录" name="2">
                    <TableComponent
                        titles={customTitles}
                        list={records2}
                        type="2"
                    />
=======
import React, { useEffect, useState } from 'react';
import { Tabs } from 'element-react'
import TableComponent from './Component'
import Pagination from '../../../components/Pagination/Pagination'
import { connect } from 'dva'

function CustomerTab(props) {
    const rechargeTitles = ['时间', '数量', '详情']
    const customTitles = ['订单编号', '订单时间', '购买业务', '数量', '金额', '状态']
    const [tabIndex, setTabIndex] = useState(1)
    const { dispatch, costList, orderList, costPageInfo, orderPageInfo } = props
    useEffect(() => {
        if (tabIndex == 1) {
            dispatch({
                type: "finance/getCostInfoAsync",
                payload: { page: 1 }
            })
        }
        if (tabIndex == 2) {
            dispatch({
                type: "finance/getOrderInfoAsync",
                payload: { page: 1 }
            })
        }
    }, [tabIndex])
    return (
        <div className="customer_tab tabs">
            <Tabs activeName="1" onTabClick={(tab) => { setTabIndex(tab.props.name) }} >
                <Tabs.Pane label="消费记录" name="1">
                    {
                        costList &&
                        <TableComponent
                            titles={rechargeTitles}
                            list={costList}
                            type="1"
                        />
                    }
                    {
                        costPageInfo && costPageInfo.total_records > 0 ? <Pagination pageSize={costPageInfo.page_size} total={costPageInfo.total_records} space="finance" asyncFunc="getCostInfoAsync" /> : null
                    }
                </Tabs.Pane>
                <Tabs.Pane label="充值记录" name="2">
                    {
                        orderList &&
                        <TableComponent
                            titles={customTitles}
                            list={orderList}
                            type="2"
                        />
                    }
                    {
                        orderPageInfo && orderPageInfo.total_records > 0 ? < Pagination pageSize={orderPageInfo.page_size} total={orderPageInfo.total_records} space="appList" asyncFunc="getOrderInfoAsync" /> : null
                    }
>>>>>>> 9-25 update
                </Tabs.Pane>
            </Tabs>
        </div>
    )
}

<<<<<<< HEAD
export default CustomerTab
=======
const mapStateToProps = (state) => {
    return {
        costPageInfo: state.finance.costData.page_info,
        orderPageInfo: state.finance.orderData.page_info,
        costList: state.finance.costData.list,
        orderList: state.finance.orderData.list
    }
}

export default connect(mapStateToProps)(CustomerTab)
>>>>>>> 9-25 update
