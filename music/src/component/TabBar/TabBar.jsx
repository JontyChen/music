import React ,{useState}from 'react'
import {TabBar} from 'antd-mobile'
import Home from '../../view/home/home'
import PersonalCenter from '../../view/personalCenter/personalCenter'
const TabBarItem = TabBar.Item
export default function Tab_Bar(props) {
    // const [hidden,setHidden] = useState(false)
    const [tabSelected,setTabSelected]=useState('home')
    const tabContent=[
        {
            id:'home',
            name:'首页',
            icon: "icon-yinleguangpan",
            iconActive:"icon-yinleguangpan",
            comp:<Home {...props}></Home>
        },
        // {
        //     id:'home',
        //     name:'首页',
        //     icon: "http://p12.jmstatic.com/mcms/89ea87200c623f4c7809f21f2ab4bce8.png",
        //     iconActive:
        //     "http://p12.jmstatic.com/mcms/5e9e00537e4a635e36e84db81f2cc17a.png ",
        //     comp:<Home></Home>
        // },
        // {
        //     id:'home',
        //     name:'首页',
        //     icon: "http://p12.jmstatic.com/mcms/89ea87200c623f4c7809f21f2ab4bce8.png",
        //     iconActive:
        //     "http://p12.jmstatic.com/mcms/5e9e00537e4a635e36e84db81f2cc17a.png ",
        //     comp:<Home></Home>
        // },
        {
            id:'personal',
            name:'我的',
            icon: "icon-yonghu",
            iconActive:"icon-yonghu",
            comp:<PersonalCenter {...props}></PersonalCenter>
        },
    ]
    console.log(props)
    const styles=(url,color)=>{
        return <div style={{
            width: "22px",
            height: "22px",
            color:color
          }}>
              <i className={`iconfont  ${url}`} style={{fontSize:'22px'}}></i>
          </div>
    }
    return (
        <div  style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                // hidden={hidden}
            >
                {
                    tabContent.map((item,index)=>{
                      return  <TabBarItem
                        title={item.name}
                        key={item.id}
                        icon={styles(item.icon,'#33A3F4')}//默认图标
                        selectedIcon={styles(item.iconActive,'pink')}//选中后的图标
                        selected={tabSelected === item.id}
                        onPress={()=>{
                            setTabSelected(item.id)
                        }}
                    >{item.comp}</TabBarItem>
                    })
                }
                {/* <TabBarItem
                    title='home'
                    key='home'
                    icon={styles('url1')}//默认图标
                    selectedIcon={styles('url2')}//选中后的图标
                    selected={tabSelected==='home'}
                    onPress={()=>{
                        setTabSelected('home')
                    }}
                >1</TabBarItem>
                <TabBarItem
                    title='share'
                    key='share'
                    icon={styles('url1')}//默认图标
                    selectedIcon={styles('url2')}//选中后的图标
                    selected={tabSelected==='share'}
                    onPress={()=>{
                        setTabSelected('share')
                    }}
                >2</TabBarItem>
                <TabBarItem>3</TabBarItem>
                <TabBarItem>4</TabBarItem> */}
            </TabBar>
        </div>
    )
}
