# 物业全能管家智能体系统

## 项目简介

这是一个基于AI的物业服务管理系统，旨在帮助物业公司从"被动收物业费"转型为"社区生活运营商"。

## 系统架构

### 1. 移动端 (mobile-app)
- 技术栈：React + Vite + Ant Design Mobile
- 功能：
  - 首页（通知栏、轮播图、快捷入口）
  - 智能搜索（AI助手）
  - 智能便民（飞书表单查询）
  - 服务大家（飞书表单录入）
  - 投诉建议（飞书表单录入）
  - 小区活动（H5落地页）
  - 个人中心

### 2. PC管理端 (admin-panel)
- 技术栈：React + Vite + Ant Design
- 功能：
  - 轮播图管理
  - 通知栏管理
  - 维修人才库管理
  - 服务商管理
  - 订单管理
  - 数据统计

### 3. 后端服务 (server)
- 技术栈：Node.js + Express + MongoDB
- 功能：
  - RESTful API
  - 智能派单系统
  - 外部服务商推荐引擎
  - 数据分析

## 快速开始

### 安装依赖
```bash
# 安装移动端依赖
cd mobile-app
npm install

# 安装管理端依赖
cd ../admin-panel
npm install

# 安装后端依赖
cd ../server
npm install
```

### 启动开发环境
```bash
# 启动后端服务
cd server
npm run dev

# 启动移动端
cd mobile-app
npm run dev

# 启动管理端
cd admin-panel
npm run dev
```

## 核心功能

### 1. 智能派单系统
- 基于LBS定位的就近派单
- 技能匹配算法
- 负荷均衡调度

### 2. 外部服务商推荐
- 自动抓取大众点评、美团等平台数据
- 智能筛选（距离<10km，评分>4.0）
- 推荐Top 5优质商家

### 3. 盈利模式
- 流量分发与佣金（10%-15%）
- 社区团购与电商
- SaaS化输出

## 参考网站
- PC端设计参考：https://wuye.yoniot.cn/console
- 移动端参考：https://wuye.yoniot.cn/phone

## 技术特点
- 响应式设计
- 微服务架构
- AI智能识别
- 实时数据同步

## 许可证
MIT License
