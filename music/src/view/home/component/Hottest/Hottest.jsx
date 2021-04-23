import React from 'react'
import './Hottest.scss'

export default function Hottest() {
    const content=[
        {
            key:'ballad',
            name:'民谣',
            pic:require('../../../../assets/img/ballad.jpg').default
        },
        {
            key:'popular',
            name:'流行',
            pic:require('../../../../assets/img/ballad.jpg').default
        },
        {
            key:'rap',
            name:'说唱',
            pic:require('../../../../assets/img/ballad.jpg').default
        },
        {
            key:'modern',
            name:'现代',
            pic:require('../../../../assets/img/ballad.jpg').default
        },
        {
            key:'chinese',
            name:'华语',
            pic:require('../../../../assets/img/ballad.jpg').default
        },
        {
            key:'tradition',
            name:'传统',
            pic:require('../../../../assets/img/ballad.jpg').default
        },
     
    ]
    return (
        <div className='hot'>
            <div className='hot-h2'>最新歌曲</div>
            <div className='hot-wrap'> 
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
