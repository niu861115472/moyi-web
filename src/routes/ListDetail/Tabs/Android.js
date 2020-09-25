<<<<<<< HEAD
import React, { Component } from 'react';
import VersionComponent from './VersionComp'

function Android(){

    return (
        <div className="android_version">
            <VersionComponent
                type="ANDROID"
            />
=======
import React, { useEffect } from 'react';
import { connect } from 'dva'
import VersionComponent from './VersionComp'
import UploadComp from '../UploadComp'
import { withRouter } from 'dva/router'

function Android(props) {
    const { dispatch, data,has_android } = props
    const { search } = props.location
    const key = search.split('?')[1]
    useEffect(() => {
        dispatch({
            type: "appDetail/getAndroidInfoAsync",
            payload: { key }
        })
    }, [])
    return (
        <div className="android_version">
            {
                has_android == "1" ?
                    <VersionComponent
                        type="android"
                        data={data}
                    /> : <UploadComp
                        type="android"
                        fileType=".apk"
                    />
            }
>>>>>>> 9-25 update
        </div>
    )
}

<<<<<<< HEAD
export default Android
=======
const mapStateToProps = (state) => {
    console.log(state)
    return {
        has_android: state.appDetail.has_android,
        data: state.appDetail.andriodData
    }
}

export default withRouter(connect(mapStateToProps)(Android))
>>>>>>> 9-25 update
