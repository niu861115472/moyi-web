<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { connect } from 'dva'
import { Dialog, Button, Tabs } from 'element-react'
import { getZfbPay } from "../../services/example"

const DeviceItem = (props) => {
    const { list, active } = props
>>>>>>> 9-25 update
    return (
        <div className="device_item">
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li onClick={() => props.handleSelect(index)} key={item + index} className={index == props.currentIndex ? 'currentStyle' : ''}>
<<<<<<< HEAD
                                <p>{item.num}台</p><p><span>￥</span><span>{item.discount}</span>优惠价<span></span></p><p>原价￥{item.origin_price}</p>
=======
                                <p>{item.num}{active == 1 ? '台' : '点'}</p><p><span>￥</span><span>{item.ex_price}</span>优惠价<span></span></p><p>原价￥{item.now_price}</p>
>>>>>>> 9-25 update
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

function BuyDevice(props) {
<<<<<<< HEAD

    const [currentIndex, setIndex] = useState(0)

    const handleCancel = () => {
        props.dispatch({
=======
    const { dispatch, data: { public_pool, points } } = props
    const [publicIndex, setPublicIndex] = useState(0)
    const [pointIndex, setPointIndex] = useState(0)
    useEffect(() => {
        dispatch({
            type: "uploadModel/getPriceListAsync"
        })
    }, [])
    const handleCancel = () => {
        dispatch({
>>>>>>> 9-25 update
            type: 'uploadModel/changeVisible',
            buyVisible: false
        })
    }
<<<<<<< HEAD
    const handleSelect = (index) => {
        setIndex(index)
    }

=======
    const handleSelectPublic = (index) => {
        setPublicIndex(index)
    }
    const handleSelectPoint = (index) => {
        setPointIndex(index)
    }
    const handleZfbPay = () => {
        const newTab = window.open()
        getZfbPay().then(res => {
            console.log(res)
            const div = document.createElement('div');
            div.innerHTML = res.body; // html code
            newTab.document.body.appendChild(div);
            newTab.document.forms.alipaysubmit.submit();
        })
    }
>>>>>>> 9-25 update
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
<<<<<<< HEAD
                            <DeviceItem
                                handleSelect={handleSelect}
                                currentIndex={currentIndex}
                            />
                        </Tabs.Pane>
                        <Tabs.Pane label="下载点数" name="2">
                            2
=======
                            {
                                public_pool && public_pool.list &&
                                <DeviceItem
                                    handleSelect={handleSelectPublic}
                                    currentIndex={publicIndex}
                                    list={public_pool.list}
                                    active={1}
                                />
                            }
                        </Tabs.Pane>
                        <Tabs.Pane label="下载点数" name="2">
                            {
                                points && points.list &&
                                <DeviceItem
                                    handleSelect={handleSelectPoint}
                                    currentIndex={pointIndex}
                                    list={points.list}
                                    active={2}
                                />
                            }
>>>>>>> 9-25 update
                        </Tabs.Pane>
                    </Tabs>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
<<<<<<< HEAD
                    <Button type="primary">下一步</Button>
=======
                    <Button type="primary" onClick={handleZfbPay}>下一步</Button>
>>>>>>> 9-25 update
                </Dialog.Footer>
            </Dialog>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
<<<<<<< HEAD
        buyVisible: state.uploadModel.buyVisible
=======
        buyVisible: state.uploadModel.buyVisible,
        data: state.uploadModel.data
>>>>>>> 9-25 update
    }
}

export default connect(mapStateToProps)(BuyDevice)