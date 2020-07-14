import React, { useState } from 'react';
import { Input,Select } from 'element-react'

const list =[
    { value: '选项1',label: '黄金糕'},
    { value: '选项2',label: '双皮奶'},
    { value: '选项3',label: '北京烤鸭'},
    { value: '选项4',label: '蚵仔煎'},
    { value: '选项5',label: '龙须面'}
]

function Search() {
    const [options,setOptions] = useState(list)
    const [value,setValue] = useState('')
    return (
        <div className="search">
            <Input placeholder="名称" icon="search" />
            <Select value={value} clearable placeholder="类型">
                {
                    options.map(el => {
                        return <Select.Option key={el.value} label={el.label} value={el.value} />
                    })
                }
            </Select>
            <Select value={value} clearable placeholder="排序">
                {
                    options.map(el => {
                        return <Select.Option key={el.value} label={el.label} value={el.value} />
                    })
                }
            </Select>
            <div className="search_btn">搜索</div>
        </div>
    )
}

export default Search