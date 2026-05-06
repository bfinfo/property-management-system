import React from 'react'
import { Table, Tag, Space, Button } from 'antd'

const WorkerManagement = () => {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '技能', dataIndex: 'skills', key: 'skills', render: (skills) => skills.map(s => <Tag key={s}>{s}</Tag>) },
    { title: '评分', dataIndex: 'rating', key: 'rating' },
    { title: '状态', dataIndex: 'available', key: 'available', render: (available) => <Tag color={available ? 'green' : 'red'}>{available ? '空闲' : '忙碌'}</Tag> },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space>
          <Button type="link">编辑</Button>
          <Button type="link" danger>删除</Button>
        </Space>
      )
    }
  ]

  const data = [
    { id: 1, name: '张师傅', skills: ['水电', '空调'], rating: 4.8, available: true },
    { id: 2, name: '李师傅', skills: ['管道', '木工'], rating: 4.6, available: true }
  ]

  return (
    <div>
      <h2>维修人才库管理</h2>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  )
}

export default WorkerManagement
