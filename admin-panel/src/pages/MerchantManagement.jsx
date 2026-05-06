import React from 'react'
import { Table } from 'antd'

const MerchantManagement = () => {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '商家名称', dataIndex: 'name', key: 'name' },
    { title: '服务类型', dataIndex: 'type', key: 'type' },
    { title: '评分', dataIndex: 'rating', key: 'rating' },
    { title: '距离', dataIndex: 'distance', key: 'distance' }
  ]

  const data = []

  return (
    <div>
      <h2>外部服务商管理</h2>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  )
}

export default MerchantManagement
