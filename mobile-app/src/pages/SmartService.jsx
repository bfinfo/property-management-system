import React from 'react'
import { NavBar, Card, Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

const SmartService = () => {
  const navigate = useNavigate()

  const handleOpenFeishu = () => {
    window.location.href = 'https://tcnju33k12p3.feishu.cn/share/base/query/shrcn9zhalrzKPsXXJ4mZVFFMVc'
  }

  return (
    <div className="page-container">
      <NavBar onBack={() => navigate('/')}>智能便民</NavBar>
      <Card title="便民服务查询" style={{ margin: '10px' }}>
        <div style={{ marginBottom: '15px', color: '#666' }}>
          查询小区周边便民服务信息，包括超市、药店、维修点等
        </div>
        <Button color="primary" block onClick={handleOpenFeishu}>
          打开查询表单
        </Button>
      </Card>
    </div>
  )
}

export default SmartService
