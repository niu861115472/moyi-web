import React, { Component } from 'react';

const list = ['充值','消费','剩余','订单数']


function ListComponent(props) {
    const bgImg = {
        backgroundSize: '100% 100%',
        backgroundImage: 'url(' + props.img + ')'
    }

    return (
        <div className="list_component">
            <div className="list_bg" style={bgImg}>
                <img src={props.icon} alt="" />
                <span>{props.text}</span>
                <p>{props.num}</p>
            </div>
            <div className="info_list">
                <div>
                    <ul>
                        <li>今日</li>
                        <li>昨日</li>
                        <li>本周</li>
                        <li>上周</li>
                        <li>本月</li>
                        <li>上月</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        {
                            list.map((item,index) =>{

                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListComponent