import React from 'react'
import { NavBar, Card, Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

const CommunityService = () => {
  const navigate = useNavigate()

  const handleOpenFeishu = () => {
    window.location.href = 'https://tcnju33k12p3.feishu.cn/share/base/form/shrcndSr5cqywnktwJG9Zni0G5g'
  }

  return (
    <div className="page-container">
      <NavBar onBack={() => navigate('/')}>服务大家</NavBar>
      <Card title="社区服务申请" style={{ margin: '10px' }}>
        <div style={{ marginBottom: '15px', color: '#666' }}>
          提交您的服务需求，我们将尽快为您安排
        </div>
        <Button color="primary" block onClick={handleOpenFeishu}>
          填写服务申请
        </Button>
      </Card>
    </div>
  )
}

export default CommunityService
