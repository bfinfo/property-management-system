import React from 'react'
import { Table, Button, Space } from 'antd'

const NoticeManagement = () => {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '通知内容', dataIndex: 'content', key: 'content' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
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
    { id: 1, content: '欢迎使用物业全能管家', type: 'info', createdAt: '2024-01-15' }
  ]

  return (
    <div>
      <h2>通知管理</h2>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  )
}

export default NoticeManagement
