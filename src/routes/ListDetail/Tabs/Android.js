import React, { Component } from 'react';
import VersionComponent from './VersionComp'

function Android(){

    return (
        <div className="android_version">
            <VersionComponent
                type="ANDROID"
            />
        </div>
    )
}

export default Android