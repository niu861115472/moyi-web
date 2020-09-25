import React, { Component } from 'react';

const list = [
    { key: '充值', today: '+500', yesterday: '-600', this_week: '+2000', last_week: '-400', this_month: '+600', last_month: '+500' },
    { key: '消费', today: '+500', yesterday: '-600', this_week: '+2000', last_week: '-400', this_month: '+600', last_month: '+500' },
<<<<<<< HEAD
    { key: '剩余', today: '+500', yesterday: '-600', this_week: '+2000', last_week: '-400', this_month: '+600', last_month: '+500' },
    { key: '订单', today: '+500', yesterday: '-600', this_week: '+2000', last_week: '-400', this_month: '+600', last_month: '+500' }
=======
    { key: '剩余', today: '+500', yesterday: '-600', this_week: '+2000', last_week: '-400', this_month: '+600', last_month: '+500' }
>>>>>>> 9-25 update
]


function ListComponent(props) {
<<<<<<< HEAD
=======
    const { list: { pay, cost, left }, all_left } = props.list
>>>>>>> 9-25 update
    const bgImg = {
        backgroundSize: '100% 100%',
        backgroundImage: 'url(' + props.img + ')'
    }

    return (
        <div className="list_component">
            <div className="list_bg" style={bgImg}>
                <img src={props.icon} alt="" />
                <span>{props.text}</span>
<<<<<<< HEAD
                <p>{props.num}</p>
=======
                <p>{all_left}</p>
>>>>>>> 9-25 update
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
<<<<<<< HEAD
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
=======
                        <li>
                            <p>充值</p>
                            <div>
                                <p>{pay.today}</p>
                                <p>{pay.yesterday}</p>
                                <p>{pay.this_week}</p>
                                <p>{pay.last_week}</p>
                                <p>{pay.this_month}</p>
                                <p>{pay.last_month}</p>
                            </div>
                        </li>
                        <li>
                            <p>消费</p>
                            <div>
                                <p>{cost.today}</p>
                                <p>{cost.yesterday}</p>
                                <p>{cost.this_week}</p>
                                <p>{cost.last_week}</p>
                                <p>{cost.this_month}</p>
                                <p>{cost.last_month}</p>
                            </div>
                        </li>
                        <li>
                            <p>剩余</p>
                            <div>
                                <p>{left.today}</p>
                                <p>{left.yesterday}</p>
                                <p>{left.this_week}</p>
                                <p>{left.last_week}</p>
                                <p>{left.this_month}</p>
                                <p>{left.last_month}</p>
                            </div>
                        </li>
>>>>>>> 9-25 update
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListComponent