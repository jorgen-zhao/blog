#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
echo 'jorgen.website' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:jorgen-zhao/blog.git
else
  msg='来自github action的自动部署!'
  githubUrl=https://jorgen-zhao:${GITHUB_TOKEN}@github.com/jorgen-zhao/blog.git
  git config --global user.name "jorgen-zhao"
  git config --global user.email "1129810754@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist
