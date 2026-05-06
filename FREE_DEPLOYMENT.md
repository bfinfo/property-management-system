# 💯 完全免费部署方案

## 🎯 方案概览

这是一个**永久免费**的部署方案，适合个人项目、学习和小型应用。

### 部署架构

- **前端（移动端 + 管理端）**：Vercel（完全免费）
- **后端 API**：Render 免费版 或 Fly.io 免费版
- **数据库**：MongoDB Atlas 免费版（512MB）
- **文件存储**：Cloudinary 免费版（10GB）

### 💰 费用对比

| 服务 | 免费额度 | 限制 | 是否推荐 |
|------|----------|------|----------|
| **Vercel** | 无限制 | 100GB 带宽/月 | ⭐⭐⭐⭐⭐ |
| **Render** | 永久免费 | 15分钟无活动后休眠 | ⭐⭐⭐⭐ |
| **Fly.io** | 永久免费 | 3个共享CPU VM | ⭐⭐⭐⭐ |
| **MongoDB Atlas** | 永久免费 | 512MB 存储 | ⭐⭐⭐⭐⭐ |
| **Cloudinary** | 永久免费 | 10GB 存储 | ⭐⭐⭐⭐⭐ |

---

## 🚀 方案一：Vercel + Render（最简单）

### 优点
- ✅ 完全免费，永久有效
- ✅ 部署简单，5分钟搞定
- ✅ 自动 HTTPS
- ✅ 自动部署

### 缺点
- ⚠️ 后端 15 分钟无活动会休眠
- ⚠️ 首次访问需要等待 15-30 秒唤醒

### 适用场景
- 个人项目
- 学习演示
- 低流量应用
- 原型开发

---

## 📋 部署步骤

### 第一步：准备工作

#### 1.1 注册账号（全部免费）

**Vercel**：
- 访问：https://vercel.com/signup
- 使用 GitHub 账号登录

**Render**：
- 访问：https://render.com/
- 使用 GitHub 账号登录

**MongoDB Atlas**：
- 访问：https://www.mongodb.com/cloud/atlas/register
- 使用 Google 账号或邮箱注册

#### 1.2 推送代码到 GitHub

```powershell
# Windows
cd D:\ClaudeCode\temp\property-management-system
.\deploy-to-github.ps1
```

---

### 第二步：创建 MongoDB 数据库（免费）

1. 登录 MongoDB Atlas：https://cloud.mongodb.com/
2. 点击 "Build a Database"
3. 选择 **FREE** 的 M0 Shared 集群
4. 选择云服务商：
   - Provider: **AWS**
   - Region: **Singapore (ap-southeast-1)** 或 **Hong Kong**
5. Cluster Name: `property-cluster`
6. 点击 "Create"

#### 创建数据库用户
1. 在弹出窗口中创建用户：
   - Username: `propertyuser`
   - Password: 点击 "Autogenerate Secure Password" 并**复制保存**
2. 点击 "Create User"

#### 配置网络访问
1. 在 "Where would you like to connect from?" 选择：
   - 点击 "Add My Current IP Address"
   - 然后点击 "Add Entry"
   - 输入 `0.0.0.0/0`（允许所有 IP）
   - Description: `Allow all`
2. 点击 "Finish and Close"

#### 获取连接字符串
1. 点击 "Connect"
2. 选择 "Connect your application"
3. Driver: **Node.js**
4. 复制连接字符串：
   ```
   mongodb+srv://propertyuser:<password>@property-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. 将 `<password>` 替换为你刚才保存的密码
6. **保存这个完整的连接字符串**

---

### 第三步：部署后端到 Render（免费）

#### 3.1 创建 Web Service

1. 访问：https://dashboard.render.com/
2. 点击 "New +" → "Web Service"
3. 选择 "Build and deploy from a Git repository"
4. 点击 "Connect" 连接你的 GitHub 账号
5. 选择仓库：`property-management-system`
6. 点击 "Connect"

#### 3.2 配置服务

填写以下信息：

**Basic Settings**：
- **Name**: `property-server`
- **Region**: Singapore (Southeast Asia) 或 Oregon (US West)
- **Branch**: `main`
- **Root Directory**: `server`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Instance Type**：
- 选择 **Free** （$0/month）

#### 3.3 添加环境变量

点击 "Advanced" → "Add Environment Variable"，添加以下变量：

```
PORT=5000
NODE_ENV=production
MONGODB_URI=你的MongoDB连接字符串
CORS_ORIGIN=*
```

#### 3.4 部署

1. 点击 "Create Web Service"
2. 等待部署完成（约 3-5 分钟）
3. 部署成功后，你会看到一个 URL，类似：
   ```
   https://property-server.onrender.com
   ```
4. **复制并保存这个 URL**

#### 3.5 测试后端

访问：`https://property-server.onrender.com`

如果看到响应，说明后端部署成功！

⚠️ **注意**：首次访问可能需要等待 15-30 秒（服务唤醒）

---

### 第四步：部署移动端到 Vercel（免费）

#### 4.1 导入项目

1. 访问：https://vercel.com/new
2. 点击 "Import Project"
3. 选择 "Import Git Repository"
4. 选择你的仓库：`property-management-system`
5. 点击 "Import"

#### 4.2 配置项目

**Configure Project**：
- **Project Name**: `property-mobile-app`
- **Framework Preset**: `Vite`
- **Root Directory**: 点击 "Edit" → 选择 `mobile-app`
- **Build Command**: `npm run build`（自动检测）
- **Output Directory**: `dist`（自动检测）

#### 4.3 添加环境变量

