import React from 'react'

import {SearchBar} from 'antd-mobile'

export default function Search() {
    return (
        <>
           <SearchBar placeholder="搜索歌曲专辑" maxLength={12} />
        </>
    )
}
