import React from 'react';
import Search from './Search'
import ApplyList from './ApplyList'
import './style.css'

function ApplyIndex(){

    return (
        <div className="apply_index">
            <Search />
            <ApplyList />
        </div>
    )
}

export default ApplyIndex