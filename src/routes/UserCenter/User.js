import React from 'react';
import RealName from './RealName'
import PersonalData from './PersonalData'
import ChangePas from './ChangePas'
import './style.css'

function UserCenter(){

    return (
        <div className="user_center">
            <RealName />
            <PersonalData />
            <ChangePas />
        </div>
    )
}

export default UserCenter