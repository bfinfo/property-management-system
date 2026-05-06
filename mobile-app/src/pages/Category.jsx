import React from 'react'
import { NavBar, List, TabBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { AppOutline, UnorderedListOutline, UserOutline, FileOutline } from 'antd-mobile-icons'

const Category = () => {
  const navigate = useNavigate()

  const categories = [
    { title: '维修服务', items: ['水电维修', '家电维修', '门窗维修', '管道疏通'] },
    { title: '生活服务', items: ['家政保洁', '搬家服务', '快递代收', '绿植养护'] },
    { title: '社区服务', items: ['停车管理', '门禁管理', '访客登记', '快递柜'] }
  ]

  return (
    <div className="page-container">
      <NavBar onBack={() => navigate('/')}>服务分类</NavBar>
      {categories.map((category, index) => (
        <List key={index} header={category.title}>
          {category.items.map((item, idx) => (
            <List.Item key={idx} clickable onClick={() => console.log(item)}>
              {item}
            </List.Item>
          ))}
        </List>
      ))}
      <TabBar activeKey="category" onChange={(key) => navigate(key === 'home' ? '/' : `/${key}`)}>
        <TabBar.Item key="home" icon={<AppOutline />} title="首页" />
        <TabBar.Item key="category" icon={<UnorderedListOutline />} title="分类" />
        <TabBar.Item key="orders" icon={<FileOutline />} title="订单" />
        <TabBar.Item key="profile" icon={<UserOutline />} title="我的" />
      </TabBar>
    </div>
  )
}

export default Category
