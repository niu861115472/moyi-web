import React, { Component } from 'react';
import DetailHeader from './DetailHeader'
import TabIndex from './Tabs/TabIndex'
import './style.css'

function ListItem(){

    return (
        <div className="list_detail">
            <DetailHeader />
            <TabIndex />
        </div>
    )
}

export default ListItem