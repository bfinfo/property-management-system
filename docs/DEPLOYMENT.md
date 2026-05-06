# 部署指南

## 一、本地开发环境搭建

### 1. 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0
- MongoDB >= 5.0（可选，用于数据持久化）

### 2. 安装依赖

#### 移动端
```bash
cd mobile-app
npm install
```

#### PC管理端
```bash
cd admin-panel
npm install
```

#### 后端服务
```bash
cd server
npm install
```

### 3. 配置环境变量

复制 `server/.env.example` 为 `server/.env`，并根据实际情况修改配置：

```bash
cd server
cp .env.example .env
```

编辑 `.env` 文件：
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/property-management
```

### 4. 启动服务

#### 启动后端服务（端口5000）
```bash
cd server
npm run dev
```

#### 启动移动端（端口3000）
```bash
cd mobile-app
npm run dev
```

#### 启动PC管理端（端口3001）
```bash
cd admin-panel
npm run dev
```

### 5. 访问应用

- 移动端：http://localhost:3000
- PC管理端：http://localhost:3001
- 后端API：http://localhost:5000

## 二、生产环境部署

### 1. 构建前端应用

#### 构建移动端
```bash
cd mobile-app
npm run build
```
构建产物在 `mobile-app/dist` 目录

#### 构建PC管理端
```bash
cd admin-panel
npm run build
```
构建产物在 `admin-panel/dist` 目录

### 2. 部署前端（使用Nginx）

#### 安装Nginx
```bash
# Ubuntu/Debian
sudo apt-get install nginx

# CentOS/RHEL
sudo yum install nginx
```

#### 配置Nginx
创建配置文件 `/etc/nginx/sites-available/property-system`：

```nginx
# 移动端
server {
    listen 80;
    server_name mobile.yourdomain.com;
    
    root /var/www/property-mobile;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# PC管理端
server {
    listen 80;
    server_name admin.yourdomain.com;
    
    root /var/www/property-admin;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 部署前端文件
```bash
# 复制构建产物到Nginx目录
sudo cp -r mobile-app/dist/* /var/www/property-mobile/
sudo cp -r admin-panel/dist/* /var/www/property-admin/

# 启用配置
sudo ln -s /etc/nginx/sites-available/property-system /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. 部署后端服务

#### 使用PM2管理Node.js进程
```bash
# 安装PM2
npm install -g pm2

# 启动后端服务
cd server
pm2 start server.js --name property-server

# 设置开机自启
pm2 startup
pm2 save
```

#### 查看服务状态
```bash
pm2 status
pm2 logs property-server
```

### 4. 配置MongoDB

#### 安装MongoDB
```bash
# Ubuntu/Debian
sudo apt-get install mongodb

# 启动MongoDB
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

#### 创建数据库和用户
```bash
mongo
> use property-management
> db.createUser({
    user: "property_user",
    pwd: "your_password",
    roles: ["readWrite"]
})
```

更新 `server/.env` 中的数据库连接字符串。

## 三、GitHub部署

### 1. 创建GitHub仓库

1. 访问 https://github.com/new
2. 填写仓库名称：`property-management-system`
3. 选择公开或私有
4. 点击"Create repository"

### 2. 推送代码到GitHub

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/property-management-system.git

# 推送代码
git branch -M main
git push -u origin main
```

### 3. 使用GitHub Actions自动部署（可选）

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: |
        cd mobile-app && npm install
        cd ../admin-panel && npm install
        cd ../server && npm install
    
    - name: Build
      run: |
        cd mobile-app && npm run build
        cd ../admin-panel && npm run build
    
    - name: Deploy to server
      # 这里添加部署到服务器的步骤
      run: echo "Deploy to production server"
```

## 四、使用Vercel/Netlify部署前端（推荐）

### Vercel部署

1. 访问 https://vercel.com
2. 导入GitHub仓库
3. 配置构建设置：
   - Framework Preset: Vite
   - Root Directory: mobile-app 或 admin-panel
   - Build Command: npm run build
   - Output Directory: dist
4. 点击Deploy

### Netlify部署

1. 访问 https://netlify.com
2. 导入GitHub仓库
3. 配置构建设置：
   - Base directory: mobile-app 或 admin-panel
   - Build command: npm run build
   - Publish directory: dist
4. 点击Deploy

## 五、使用Railway/Render部署后端

### Railway部署

1. 访问 https://railway.app
2. 连接GitHub仓库
3. 选择 server 目录
4. 添加环境变量
5. 自动部署

### Render部署

1. 访问 https://render.com
2. 创建新的Web Service
3. 连接GitHub仓库
4. 配置：
   - Root Directory: server
   - Build Command: npm install
   - Start Command: npm start
5. 添加环境变量
6. 部署

## 六、域名配置

### 1. 购买域名
在阿里云、腾讯云等平台购买域名

### 2. 配置DNS
添加A记录或CNAME记录指向服务器IP或CDN地址

### 3. 配置SSL证书
使用Let's Encrypt免费证书：

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 七、监控和维护

### 1. 日志管理
```bash
# 查看PM2日志
pm2 logs

# 查看Nginx日志
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 2. 性能监控
- 使用PM2 Plus进行应用监控
- 使用阿里云/腾讯云监控服务

### 3. 备份
定期备份数据库和重要文件

```bash
# MongoDB备份
mongodump --db property-management --out /backup/$(date +%Y%m%d)
```

## 八、常见问题

### 1. 端口被占用
```bash
# 查看端口占用
lsof -i :5000
# 杀死进程
kill -9 PID
```

### 2. 权限问题
```bash
# 修改文件权限
sudo chown -R $USER:$USER /var/www/property-mobile
```

### 3. 跨域问题
确保后端配置了CORS中间件

## 九、技术支持

如有问题，请提交Issue到GitHub仓库。
