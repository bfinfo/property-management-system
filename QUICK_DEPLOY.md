# 🚀 快速部署指南

## 方式一：使用自动化脚本（推荐）

### Windows 用户

1. 右键点击 `deploy-to-github.ps1`
2. 选择"使用 PowerShell 运行"
3. 按照提示输入信息

或者在 PowerShell 中运行：
```powershell
cd D:\ClaudeCode\temp\property-management-system
.\deploy-to-github.ps1
```

### Mac/Linux 用户

```bash
cd /path/to/property-management-system
chmod +x deploy-to-github.sh
./deploy-to-github.sh
```

---

## 方式二：手动部署

### 1. 创建 GitHub 仓库

访问 https://github.com/new 创建新仓库：
- 仓库名：`property-management-system`
- 可见性：Public 或 Private
- ⚠️ 不要勾选 "Add a README file"

### 2. 推送代码

```bash
cd D:/ClaudeCode/temp/property-management-system
git remote add origin https://github.com/你的用户名/property-management-system.git
git branch -M main
git push -u origin main
```

### 3. 部署到云端

查看完整部署指南：**VERCEL_RAILWAY_DEPLOY.md**

---

## 📚 文档索引

- **VERCEL_RAILWAY_DEPLOY.md** - Vercel + Railway 完整部署指南
- **DEPLOY_NOW.md** - GitHub 部署说明
- **README.md** - 项目介绍
- **PROJECT_SUMMARY.md** - 项目总结

---

## ❓ 遇到问题？

### 推送失败？

1. **仓库不存在**：先在 GitHub 创建仓库
2. **认证失败**：配置 Personal Access Token
   - 访问：https://github.com/settings/tokens
   - 生成 token（勾选 repo 权限）
   - 使用 token 推送：
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/用户名/仓库名.git
   git push -u origin main
   ```

### 部署失败？

查看 **VERCEL_RAILWAY_DEPLOY.md** 中的"常见问题"章节

---

## 🎯 部署流程概览

```
1. 推送代码到 GitHub
   ↓
2. 创建 MongoDB 数据库 (MongoDB Atlas)
   ↓
3. 部署后端 (Railway)
   ↓
4. 部署移动端 (Vercel)
   ↓
5. 部署管理端 (Vercel)
   ↓
6. 更新 CORS 配置
   ↓
7. ✅ 完成！
```

预计时间：15-20 分钟

---

**祝你部署顺利！🎉**
