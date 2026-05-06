import React from 'react'
import { NavBar, Card, Image } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

const Activities = () => {
  const navigate = useNavigate()

  const activities = [
    {
      id: 1,
      title: '春节联欢晚会',
      date: '2024-02-10',
      image: 'https://via.placeholder.com/300x200/FF6B6B/ffffff?text=Spring+Festival',
      description: '欢迎全体业主参加小区春节联欢晚会'
    },
    {
      id: 2,
      title: '亲子运动会',
      date: '2024-03-15',
      image: 'https://via.placeholder.com/300x200/4A90E2/ffffff?text=Sports+Day',
      description: '家长和孩子一起参加趣味运动比赛'
    }
  ]

  return (
    <div className="page-container">
      <NavBar onBack={() => navigate('/')}>小区活动</NavBar>
      {activities.map(activity => (
        <Card key={activity.id} title={activity.title} style={{ margin: '10px' }}>
          <Image src={activity.image} width="100%" fit="cover" />
          <div style={{ marginTop: '10px', color: '#999', fontSize: '12px' }}>
            活动时间: {activity.date}
          </div>
          <div style={{ marginTop: '8px', color: '#666' }}>
            {activity.description}
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Activities
