import React from 'react'
import { NavBar, List, Avatar, TabBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import {
  AppOutline, UnorderedListOutline, UserOutline, FileOutline,
  SetOutline, BillOutline, StarOutline, TeamOutline
} from 'antd-mobile-icons'

const Profile = () => {
  const navigate = useNavigate()

  const menuItems = [
    { icon: <BillOutline />, title: '我的账单', path: '/bills' },
    { icon: <StarOutline />, title: '我的收藏', path: '/favorites' },
    { icon: <TeamOutline />, title: '我的家人', path: '/family' },
    { icon: <SetOutline />, title: '设置', path: '/settings' }
  ]

  return (
    <div className="page-container">
      <NavBar onBack={() => navigate('/')}>个人中心</NavBar>
      <div style={{ padding: '20px', background: '#fff', textAlign: 'center' }}>
        <Avatar src="" style={{ '--size': '64px' }} />
        <div style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>业主用户</div>
        <div style={{ marginTop: '5px', fontSize: '12px', color: '#999' }}>1栋1单元302</div>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <List.Item
            key={index}
            prefix={item.icon}
            onClick={() => navigate(item.path)}
            clickable
          >
            {item.title}
          </List.Item>
        ))}
      </List>
      <TabBar activeKey="profile" onChange={(key) => navigate(key === 'home' ? '/' : `/${key}`)}>
        <TabBar.Item key="home" icon={<AppOutline />} title="首页" />
        <TabBar.Item key="category" icon={<UnorderedListOutline />} title="分类" />
        <TabBar.Item key="orders" icon={<FileOutline />} title="订单" />
        <TabBar.Item key="profile" icon={<UserOutline />} title="我的" />
      </TabBar>
    </div>
  )
}

export default Profile
