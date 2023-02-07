#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git config --global user.email "1129810754@qq.com"
git config --global user.name "jorgen-zhao"

# push_addr=`git remote get-url --push origin` # git提交地址
push_addr=`git@github.com:jorgen-zhao/blog.git` # git提交地址
commit_info=`git describe --all --always --long`
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=gh-pages # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

git init
git add -A
git commit -m "deploy, $commit_info"
git push -f $push_addr HEAD:$push_branch

cd -
rm -rf $dist_path