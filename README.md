# sunflower-website
sunflower-website

* 技术栈为 
  * Python Tornado Mako 
  * CoffeeScript jQuery AngularJS 
  * MongoDB Redis
  * Nginx Supervisor Docker Qiniu
* 依赖见 misc/requirement.txt
* 部署在阿里云的 docker 中
* 使用 supervisor 和 nginx 部署，资源文件上传到七牛，docker 运行环境的 Dockerfile 见：https://github.com/tonghuashuai/docker_learn/blob/master/tonghs-dev/Dockerfile*
* fork 代码后修改
* 联系我要相关帐号
  * 七牛
  * 阿里云
  * 域名托管转移（DNSPod）
  * 阿里云及 Docker container 添加 ssk-key


### Milestone

* 2016-09-15
    * DB 备份脚本
    * WebApp 和 MongoDB 分离到两个独立的 Container 中

### TODO

    * 持续集成
    * 手机和邮箱注册

### 注意
不要直接编辑 js 文件，请编辑 coffee 文件夹下的 coffee 文件，编译成 js。
