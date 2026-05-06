import React from 'react'
import { Table, Tag } from 'antd'

const OrderManagement = () => {
  const columns = [
    { title: '订单ID', dataIndex: 'id', key: 'id' },
    { title: '服务项目', dataIndex: 'title', key: 'title' },
    { title: '状态', dataIndex: 'status', key: 'status', render: (status) => {
      const colors = { '进行中': 'processing', '已完成': 'success', '待接单': 'warning' }
      return <Tag color={colors[status]}>{status}</Tag>
    }},
    { title: '时间', dataIndex: 'time', key: 'time' },
    { title: '服务人员', dataIndex: 'worker', key: 'worker' }
  ]

  const data = [
    { id: 1, title: '空调维修', status: '进行中', time: '2024-01-15 10:30', worker: '张师傅' },
    { id: 2, title: '水管疏通', status: '已完成', time: '2024-01-14 14:20', worker: '李师傅' }
  ]

  return (
    <div>
      <h2>订单管理</h2>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  )
}

export default OrderManagement
