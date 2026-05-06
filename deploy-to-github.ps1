# 物业管理系统 - 快速部署脚本 (Windows)

Write-Host "🚀 开始部署物业管理系统到 GitHub..." -ForegroundColor Green
Write-Host ""

# 检查是否在正确的目录
if (-not (Test-Path "README.md")) {
    Write-Host "❌ 错误：请在项目根目录运行此脚本" -ForegroundColor Red
    exit 1
}

# 检查 git 状态
Write-Host "📋 检查 Git 状态..." -ForegroundColor Cyan
git status

Write-Host ""
$github_username = Read-Host "请输入你的 GitHub 用户名"

Write-Host ""
$repo_name = Read-Host "请输入仓库名称（默认：property-management-system）"
if ([string]::IsNullOrWhiteSpace($repo_name)) {
    $repo_name = "property-management-system"
}

# 检查是否已有远程仓库
$remotes = git remote
if ($remotes -contains "origin") {
    Write-Host "⚠️  检测到已存在的远程仓库" -ForegroundColor Yellow
    git remote -v
    Write-Host ""
    $replace = Read-Host "是否要替换远程仓库地址？(y/n)"
    if ($replace -eq "y") {
        git remote remove origin
        git remote add origin "https://github.com/$github_username/$repo_name.git"
        Write-Host "✅ 已更新远程仓库地址" -ForegroundColor Green
    }
} else {
    git remote add origin "https://github.com/$github_username/$repo_name.git"
    Write-Host "✅ 已添加远程仓库" -ForegroundColor Green
}

Write-Host ""
Write-Host "📦 准备推送代码..." -ForegroundColor Cyan

# 确保在 main 分支
git branch -M main

# 推送代码
Write-Host ""
Write-Host "🚀 推送代码到 GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ 代码推送成功！" -ForegroundColor Green
    Write-Host ""
    Write-Host "📍 你的仓库地址：" -ForegroundColor Cyan
    Write-Host "   https://github.com/$github_username/$repo_name" -ForegroundColor White
    Write-Host ""
    Write-Host "🎯 下一步：" -ForegroundColor Cyan
    Write-Host "   1. 访问 https://vercel.com/new 部署前端" -ForegroundColor White
    Write-Host "   2. 访问 https://railway.app/new 部署后端" -ForegroundColor White
    Write-Host "   3. 查看详细部署指南：VERCEL_RAILWAY_DEPLOY.md" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ 推送失败！" -ForegroundColor Red
    Write-Host ""
    Write-Host "可能的原因：" -ForegroundColor Yellow
    Write-Host "   1. 仓库不存在 - 请先访问 https://github.com/new 创建仓库" -ForegroundColor White
    Write-Host "   2. 没有权限 - 请检查 GitHub 认证" -ForegroundColor White
    Write-Host "   3. 网络问题 - 请检查网络连接" -ForegroundColor White
    Write-Host ""
    Write-Host "💡 提示：如果需要认证，可以使用 Personal Access Token" -ForegroundColor Cyan
    Write-Host "   访问：https://github.com/settings/tokens" -ForegroundColor White
}

Write-Host ""
Write-Host "按任意键退出..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

