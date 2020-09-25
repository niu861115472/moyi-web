<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React from 'react';
>>>>>>> 9-25 update

const CustomListItem = (props) => {
    return (
        <div className="bottom" style={{ borderBottom: "1px solid #f1f1f1" }}>
<<<<<<< HEAD
            <p>{props.item.date}</p>
            <p>{props.item.num}</p>
            <p>{props.item.detail}</p>
=======
            <p>{props.item.create_time_fmt}</p>
            <p>{props.item.num}</p>
            <p>{props.item.mark}</p>
>>>>>>> 9-25 update
        </div>
    )
}

const RechargeListItem = (props) => {
    return (
        <div className="bottom" style={{ borderBottom: "1px solid #f1f1f1" }}>
<<<<<<< HEAD
            <p>{props.item.orderId}</p>
            <p>{props.item.date}</p>
            <p>{props.item.type}</p>
            <p>{props.item.num}</p>
            <p>{props.item.price}</p>
            <p>{props.item.status}</p>
=======
            <p>{props.item.order_sn}</p>
            <p>{props.item.create_time_fmt}</p>
            <p>{props.item.type}</p>
            <p>{props.item.num}</p>
            <p>{props.item.pay_amount}</p>
            <p>{props.item.order_status}</p>
>>>>>>> 9-25 update
        </div>
    )
}


function TableComponent(props) {
    const list = [1, 2, 3, 4]
    return (
        <div className="component detail_header">
            <div className="download_table">
                <div className="top">
                    {
                        props.titles.map((item, index) => {
                            return (
                                <p key={item + index}>{item}</p>
                            )
                        })
                    }
                </div>
                {
                    props.list.map((item, index) => {
                        return (
                            props.type == "1" ?
                                <CustomListItem
                                    key={index}
                                    item={item}
                                /> :
                                <RechargeListItem
                                    key={index}
                                    item={item}
                                />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TableComponent