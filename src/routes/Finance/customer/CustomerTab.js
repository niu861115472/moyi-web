import React, { Component } from 'react';
import { Tabs } from 'element-react'

function CustomerTab() {
    return (
        <div className="customer_tab tabs">
            <Tabs activeName="1" onTabClick={(tab) => { }}>
                <Tabs.Pane label="消费记录" name="1">
                    1
            </Tabs.Pane>
                <Tabs.Pane label="充值记录" name="2">
                    2
            </Tabs.Pane>
            </Tabs>
        </div>
    )
}

export default CustomerTab