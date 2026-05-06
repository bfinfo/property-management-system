import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// 中间件
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 路由
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: '服务器运行正常' })
})

// 轮播图接口
app.get('/api/banners', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, image: 'https://via.placeholder.com/375x150/4A90E2/ffffff?text=Banner+1', link: '#', order: 1 },
      { id: 2, image: 'https://via.placeholder.com/375x150/50C878/ffffff?text=Banner+2', link: '#', order: 2 },
      { id: 3, image: 'https://via.placeholder.com/375x150/FF6B6B/ffffff?text=Banner+3', link: '#', order: 3 },
      { id: 4, image: 'https://via.placeholder.com/375x150/FFD93D/ffffff?text=Banner+4', link: '#', order: 4 }
    ]
  })
})

// 通知接口
app.get('/api/notices', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, content: '欢迎使用物业全能管家！', type: 'info', createdAt: new Date() }
    ]
  })
})

// 智能搜索接口
app.post('/api/search', async (req, res) => {
  const { query } = req.body

  // 这里实现智能搜索逻辑
  // 1. 意图识别
  // 2. 数据库查询
  // 3. 外部服务商推荐

  res.json({
    success: true,
    data: {
      intent: '空调维修',
      results: [
        { id: 1, name: '张师傅', skill: '空调维修', rating: 4.8, distance: '500m', phone: '138****1234' }
      ]
    }
  })
})

// 维修人才库接口
app.get('/api/workers', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, name: '张师傅', skills: ['水电', '空调'], rating: 4.8, available: true },
      { id: 2, name: '李师傅', skills: ['管道', '木工'], rating: 4.6, available: true }
    ]
  })
})

// 订单接口
app.get('/api/orders', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, title: '空调维修', status: '进行中', time: '2024-01-15 10:30', worker: '张师傅' },
      { id: 2, title: '水管疏通', status: '已完成', time: '2024-01-14 14:20', worker: '李师傅' }
    ]
  })
})

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`)
})
