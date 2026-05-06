import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  DashboardOutlined,
  PictureOutlined,
  NotificationOutlined,
  TeamOutlined,
  ShopOutlined,
  FileTextOutlined,
  BarChartOutlined
} from '@ant-design/icons'
import Dashboard from './pages/Dashboard'
import BannerManagement from './pages/BannerManagement'
import NoticeManagement from './pages/NoticeManagement'
import WorkerManagement from './pages/WorkerManagement'
import MerchantManagement from './pages/MerchantManagement'
import OrderManagement from './pages/OrderManagement'
import Statistics from './pages/Statistics'

const { Header, Sider, Content } = Layout

function App() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    { key: '/', icon: <DashboardOutlined />, label: '控制台' },
    { key: '/banners', icon: <PictureOutlined />, label: '轮播图管理' },
    { key: '/notices', icon: <NotificationOutlined />, label: '通知管理' },
    { key: '/workers', icon: <TeamOutlined />, label: '人才库管理' },
    { key: '/merchants', icon: <ShopOutlined />, label: '服务商管理' },
    { key: '/orders', icon: <FileTextOutlined />, label: '订单管理' },
    { key: '/statistics', icon: <BarChartOutlined />, label: '数据统计' }
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)', textAlign: 'center', lineHeight: '32px', color: '#fff' }}>
          物业管理
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/']}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff', paddingLeft: 20, fontSize: 18 }}>
          物业全能管家 - 管理后台
        </Header>
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/banners" element={<BannerManagement />} />
              <Route path="/notices" element={<NoticeManagement />} />
              <Route path="/workers" element={<WorkerManagement />} />
              <Route path="/merchants" element={<MerchantManagement />} />
              <Route path="/orders" element={<OrderManagement />} />
              <Route path="/statistics" element={<Statistics />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
