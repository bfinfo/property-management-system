import React from 'react'
import { NavBar, Card, Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

const Complaints = () => {
  const navigate = useNavigate()

  const handleOpenFeishu = () => {
    window.location.href = 'https://tcnju33k12p3.feishu.cn/share/base/form/shrcnxs85SqrbiuMOG69DklIBwd'
  }

  return (
    <div className="page-container">
      <NavBar onBack={() => navigate('/')}>投诉建议</NavBar>
      <Card title="投诉与建议" style={{ margin: '10px' }}>
        <div style={{ marginBottom: '15px', color: '#666' }}>
          您的意见对我们很重要，请告诉我们您的想法
        </div>
        <Button color="primary" block onClick={handleOpenFeishu}>
          提交投诉建议
        </Button>
      </Card>
    </div>
  )
}

export default Complaints
