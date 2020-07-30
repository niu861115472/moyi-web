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
                </Tabs.Pane>
            </Tabs>
        </div>
    )
}

export default CustomerTab