# ✅ 部署检查清单

在开始部署之前，请确保完成以下准备工作：

## 📋 准备阶段

### 账号注册
- [ ] GitHub 账号
- [ ] Vercel 账号（使用 GitHub 登录）
- [ ] Railway 账号（使用 GitHub 登录）
- [ ] MongoDB Atlas 账号

### 代码准备
- [ ] 代码已推送到 GitHub
- [ ] 确认项目结构完整
  - [ ] mobile-app/ 目录存在
  - [ ] admin-panel/ 目录存在
  - [ ] server/ 目录存在
  - [ ] 所有 package.json 文件存在

---

## 🗄️ 数据库部署

### MongoDB Atlas
- [ ] 创建免费 M0 集群
- [ ] 选择区域（推荐：AWS Singapore）
- [ ] 创建数据库用户
  - 用户名：`propertyuser`
  - 密码：________（请记录）
- [ ] 配置 IP 白名单（0.0.0.0/0）
- [ ] 获取连接字符串
  - [ ] 已复制连接字符串
  - [ ] 已替换密码

**连接字符串示例**：
```
mongodb+srv://propertyuser:你的密码@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

---

## 🔧 后端部署（Railway）

### 部署步骤
- [ ] 访问 https://railway.app/new
- [ ] 选择 "Deploy from GitHub repo"
- [ ] 选择仓库：property-management-system
- [ ] 配置 Root Directory：`server`
- [ ] 添加环境变量：
  - [ ] PORT=5000
  - [ ] NODE_ENV=production
  - [ ] MONGODB_URI=（你的连接字符串）
  - [ ] CORS_ORIGIN=*
- [ ] 点击 Deploy
- [ ] 等待部署完成
- [ ] 生成域名
- [ ] 测试后端 API

**后端域名**：________（请记录）

---

## 📱 移动端部署（Vercel）

### 部署步骤
- [ ] 访问 https://vercel.com/new
- [ ] 选择仓库：property-management-system
- [ ] 配置项目：
  - [ ] Project Name: property-mobile-app
  - [ ] Framework: Vite
  - [ ] Root Directory: mobile-app
  - [ ] Build Command: npm run build
  - [ ] Output Directory: dist
- [ ] 添加环境变量：
  - [ ] VITE_API_URL=（你的后端域名）
- [ ] 点击 Deploy
- [ ] 等待部署完成
- [ ] 访问测试

**移动端域名**：________（请记录）

---

## 💻 管理端部署（Vercel）

### 部署步骤
- [ ] 访问 https://vercel.com/new
- [ ] 选择仓库：property-management-system
- [ ] 配置项目：
  - [ ] Project Name: property-admin-panel
  - [ ] Framework: Vite
  - [ ] Root Directory: admin-panel
  - [ ] Build Command: npm run build
  - [ ] Output Directory: dist
- [ ] 添加环境变量：
  - [ ] VITE_API_URL=（你的后端域名）
- [ ] 点击 Deploy
- [ ] 等待部署完成
- [ ] 访问测试

**管理端域名**：________（请记录）

---

## 🔄 后续配置

### 更新 CORS
- [ ] 回到 Railway 项目
- [ ] 更新 CORS_ORIGIN 环境变量：
  ```
  CORS_ORIGIN=https://移动端域名.vercel.app,https://管理端域名.vercel.app
  ```
- [ ] 保存并等待自动重新部署

### 功能测试
- [ ] 移动端可以正常访问
- [ ] 管理端可以正常访问
- [ ] API 请求正常
- [ ] 数据库连接正常
- [ ] 图片上传功能正常
- [ ] 表单提交功能正常

---

## 📝 部署信息记录

### 重要链接
```
GitHub 仓库：https://github.com/________/property-management-system
移动端：https://________.vercel.app
管理端：https://________.vercel.app
后端 API：https://________.railway.app
MongoDB：mongodb+srv://propertyuser:________@________.mongodb.net/
```

### 账号信息
```
MongoDB 用户名：propertyuser
MongoDB 密码：________
```

---

## 🎉 完成确认

- [ ] 所有服务都已部署
- [ ] 所有功能都已测试
- [ ] 域名已记录
- [ ] 密码已保存
- [ ] 文档已阅读

---

## 📚 下一步

部署完成后，你可以：

1. **配置自定义域名**
   - Vercel: Settings → Domains
   - Railway: Settings → Networking

2. **监控系统状态**
   - Vercel: Deployments → Logs
   - Railway: Deployments → View Logs

3. **设置自动部署**
   - 已自动配置，每次 git push 都会触发部署

4. **优化性能**
   - 添加 CDN
   - 配置缓存
   - 优化图片

5. **添加功能**
   - 用户认证
   - 支付集成
   - 数据分析

---

## ❓ 遇到问题？

查看 `VERCEL_RAILWAY_DEPLOY.md` 中的"常见问题"章节

---

**祝你部署顺利！🚀**

*最后更新：2026年5月6日*
