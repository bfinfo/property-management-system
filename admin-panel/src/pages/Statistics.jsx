import React from 'react'
import { Card, Row, Col } from 'antd'

const Statistics = () => {
  return (
    <div>
      <h2>数据统计</h2>
      <Row gutter={16}>
        <Col span={12}>
          <Card title="订单统计">
            <p>本月订单总数: 256</p>
            <p>已完成: 198</p>
            <p>进行中: 45</p>
            <p>待接单: 13</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="收入统计">
            <p>本月总收入: ¥58,926</p>
            <p>佣金收入: ¥8,926</p>
            <p>服务费: ¥50,000</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Statistics
