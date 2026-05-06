# 🚀 Vercel + Railway 部署指南

## 📋 部署概览

本指南将帮助你将物业管理系统部署到云端：
- **移动端** → Vercel（免费）
- **管理端** → Vercel（免费）
- **后端API** → Railway（免费额度 $5/月）

## ⏱️ 预计时间：15-20分钟

---

## 第一步：准备工作

### 1.1 注册账号

#### Vercel 账号
1. 访问：https://vercel.com/signup
2. 选择 "Continue with GitHub"
3. 授权 Vercel 访问你的 GitHub

#### Railway 账号
1. 访问：https://railway.app/
2. 点击 "Login with GitHub"
3. 授权 Railway 访问你的 GitHub

#### MongoDB Atlas 账号（数据库）
1. 访问：https://www.mongodb.com/cloud/atlas/register
2. 选择 "Sign up with Google" 或邮箱注册
3. 创建免费的 M0 集群（512MB 存储）

### 1.2 推送代码到 GitHub

如果还没有推送到 GitHub，执行以下命令：

```bash
# 进入项目目录
cd D:/ClaudeCode/temp/property-management-system

# 检查 git 状态
git status

# 如果还没有远程仓库，创建一个
# 访问 https://github.com/new 创建新仓库
# 然后执行：
git remote add origin https://github.com/你的用户名/property-management-system.git
git branch -M main
git push -u origin main
```

---

## 第二步：部署后端到 Railway

### 2.1 创建 MongoDB 数据库

1. 登录 MongoDB Atlas：https://cloud.mongodb.com/
2. 点击 "Build a Database"
3. 选择 **FREE** 的 M0 集群
4. 选择云服务商和区域（推荐：AWS + Singapore）
5. 点击 "Create"
6. 创建数据库用户：
   - Username: `propertyuser`
   - Password: 生成一个强密码并**保存好**
7. 添加 IP 白名单：
   - 点击 "Network Access"
   - 点击 "Add IP Address"
   - 选择 "Allow Access from Anywhere" (0.0.0.0/0)
   - 点击 "Confirm"
8. 获取连接字符串：
   - 点击 "Database" → "Connect"
   - 选择 "Connect your application"
   - 复制连接字符串，类似：
   ```
   mongodb+srv://propertyuser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
   - 将 `<password>` 替换为你的实际密码

### 2.2 部署后端到 Railway

1. 访问：https://railway.app/new
2. 点击 "Deploy from GitHub repo"
3. 选择你的仓库 `property-management-system`
4. Railway 会自动检测到项目
5. 配置部署：
   - **Root Directory**: 输入 `server`
   - 点击 "Add variables" 添加环境变量：
   
   ```
   PORT=5000
   NODE_ENV=production
   MONGODB_URI=你的MongoDB连接字符串
   CORS_ORIGIN=*
   ```

6. 点击 "Deploy"
7. 等待部署完成（约2-3分钟）
8. 部署成功后，点击 "Settings" → "Networking" → "Generate Domain"
9. 复制生成的域名，类似：`https://property-server-production.up.railway.app`
10. **保存这个后端URL**，后面会用到

---

## 第三步：部署移动端到 Vercel

### 3.1 部署移动端

1. 访问：https://vercel.com/new
2. 点击 "Import Project"
3. 选择你的 GitHub 仓库 `property-management-system`
4. 配置项目：
   - **Project Name**: `property-mobile-app`
   - **Framework Preset**: Vite
   - **Root Directory**: 点击 "Edit" → 选择 `mobile-app`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. 添加环境变量：
   - 点击 "Environment Variables"
   - 添加：
   ```
   Name: VITE_API_URL
   Value: https://你的Railway后端域名
   ```
6. 点击 "Deploy"
7. 等待部署完成（约2-3分钟）
8. 部署成功后，Vercel 会显示你的网站地址
9. 点击访问，测试移动端是否正常

---

## 第四步：部署管理端到 Vercel

### 4.1 部署管理端

1. 再次访问：https://vercel.com/new
2. 选择同一个仓库 `property-management-system`
3. 配置项目：
   - **Project Name**: `property-admin-panel`
   - **Framework Preset**: Vite
   - **Root Directory**: 点击 "Edit" → 选择 `admin-panel`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. 添加环境变量：
   - 点击 "Environment Variables"
   - 添加：
   ```
   Name: VITE_API_URL
   Value: https://你的Railway后端域名
   ```
5. 点击 "Deploy"
6. 等待部署完成
7. 访问管理端网站

---

## 第五步：更新后端 CORS 配置

现在你有了前端的域名，需要更新后端的 CORS 配置：

1. 回到 Railway 项目
2. 点击你的 server 服务
3. 点击 "Variables"
4. 修改 `CORS_ORIGIN` 的值：
   ```
   CORS_ORIGIN=https://你的移动端域名.vercel.app,https://你的管理端域名.vercel.app
   ```
5. 保存后，Railway 会自动重新部署

---

## ✅ 部署完成！

恭喜！你的物业管理系统已经成功部署到云端：

- 📱 **移动端**: https://property-mobile-app.vercel.app
- 💻 **管理端**: https://property-admin-panel.vercel.app  
- 🔧 **后端API**: https://property-server.railway.app

---

## 🔧 后续维护

### 自动部署

现在每次你推送代码到 GitHub，Vercel 和 Railway 都会自动部署：

```bash
git add .
git commit -m "更新功能"
git push origin main
```

### 查看日志

- **Vercel**: 项目页面 → Deployments → 点击某次部署 → Logs
- **Railway**: 项目页面 → 点击服务 → Deployments → View Logs

### 自定义域名

#### Vercel（前端）
1. 进入项目 → Settings → Domains
2. 添加你的域名
3. 按照提示配置 DNS

#### Railway（后端）
1. 进入项目 → Settings → Networking
2. 添加自定义域名
3. 配置 DNS CNAME 记录

---

## ❓ 常见问题

### Q1: 部署失败怎么办？

**检查构建日志**：
- Vercel: 点击失败的部署 → 查看 Build Logs
- Railway: 点击服务 → Deployments → 查看日志

**常见错误**：
- 依赖安装失败：检查 package.json
- 构建命令错误：确认 build 命令正确
- 环境变量缺失：检查是否添加了所有必需的环境变量

### Q2: API 请求失败？

1. 检查后端是否正常运行（访问后端域名）
2. 检查前端环境变量 `VITE_API_URL` 是否正确
3. 检查后端 CORS 配置是否包含前端域名
4. 打开浏览器控制台查看具体错误

### Q3: MongoDB 连接失败？

1. 检查 MongoDB Atlas IP 白名单是否设置为 0.0.0.0/0
2. 检查连接字符串中的密码是否正确
3. 检查数据库用户权限

### Q4: Railway 免费额度用完了？

Railway 每月提供 $5 免费额度：
- 如果用完，可以升级到付费计划
- 或者迁移到其他平台（Render、Fly.io）

---

## 📚 相关资源

- [Vercel 文档](https://vercel.com/docs)
- [Railway 文档](https://docs.railway.app/)
- [MongoDB Atlas 文档](https://www.mongodb.com/docs/atlas/)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)

---

## 🎉 下一步

现在你的系统已经上线，可以：

1. 分享链接给用户测试
2. 配置自定义域名
3. 添加更多功能
4. 监控系统性能
5. 收集用户反馈

祝你使用愉快！🚀
