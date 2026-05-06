import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, NoticeBar, Grid, SearchBar, TabBar } from 'antd-mobile'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
  MessageOutline,
  TeamOutline,
  FileOutline,
  CalendarOutline
} from 'antd-mobile-icons'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  const [activeKey, setActiveKey] = useState('home')
  const [searchValue, setSearchValue] = useState('')

  // 轮播图数据
  const banners = [
    { id: 1, image: 'https://via.placeholder.com/375x150/4A90E2/ffffff?text=Banner+1', link: '#' },
    { id: 2, image: 'https://via.placeholder.com/375x150/50C878/ffffff?text=Banner+2', link: '#' },
    { id: 3, image: 'https://via.placeholder.com/375x150/FF6B6B/ffffff?text=Banner+3', link: '#' },
    { id: 4, image: 'https://via.placeholder.com/375x150/FFD93D/ffffff?text=Banner+4', link: '#' }
  ]

  // 快捷入口数据
  const quickEntries = [
    { key: 'smart', title: '智能便民', icon: <AppOutline />, color: '#4A90E2', path: '/smart-service' },
    { key: 'service', title: '服务大家', icon: <TeamOutline />, color: '#50C878', path: '/community-service' },
    { key: 'complaint', title: '投诉建议', icon: <MessageOutline />, color: '#FF6B6B', path: '/complaints' },
    { key: 'activity', title: '小区活动', icon: <CalendarOutline />, color: '#FFD93D', path: '/activities' }
  ]

  // 智能搜索处理
  const handleSearch = async (value) => {
    if (!value.trim()) return

    // 这里实现智能搜索逻辑
    // 1. 意图识别（如"1栋1单元302空调坏了"识别出"空调"）
    // 2. 数据库查询维修记录
    // 3. 如果没有记录，查询10km内评分4.0以上的商家
    console.log('搜索:', value)
  }

  const handleQuickEntry = (path) => {
    navigate(path)
  }

  const handleTabChange = (key) => {
    setActiveKey(key)
    const routes = {
      home: '/',
      category: '/category',
      orders: '/orders',
      profile: '/profile'
    }
    navigate(routes[key])
  }

  return (
    <div className="home-page">
      {/* 通知栏 */}
      <NoticeBar
        content="欢迎使用物业全能管家！有任何问题请随时联系我们。"
        color="info"
        closeable
      />

      {/* 轮播图 */}
      <div className="banner-section">
        <Swiper autoplay loop>
          {banners.map(banner => (
            <Swiper.Item key={banner.id}>
              <div className="banner-item" onClick={() => window.location.href = banner.link}>
                <img src={banner.image} alt={`Banner ${banner.id}`} />
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>

      {/* 快捷入口 */}
      <div className="quick-entries">
        <Grid columns={4} gap={8}>
          {quickEntries.map(entry => (
            <Grid.Item key={entry.key} onClick={() => handleQuickEntry(entry.path)}>
              <div className="entry-item">
                <div className="entry-icon" style={{ backgroundColor: entry.color }}>
                  {entry.icon}
                </div>
                <div className="entry-title">{entry.title}</div>
              </div>
            </Grid.Item>
          ))}
        </Grid>
      </div>

      {/* 智能搜索框 */}
      <div className="search-section">
        <SearchBar
          placeholder="输入您的需求，如：1栋1单元302空调坏了"
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
          showCancelButton
        />
        <div className="search-tips">
          支持模糊查询，智能识别您的需求
        </div>
      </div>

      {/* 底部导航栏 */}
      <TabBar activeKey={activeKey} onChange={handleTabChange} className="bottom-tab-bar">
        <TabBar.Item key="home" icon={<AppOutline />} title="首页" />
        <TabBar.Item key="category" icon={<UnorderedListOutline />} title="分类" />
        <TabBar.Item key="orders" icon={<FileOutline />} title="订单" />
        <TabBar.Item key="profile" icon={<UserOutline />} title="我的" />
      </TabBar>
    </div>
  )
}

export default Home
