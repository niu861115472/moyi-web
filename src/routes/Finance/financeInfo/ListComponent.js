import React, { Component } from 'react';

const list = [
    { key: '充值', today: '+500', yesterday: '-600', this_week: '+2000', last_week: '-400', this_month: '+600', last_month: '+500' },
    { key: '消费', today: '+500', yesterday: '-600', this_week: '+2000', last_week: '-400', this_month: '+600', last_month: '+500' },
    { key: '剩余', today: '+500', yesterday: '-600', this_week: '+2000', last_week: '-400', this_month: '+600', last_month: '+500' },
    { key: '订单', today: '+500', yesterday: '-600', this_week: '+2000', last_week: '-400', this_month: '+600', last_month: '+500' }
]


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
                <div className="date">
                    <ul>
                        <li>今日</li>
                        <li>昨日</li>
                        <li>本周</li>
                        <li>上周</li>
                        <li>本月</li>
                        <li>上月</li>
                    </ul>
                </div>
                <div className="data">
                    <ul>
                        {
                            list.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <p>{item.key}</p>
                                        <div>
                                            <p>{item.today}</p>
                                            <p>{item.yesterday}</p>
                                            <p>{item.this_week}</p>
                                            <p>{item.last_week}</p>
                                            <p>{item.this_month}</p>
                                            <p>{item.last_month}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListComponent