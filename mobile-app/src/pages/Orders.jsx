import React from 'react'
import { NavBar, List, Tag, TabBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { AppOutline, UnorderedListOutline, UserOutline, FileOutline } from 'antd-mobile-icons'

const Orders = () => {
  const navigate = useNavigate()

  const orders = [
    { id: 1, title: '空调维修', status: '进行中', time: '2024-01-15 10:30', worker: '张师傅' },
    { id: 2, title: '水管疏通', status: '已完成', time: '2024-01-14 14:20', worker: '李师傅' },
    { id: 3, title: '家政保洁', status: '待接单', time: '2024-01-16 09:00', worker: '待分配' }
  ]

  const getStatusColor = (status) => {
    const colors = { '进行中': 'primary', '已完成': 'success', '待接单': 'warning' }
    return colors[status] || 'default'
  }

  return (
    <div className="page-container">
      <NavBar onBack={() => navigate('/')}>我的订单</NavBar>
      <List>
        {orders.map(order => (
          <List.Item
            key={order.id}
            extra={<Tag color={getStatusColor(order.status)}>{order.status}</Tag>}
            description={`时间: ${order.time} | 服务人员: ${order.worker}`}
            clickable
          >
            {order.title}
          </List.Item>
        ))}
      </List>
      <TabBar activeKey="orders" onChange={(key) => navigate(key === 'home' ? '/' : `/${key}`)}>
        <TabBar.Item key="home" icon={<AppOutline />} title="首页" />
        <TabBar.Item key="category" icon={<UnorderedListOutline />} title="分类" />
        <TabBar.Item key="orders" icon={<FileOutline />} title="订单" />
        <TabBar.Item key="profile" icon={<UserOutline />} title="我的" />
      </TabBar>
    </div>
  )
}

export default Orders
