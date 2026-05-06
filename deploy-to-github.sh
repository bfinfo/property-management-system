#!/bin/bash

# 物业管理系统 - 快速部署脚本

echo "🚀 开始部署物业管理系统到 GitHub..."
echo ""

# 检查是否在正确的目录
if [ ! -f "README.md" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 检查 git 状态
echo "📋 检查 Git 状态..."
git status

echo ""
echo "请输入你的 GitHub 用户名："
read github_username

echo ""
echo "请输入仓库名称（默认：property-management-system）："
read repo_name
repo_name=${repo_name:-property-management-system}

# 检查是否已有远程仓库
if git remote | grep -q "origin"; then
    echo "⚠️  检测到已存在的远程仓库"
    git remote -v
    echo ""
    echo "是否要替换远程仓库地址？(y/n)"
    read replace_remote
    if [ "$replace_remote" = "y" ]; then
        git remote remove origin
        git remote add origin "https://github.com/$github_username/$repo_name.git"
        echo "✅ 已更新远程仓库地址"
    fi
else
    git remote add origin "https://github.com/$github_username/$repo_name.git"
    echo "✅ 已添加远程仓库"
fi

echo ""
echo "📦 准备推送代码..."

# 确保在 main 分支
git branch -M main

# 推送代码
echo ""
echo "🚀 推送代码到 GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码推送成功！"
    echo ""
    echo "📍 你的仓库地址："
    echo "   https://github.com/$github_username/$repo_name"
    echo ""
    echo "🎯 下一步："
    echo "   1. 访问 https://vercel.com/new 部署前端"
    echo "   2. 访问 https://railway.app/new 部署后端"
    echo "   3. 查看详细部署指南：VERCEL_RAILWAY_DEPLOY.md"
    echo ""
else
    echo ""
    echo "❌ 推送失败！"
    echo ""
    echo "可能的原因："
    echo "   1. 仓库不存在 - 请先访问 https://github.com/new 创建仓库"
    echo "   2. 没有权限 - 请检查 GitHub 认证"
    echo "   3. 网络问题 - 请检查网络连接"
    echo ""
    echo "💡 提示：如果需要认证，可以使用 Personal Access Token"
    echo "   访问：https://github.com/settings/tokens"
fi

