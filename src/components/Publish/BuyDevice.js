import React, { Component } from 'react';
import { connect } from 'dva'
import { Dialog, Button, Tabs } from 'element-react'
import { useState } from 'react';

const list = [
    { num: '1000', discount: '2562', origin_price: '555' },
    { num: '1000', discount: '2562', origin_price: '555' },
    { num: '1000', discount: '2562', origin_price: '555' },
    { num: '1000', discount: '2562', origin_price: '555' },
    { num: '1000', discount: '2562', origin_price: '555' },
    { num: '1000', discount: '2562', origin_price: '555' }
]

const DeviceItem = (props) => {
    return (
        <div className="device_item">
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li onClick={() => props.handleSelect(index)} key={item + index} className={index == props.currentIndex ? 'currentStyle' : ''}>
                                <p>{item.num}台</p><p><span>￥</span><span>{item.discount}</span>优惠价<span></span></p><p>原价￥{item.origin_price}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

function BuyDevice(props) {

    const [currentIndex, setIndex] = useState(0)

    const handleCancel = () => {
        props.dispatch({
            type: 'uploadModel/changeVisible',
            buyVisible: false
        })
    }
    const handleSelect = (index) => {
        setIndex(index)
    }

    return (
        <div className="buy_device tabs">
            <Dialog
                title="请选择购买签名设备数"
                size="tiny"
                visible={props.buyVisible}
                onCancel={handleCancel}
                lockScroll={false}
            >
                <Dialog.Body>
                    <Tabs activeName="1" onTabClick={(tab) => { }}>
                        <Tabs.Pane label="超级签名" name="1">
                            <DeviceItem
                                handleSelect={handleSelect}
                                currentIndex={currentIndex}
                            />
                        </Tabs.Pane>
                        <Tabs.Pane label="下载点数" name="2">
                            2
                        </Tabs.Pane>
                    </Tabs>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                    <Button type="primary">下一步</Button>
                </Dialog.Footer>
            </Dialog>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        buyVisible: state.uploadModel.buyVisible
    }
}

export default connect(mapStateToProps)(BuyDevice)