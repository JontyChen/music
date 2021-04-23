import React ,{useEffect}from 'react'

import Search from './component/Search/Search'
import Swipper from './component/Swipper/Swipper'
import FuncContent from './component/FuncContent/FuncContent'
import Hottest from './component/Hottest/Hottest'
import LatestAlbum from './component/LatestAlbum/LatestAlbum'
export default function Home(props) {

    useEffect(()=>{
        console.log('home',this,props)
    })
    return (
        <>
           {/* 首先是search部分 */}
           <Search {...props}></Search>
            {/* 接下来是轮播图的部分 */}
            <Swipper {...props}></Swipper>
            {/* 功能选择区 */}
            <FuncContent {...props}></FuncContent>
            {/* 最新最热部分 */}
            <Hottest {...props}></Hottest>
            {/* 最新专辑 */}
            <LatestAlbum {...props}></LatestAlbum>
        </>
    )
}
