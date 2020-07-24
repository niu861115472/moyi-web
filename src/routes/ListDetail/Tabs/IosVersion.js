import React, { useState } from 'react';
import VersionComponent from './VersionComp'

function IosVersion() {

    return (
        <div className="ios_version">
            <VersionComponent
                type="IOS"
            />
        </div>
    )
}

export default IosVersion