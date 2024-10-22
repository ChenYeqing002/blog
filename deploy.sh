#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .
git commit -m '更新'

# 更新源代码到main分支
git push -f git@github.com:ChenYeqing002/blog.git main:main


# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 更新生成文件到master分支，页面展示分支
git push -f git@github.com:ChenYeqing002/blog.git master:master

cd -