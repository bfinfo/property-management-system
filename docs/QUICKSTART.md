# 快速开始指南

## 项目简介

物业全能管家智能体系统是一个完整的物业服务管理平台，包含：
- 📱 **移动端**：业主使用的手机应用
- 💻 **PC管理端**：物业管理人员使用的后台系统
- 🔧 **后端服务**：提供API接口和业务逻辑

## 5分钟快速体验

### 步骤1：克隆项目
```bash
git clone https://github.com/YOUR_USERNAME/property-management-system.git
cd property-management-system
```

### 步骤2：安装依赖
```bash
# 安装移动端依赖
cd mobile-app
npm install

# 安装PC管理端依赖
cd ../admin-panel
npm install

# 安装后端依赖
cd ../server
npm install
```

### 步骤3：启动服务

打开3个终端窗口，分别运行：

**终端1 - 启动后端**
```bash
cd server
npm run dev
```
后端将运行在 http://localhost:5000

**终端2 - 启动移动端**
```bash
cd mobile-app
npm run dev
```
移动端将运行在 http://localhost:3000

**终端3 - 启动PC管理端**
```bash
cd admin-panel
npm run dev
```
PC管理端将运行在 http://localhost:3001

### 步骤4：访问应用

- 📱 移动端（业主端）：http://localhost:3000
- 💻 PC管理端：http://localhost:3001
- 🔧 后端API：http://localhost:5000/api/health

## 功能演示

### 移动端功能
1. **首页**：查看通知、轮播图、快捷入口
2. **智能搜索**：输入"空调坏了"体验智能识别
3. **智能便民**：点击查看飞书表单集成
4. **服务大家**：提交服务申请
5. **投诉建议**：提交反馈
6. **小区活动**：查看社区活动
7. **订单管理**：查看服务订单
8. **个人中心**：管理个人信息

### PC管理端功能
1. **控制台**：查看数据概览
2. **轮播图管理**：管理首页轮播图
3. **通知管理**：发布通知公告
4. **人才库管理**：管理维修人员
5. **服务商管理**：管理外部服务商
6. **订单管理**：处理服务订单
7. **数据统计**：查看运营数据

## 项目结构

```
property-management-system/
├── mobile-app/          # 移动端（React + Vite + Ant Design Mobile）
│   ├── src/
│   │   ├── pages/      # 页面组件
│   │   ├── components/ # 公共组件
│   │   └── App.jsx     # 主应用
│   └── package.json
├── admin-panel/         # PC管理端（React + Vite + Ant Design）
│   ├── src/
│   │   ├── pages/      # 页面组件
│   │   └── App.jsx     # 主应用
│   └── package.json
├── server/              # 后端服务（Node.js + Express）
│   ├── server.js       # 服务器入口
│   └── package.json
├── docs/                # 文档
│   ├── DESIGN.md       # 设计文档
│   └── DEPLOYMENT.md   # 部署指南
└── README.md           # 项目说明
```

## 技术栈

### 前端
- **框架**：React 18
- **构建工具**：Vite
- **UI组件库**：
  - 移动端：Ant Design Mobile
  - PC端：Ant Design
- **路由**：React Router
- **HTTP客户端**：Axios

### 后端
- **运行环境**：Node.js
- **Web框架**：Express
- **数据库**：MongoDB（可选）

## 核心特性

### 1. 智能搜索
- 支持模糊查询
- 意图识别（如"1栋1单元302空调坏了"自动识别"空调"）
- 自动匹配维修人员
- 推荐外部服务商

### 2. 智能派单
- 基于LBS的就近派单
- 技能匹配算法
- 负荷均衡调度

### 3. 外部服务商推荐
- 自动抓取周边商家信息
- 智能筛选（距离<10km，评分>4.0）
- 推荐Top 5优质商家

### 4. 飞书表单集成
- 智能便民：查询功能
- 服务大家：表单录入
- 投诉建议：反馈收集

## 下一步

### 开发建议
1. 阅读 [设计文档](./docs/DESIGN.md) 了解系统架构
2. 阅读 [部署指南](./docs/DEPLOYMENT.md) 了解部署流程
3. 根据实际需求修改和扩展功能

### 功能扩展
- [ ] 接入AI大模型提升意图识别
- [ ] 实现实时消息推送（WebSocket）
- [ ] 增加支付功能
- [ ] 开发小程序版本
- [ ] 接入智能家居设备
- [ ] 实现预测性维护

### 生产部署
参考 [部署指南](./docs/DEPLOYMENT.md) 将应用部署到生产环境。

## 常见问题

### Q: 如何修改端口？
A: 修改各模块的配置文件：
- 移动端：`mobile-app/vite.config.js`
- PC管理端：`admin-panel/vite.config.js`
- 后端：`server/.env`

### Q: 如何连接数据库？
A: 复制 `server/.env.example` 为 `server/.env`，修改 `MONGODB_URI` 配置。

### Q: 如何部署到GitHub？
A: 参考 [部署指南](./docs/DEPLOYMENT.md) 的GitHub部署章节。

## 贡献指南

欢迎提交Issue和Pull Request！

## 许可证

MIT License

## 联系方式

如有问题，请提交Issue到GitHub仓库。
