import React, { Component } from 'react';

function Component() {

    return (
        <div className="compoent">
            <div className="download_table">
                <div className="top">
                    <p>设备</p>
                    <p>系统版本</p>
                    <p>APP版本</p>
                    <p>下载IP</p>
                    <p>下载时间</p>
                </div>
                {
                    list.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Component