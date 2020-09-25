<<<<<<< HEAD
import React, { useState } from 'react';
import VersionComponent from './VersionComp'

function IosVersion() {

    return (
        <div className="ios_version">
            <VersionComponent
                type="IOS"
            />
=======
import React, { useState, useEffect,useCallback } from 'react';
import { connect } from 'dva'
import VersionComponent from './VersionComp'
import UploadComp from '../UploadComp'
import { withRouter } from 'dva/router'

function IosVersion(props) {
    const { dispatch, data, has_ios } = props
    const { search } = props.location
    const key = search.split('?')[1]
    useEffect(() => {
        dispatch({
            type: "appDetail/getIosInfoAsync",
            payload: { key }
        })
    }, [])
    return (
        <div className="ios_version">
            {
                has_ios == "1" ?
                    <VersionComponent
                        type="ios"
                        data={data}
                    /> :
                    <UploadComp
                        type="ios"
                        fileType=".ipa"
                    />
            }
>>>>>>> 9-25 update
        </div>
    )
}

<<<<<<< HEAD
export default IosVersion
=======
const mapStateToProps = (state) => {
    return {
        has_ios: state.appDetail.has_ios,
        data: state.appDetail.iosData
    }
}

export default withRouter(connect(mapStateToProps)(IosVersion))
>>>>>>> 9-25 update
