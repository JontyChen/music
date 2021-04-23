import React from 'react'

import './LatestAlbum.scss'

export default function LatestAlbum() {
    // 这个最新专辑内容是不固定 根据请求返回的的进行渲染
    const content=[
        {
            key:'ballad',
            name:'专辑名称',
            pic:require('../../../../assets/img/jielun.jpg').default
        },
        {
            key:'popular',
            name:'专辑名称',
            pic:require('../../../../assets/img/jielun.jpg').default
        },
        {
            key:'rap',
            name:'专辑名称',
            pic:require('../../../../assets/img/jielun.jpg').default
        },
        {
            key:'modern',
            name:'专辑名称',
            pic:require('../../../../assets/img/jielun.jpg').default
        },
        {
            key:'chinese',
            name:'专辑名称',
            pic:require('../../../../assets/img/jielun.jpg').default
        },
        {
            key:'tradition',
            name:'专辑名称',
            pic:require('../../../../assets/img/jielun.jpg').default
        },
     
    ]
    return (
        <div className='latest-album'>
            <div className='latest-album-h2'>最新专辑</div>
            <div className='latest-album-wrap'>
            {content.map((item,index)=>{
                    return (
                        <div className='content' key={item.key}>
                            <img src={item.pic} alt={item.name}/>
                            <span>{item.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