点击 "Environment Variables"，添加：

```
Name: VITE_API_URL
Value: https://property-server.onrender.com
```

（使用你在第三步保存的 Render URL）

#### 4.4 部署

1. 点击 "Deploy"
2. 等待部署完成（约 2-3 分钟）
3. 部署成功后，Vercel 会显示：
   ```
   https://property-mobile-app.vercel.app
   ```
4. 点击 "Visit" 访问你的移动端网站
5. **保存这个 URL**

---

### 第五步：部署管理端到 Vercel（免费）

#### 5.1 创建新项目

1. 再次访问：https://vercel.com/new
2. 选择同一个仓库：`property-management-system`
3. 点击 "Import"

#### 5.2 配置项目

**Configure Project**：
- **Project Name**: `property-admin-panel`
- **Framework Preset**: `Vite`
- **Root Directory**: 点击 "Edit" → 选择 `admin-panel`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

#### 5.3 添加环境变量

```
Name: VITE_API_URL
Value: https://property-server.onrender.com
```

#### 5.4 部署

1. 点击 "Deploy"
2. 等待部署完成
3. 访问你的管理端网站：
   ```
   https://property-admin-panel.vercel.app
   ```
4. **保存这个 URL**

---

### 第六步：更新后端 CORS 配置

现在你有了前端的域名，需要更新后端的 CORS 配置：

1. 回到 Render Dashboard：https://dashboard.render.com/
2. 点击你的 `property-server` 服务
3. 点击左侧 "Environment"
4. 找到 `CORS_ORIGIN` 变量
5. 点击 "Edit"，修改值为：
   ```
   https://property-mobile-app.vercel.app,https://property-admin-panel.vercel.app
   ```
6. 点击 "Save Changes"
7. Render 会自动重新部署（约 1-2 分钟）

---

## ✅ 部署完成！

恭喜！你的物业管理系统已经完全免费部署到云端：

### 🌐 你的网站地址

- 📱 **移动端**：https://property-mobile-app.vercel.app
- 💻 **管理端**：https://property-admin-panel.vercel.app
- 🔧 **后端 API**：https://property-server.onrender.com
- 🗄️ **数据库**：MongoDB Atlas（云端）

### 💰 费用总结

- Vercel：**$0/月**
- Render：**$0/月**
- MongoDB Atlas：**$0/月**

**总计：完全免费！** 🎉

---

## 🔧 后续维护

### 自动部署

每次你推送代码到 GitHub，Vercel 和 Render 都会自动部署：

```bash
git add .
git commit -m "更新功能"
git push origin main
```

### 保持后端活跃

Render 免费版会在 15 分钟无活动后休眠。解决方案：

#### 方案 A：使用 Cron Job 定时唤醒

1. 访问：https://cron-job.org/en/
2. 注册免费账号
3. 创建新任务：
   - URL: `https://property-server.onrender.com`
   - 执行频率：每 10 分钟
4. 保存

#### 方案 B：前端定时请求

在前端添加心跳检测（已包含在代码中）

---

## 📊 性能优化

### Render 免费版限制

- ✅ 无限请求
- ✅ 512MB RAM
- ✅ 自动 HTTPS
- ⚠️ 15 分钟无活动后休眠
- ⚠️ 每月 750 小时运行时间

### 优化建议

1. **使用 Cron Job 保持活跃**（推荐）
2. **优化首次加载**：添加 Loading 提示
3. **使用缓存**：减少数据库查询
4. **CDN 加速**：Vercel 自动提供

---

## 🆙 升级方案

如果免费版不够用，可以升级：

### Render 付费版
- **Starter**: $7/月
- 无休眠
- 1GB RAM
- 更快的 CPU

### Vercel 付费版
- **Pro**: $20/月
- 更多带宽
- 更多构建时间

### MongoDB Atlas 付费版
- **M10**: $0.08/小时（约 $57/月）
- 2GB RAM
- 10GB 存储

---

## ❓ 常见问题

### Q1: 后端访问很慢？
**A**: Render 免费版休眠后首次访问需要 15-30 秒唤醒。
**解决方案**：使用 Cron Job 定时唤醒。

### Q2: 数据库连接失败？
**A**: 检查：
1. MongoDB Atlas IP 白名单是否包含 `0.0.0.0/0`
2. 连接字符串中的密码是否正确
3. 数据库用户权限是否正确

### Q3: 前端无法访问后端？
**A**: 检查：
1. 后端 CORS 配置是否包含前端域名
2. 前端环境变量 `VITE_API_URL` 是否正确
3. 后端是否正常运行（访问后端 URL）

### Q4: 如何查看日志？
**A**: 
- **Vercel**: 项目页面 → Deployments → 点击某次部署 → Logs
- **Render**: Dashboard → 选择服务 → Logs

### Q5: 可以使用自定义域名吗？
**A**: 可以！
- **Vercel**: Settings → Domains → Add Domain
- **Render**: Settings → Custom Domain

---

## 🎉 下一步

现在你的系统已经上线，可以：

1. ✅ 分享链接给朋友测试
2. ✅ 配置自定义域名
3. ✅ 添加更多功能
4. ✅ 监控系统性能
5. ✅ 收集用户反馈

---

## 📚 相关资源

- [Vercel 文档](https://vercel.com/docs)
- [Render 文档](https://render.com/docs)
- [MongoDB Atlas 文档](https://www.mongodb.com/docs/atlas/)
- [Cron Job 服务](https://cron-job.org/)

---

**祝你使用愉快！🚀**

*完全免费方案 v1.0*
*最后更新：2026年5月6日*
