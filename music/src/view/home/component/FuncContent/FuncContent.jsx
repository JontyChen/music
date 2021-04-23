import React from 'react'

import './FuncContent.scss'

export default function FuncContent(props) {
    const iconList=[
        {
            name:'热门',
            key:'hot',
            class:'icon-remen'
        },
        {
            name:'最新',
            key:'latest',
            class:'icon-maigefeng'
        },
        {
            name:'专辑',
            key:'album',
            class:'icon-yinlefuhao4'
        },
        {
            name:'歌手',
            key:'singer',
            class:'icon-ermai'
        }
    ]
    function itemOnClick(id){
        console.log(props)
        props.history.push({pathname:id})
        // props.location.pathname='/hot'
    }
    return (
        <div  className='wrap'>
            {
                iconList.map((item,index)=>{
                    return <div key={item.key} className='content' onClick={()=>itemOnClick(item.key)}>
                        <div className='icon_wrap'><i className={`iconfont ${item.class} icon_func`}></i></div>
                        <div> <span>{item.name}</span></div>
                    </div>
                })
            }
        </div>
    )
}
