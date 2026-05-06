# 如何将项目部署到GitHub

## 方法一：通过命令行部署（推荐）

### 步骤1：创建GitHub仓库

1. 访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `property-management-system`
   - **Description**: 物业全能管家智能体系统
   - **Public/Private**: 选择公开或私有
3. **不要**勾选"Initialize this repository with a README"
4. 点击"Create repository"

### 步骤2：添加远程仓库并推送

在项目目录下执行以下命令（替换YOUR_USERNAME为你的GitHub用户名）：

```bash
cd D:/ClaudeCode/temp/property-management-system

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/property-management-system.git

# 重命名分支为main（如果需要）
git branch -M main

# 推送代码到GitHub
git push -u origin main
```

### 步骤3：验证部署

访问你的GitHub仓库页面，确认代码已成功上传。

## 方法二：通过GitHub Desktop部署

### 步骤1：安装GitHub Desktop
下载并安装：https://desktop.github.com/

### 步骤2：添加本地仓库
1. 打开GitHub Desktop
2. 点击"File" -> "Add local repository"
3. 选择项目目录：`D:/ClaudeCode/temp/property-management-system`
4. 点击"Add repository"

### 步骤3：发布到GitHub
1. 点击"Publish repository"
2. 填写仓库名称和描述
3. 选择公开或私有
4. 点击"Publish repository"

## 方法三：通过GitHub网页上传

### 步骤1：创建GitHub仓库
同方法一的步骤1

### 步骤2：上传文件
1. 在仓库页面点击"uploading an existing file"
2. 将项目文件夹拖拽到上传区域
3. 填写提交信息
4. 点击"Commit changes"

**注意**：此方法会丢失Git提交历史，不推荐使用。

## 推送后的操作

### 1. 设置仓库描述和标签

在GitHub仓库页面：
1. 点击右上角的"⚙️ Settings"
2. 在"About"部分添加：
   - **Description**: 物业全能管家智能体系统 - 基于AI的物业服务管理平台
   - **Website**: 如果有演示网站，填写URL
   - **Topics**: `property-management`, `react`, `nodejs`, `ai`, `smart-community`

### 2. 创建README徽章

在README.md顶部添加徽章：

```markdown
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/property-management-system)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/property-management-system)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/property-management-system)
![License](https://img.shields.io/github/license/YOUR_USERNAME/property-management-system)
```

### 3. 启用GitHub Pages（可选）

如果想展示项目文档：
1. 进入仓库Settings
2. 找到"Pages"部分
3. 选择"Deploy from a branch"
4. 选择"main"分支和"/docs"文件夹
5. 点击"Save"

### 4. 设置分支保护（可选）

保护main分支：
1. 进入Settings -> Branches
2. 点击"Add rule"
3. 设置分支名称模式：`main`
4. 勾选"Require pull request reviews before merging"
5. 点击"Create"

## 持续更新代码

### 提交新的更改

```bash
# 查看修改的文件
git status

# 添加修改的文件
git add .

# 提交更改
git commit -m "描述你的更改"

# 推送到GitHub
git push origin main
```

### 拉取远程更改

```bash
# 拉取最新代码
git pull origin main
```

## 协作开发

### 邀请协作者

1. 进入仓库Settings
2. 点击"Collaborators"
3. 点击"Add people"
4. 输入GitHub用户名或邮箱
5. 发送邀请

### 创建分支进行开发

```bash
# 创建并切换到新分支
git checkout -b feature/new-feature

# 开发完成后提交
git add .
git commit -m "添加新功能"

# 推送分支到GitHub
git push origin feature/new-feature
```

然后在GitHub上创建Pull Request。

## 部署到生产环境

### 使用Vercel部署前端

1. 访问 https://vercel.com
2. 点击"Import Project"
3. 选择你的GitHub仓库
4. 配置项目：
   - **Framework Preset**: Vite
   - **Root Directory**: `mobile-app` 或 `admin-panel`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. 点击"Deploy"

### 使用Railway部署后端

1. 访问 https://railway.app
2. 点击"New Project"
3. 选择"Deploy from GitHub repo"
4. 选择你的仓库
5. 配置：
   - **Root Directory**: `server`
   - 添加环境变量
6. 自动部署

## 常见问题

### Q: 推送时提示权限错误？
A: 确保你已登录GitHub账号，或使用Personal Access Token：
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/property-management-system.git
```

### Q: 如何生成Personal Access Token？
A: 
1. 访问 https://github.com/settings/tokens
2. 点击"Generate new token"
3. 选择权限（至少需要repo权限）
4. 生成并保存token

### Q: 推送时提示文件太大？
A: GitHub单个文件限制100MB，仓库建议不超过1GB。检查是否误提交了node_modules等大文件。

### Q: 如何删除误提交的大文件？
A: 
```bash
# 从Git历史中删除文件
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch PATH_TO_FILE" \
  --prune-empty --tag-name-filter cat -- --all

# 强制推送
git push origin --force --all
```

## 下一步

- 阅读 [快速开始指南](./QUICKSTART.md)
- 阅读 [部署指南](./DEPLOYMENT.md)
- 开始开发你的功能

## 获取帮助

如有问题，请：
1. 查看GitHub官方文档：https://docs.github.com
2. 在仓库中提交Issue
3. 参考Git教程：https://git-scm.com/book/zh/v2
