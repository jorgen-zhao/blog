(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{442:function(s,a,e){"use strict";e.r(a);var t=e(14),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker搭建"}},[s._v("#")]),s._v(" Docker搭建")]),s._v(" "),a("blockquote",[a("p",[s._v("在安装 Docker 之前，先说一下配置，我这里是Centos7 Linux 内核：官方建议 3.10 以上，3.8以上貌似也可。\n注意：本文的命令使用的是 root 用户登录执行，不是 root 的话所有命令前面要加 sudo")])]),s._v(" "),a("h2",{attrs:{id:"查看当前的内核版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看当前的内核版本"}},[s._v("#")]),s._v(" 查看当前的内核版本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# uname -r")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-1062.el7.x86_64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"更新yum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新yum"}},[s._v("#")]),s._v(" 更新yum")]),s._v(" "),a("p",[s._v("使用 root 权限更新 yum 包（生产环境中此步操作需慎重，看自己情况，学习的话随便搞）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个命令不是必须执行的，看个人情况，后面出现不兼容的情况的话就必须update了")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[a("code",[s._v("yum -y update")]),s._v("：升级所有包同时也升级软件和系统内核 "),a("br"),s._v(" "),a("code",[s._v("yum -y upgrade")]),s._v("：只升级所有包，不升级软件和系统内核")])]),s._v(" "),a("h2",{attrs:{id:"卸载旧版本-针对已经安装过docker的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本-针对已经安装过docker的"}},[s._v("#")]),s._v(" 卸载旧版本（针对已经安装过docker的）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum remove docker  docker-common docker-selinux docker-engine")]),s._v("\n已加载插件：fastestmirror\n参数 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" 没有匹配\n参数 docker-common 没有匹配\n参数 docker-selinux 没有匹配\n参数 docker-engine 没有匹配\n不删除任何软件包\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装Docker")]),s._v(" "),a("ol",[a("li",[s._v("安装需要的软件包")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" yum-utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("设置 yum 源\n设置一个yum源，下面两个都可用")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum-config-manager --add-repo http://download.docker.com/linux/centos/docker-ce.repo（中央仓库） \nyum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo（阿里仓库）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("查询docker版本")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum list docker-ce "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--showduplicates")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("安装docker")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce-20.10.17.ce\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);