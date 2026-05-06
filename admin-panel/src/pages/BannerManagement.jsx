import React, { useState } from 'react'
import { Table, Button, Modal, Form, Input, Upload, Space, message } from 'antd'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'

const BannerManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form] = Form.useForm()

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '图片', dataIndex: 'image', key: 'image', render: (url) => <img src={url} alt="" style={{ width: 100 }} /> },
    { title: '链接', dataIndex: 'link', key: 'link' },
    { title: '排序', dataIndex: 'order', key: 'order' },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type="link">编辑</Button>
          <Button type="link" danger>删除</Button>
        </Space>
      )
    }
  ]

  const data = [
    { id: 1, image: 'https://via.placeholder.com/375x150', link: '#', order: 1 },
    { id: 2, image: 'https://via.placeholder.com/375x150', link: '#', order: 2 }
  ]

  const handleAdd = () => {
    form.validateFields().then(values => {
      console.log('新增轮播图:', values)
      message.success('添加成功')
      setIsModalOpen(false)
      form.resetFields()
    })
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalOpen(true)}>
          新增轮播图
        </Button>
      </div>
      <Table columns={columns} dataSource={data} rowKey="id" />
      <Modal
        title="新增轮播图"
        open={isModalOpen}
        onOk={handleAdd}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="image" label="图片" rules={[{ required: true }]}>
            <Upload>
              <Button icon={<UploadOutlined />}>上传图片</Button>
            </Upload>
          </Form.Item>
          <Form.Item name="link" label="链接地址" rules={[{ required: true }]}>
            <Input placeholder="请输入链接地址" />
          </Form.Item>
          <Form.Item name="order" label="排序" rules={[{ required: true }]}>
            <Input type="number" placeholder="请输入排序号" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default BannerManagement
