(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{352:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git分支-分支原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git分支-分支原理"}},[t._v("#")]),t._v(" Git分支-分支原理")]),t._v(" "),s("p",[t._v("Git 处理分支的方式可谓是难以置信的轻量，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷。 与许多其它版本控制系统不同，Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次。")]),t._v(" "),s("h3",{attrs:{id:"首次提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首次提交"}},[t._v("#")]),t._v(" 首次提交")]),t._v(" "),s("p",[t._v("在进行提交操作时，Git 会保存一个提交对象（commit object）。")]),t._v(" "),s("p",[t._v("假设现在有一个工作目录，里面包含了三个将要被暂存和提交的文件。 暂存操作会为每一个文件计算校验和（使用 SHA-1 哈希算法），然后会把当前版本的文件快照保存到 Git 仓库中 （Git 使用 "),s("em",[t._v("blob")]),t._v(" 对象来保存它们），最终将校验和加入到暂存区域等待提交：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" README test.rb LICENSE\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The initial commit of my project'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("当使用 "),s("code",[t._v("git commit")]),t._v(" 进行提交操作时，Git 会先计算每一个子目录（本例中只有项目根目录）的校验和， 然后在 Git 仓库中这些校验和保存为树对象。随后，Git 便会创建一个提交对象， 它除了包含上面提到的那些信息外，还包含指向这个树对象（项目根目录）的指针。 如此一来，Git 就可以在需要的时候重现此次保存的快照。")]),t._v(" "),s("p",[t._v("现在，Git 仓库中有五个对象：三个 "),s("strong",[s("em",[t._v("blob")]),t._v(" 对象")]),t._v("（保存着文件快照）、一个 "),s("strong",[t._v("树对象")]),t._v(" （记录着目录结构和 blob 对象索引）以及一个 "),s("strong",[t._v("提交对象")]),t._v("（包含着指向前述树对象的指针和所有提交信息）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jorgen/image_store/blog/20200906145443.jpg",alt:""}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图1. 首次提交对象及其树结构 ▲")]),t._v(" "),s("h4",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结：")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("git add")]),t._v(" 加入暂存操作，会为每个文件创建计算校验和，以及每个文件对应的"),s("strong",[t._v("文件快照（blob对象")]),t._v("）。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("git commit")]),t._v(" 提交操作，计算子目录或跟目录的校验和 保存为"),s("strong",[t._v("树对象")]),t._v("。随后，创建一个"),s("strong",[t._v("提交对象")]),t._v("，包含着指向树对象的指针和所有提交信息。")])])]),t._v(" "),s("h3",{attrs:{id:"再次提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#再次提交"}},[t._v("#")]),t._v(" 再次提交")]),t._v(" "),s("p",[t._v("做些修改后再次提交，那么这次产生的提交对象会包含一个指向上次提交对象（父对象）的指针。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jorgen/image_store/blog/20200906152315.jpg",alt:""}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图2. 提交对象及其父对象 ▲")]),t._v(" "),s("h3",{attrs:{id:"git-的分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-的分支"}},[t._v("#")]),t._v(" Git 的分支")]),t._v(" "),s("p",[s("strong",[t._v("Git 的分支，其实本质上仅仅是指向提交对象的可变指针")]),t._v("。 Git 的默认分支名字是 "),s("code",[t._v("master")]),t._v("。 在多次提交操作之后，你其实已经有一个指向最后那个提交对象的 "),s("code",[t._v("master")]),t._v(" 分支。 "),s("strong",[s("code",[t._v("master")]),t._v(" 分支指针会在每次提交时自动向前移动")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("Git 的 "),s("code",[t._v("master")]),t._v(" 分支并不是一个特殊分支。 它就跟其它分支完全没有区别。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jorgen/image_store/blog/20200906154109.jpg",alt:""}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图3. 分支及其提交历史 ▲")]),t._v(" "),s("h3",{attrs:{id:"创建分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[t._v("#")]),t._v(" 创建分支")]),t._v(" "),s("p",[t._v("Git 是怎么创建新分支的呢？ 很简单，它"),s("strong",[t._v("只是为你创建了一个可以移动的新的指针")]),t._v("。 比如，创建一个 testing 分支， 你需要使用 "),s("code",[t._v("git branch")]),t._v(" 命令：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch testing\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这会在当前所在的提交对象上创建一个指针。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jorgen/image_store/blog/20200906154330.png",alt:""}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图4. 两个指向相同提交历史的分支 ▲")]),t._v(" "),s("h3",{attrs:{id:"当前分支的指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前分支的指针"}},[t._v("#")]),t._v(" 当前分支的指针")]),t._v(" "),s("p",[t._v("Git 是怎么知道当前在哪一个分支上呢？ 很简单，它有一个"),s("strong",[t._v("名为 "),s("code",[t._v("HEAD")]),t._v(" 的特殊指针")]),t._v("，"),s("strong",[t._v("指向当前所在的本地分支")]),t._v("（译注："),s("strong",[t._v("将 "),s("code",[t._v("HEAD")]),t._v(" 想象为当前分支的别名")]),t._v("）。 在本例中，你仍然在 "),s("code",[t._v("master")]),t._v(" 分支上。 因为 "),s("code",[t._v("git branch")]),t._v(" 命令仅仅 "),s("strong",[t._v("创建")]),t._v(" 一个新分支，并不会自动切换到新分支中去。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jorgen/image_store/blog/20200906205325.png",alt:""}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图5. HEAD 指向当前所在的分支 ▲")]),t._v(" "),s("h3",{attrs:{id:"查看当前所在分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看当前所在分支"}},[t._v("#")]),t._v(" 查看当前所在分支")]),t._v(" "),s("p",[t._v("你可以简单地使用 "),s("code",[t._v("git log")]),t._v(" 命令查看各个分支当前所指的对象。 提供这一功能的参数是 "),s("code",[t._v("--decorate")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline --decorate\nf30ab "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master, testing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" feature "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# f30ab提交对象 (HEAD当前所在分支 -> master分支，testing 分支)")]),t._v("\n34ac2 Fixed bug "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 34ac2 提交对象")]),t._v("\n98ca9 The initial commit of my project "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 98ca9 提交对象")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("正如你所见，当前 "),s("code",[t._v("master")]),t._v(" 和 "),s("code",[t._v("testing")]),t._v(" 分支均指向校验和以 "),s("code",[t._v("f30ab")]),t._v(" 开头的提交对象。")]),t._v(" "),s("h3",{attrs:{id:"分支切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支切换"}},[t._v("#")]),t._v(" 分支切换")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout testing  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git checkout <分支名>")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这样 "),s("code",[t._v("HEAD")]),t._v(" 就指向 "),s("code",[t._v("testing")]),t._v(" 分支了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jorgen/image_store/blog/20200906205917.png",alt:""}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图6. HEAD 指向当前所在的分支 ▲")]),t._v(" "),s("p",[t._v("那么，这样的实现方式会给我们带来什么好处呢？ 现在不妨再提交一次：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" test.rb\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'made a change'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jorgen/image_store/blog/20200906210338.png",alt:""}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图7. HEAD 分支随着提交操作自动向前移动 ▲")]),t._v(" "),s("p",[t._v("如图所示，你的 "),s("code",[t._v("testing")]),t._v(" 分支向前移动了，但是 "),s("code",[t._v("master")]),t._v(" 分支却没有，它仍然指向运行 "),s("code",[t._v("git checkout")]),t._v(" 时所指的对象。 这就有意思了，现在我们切换回 "),s("code",[t._v("master")]),t._v(" 分支看看：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jorgen/image_store/blog/20200906210810.png",alt:""}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图8. 检出时 HEAD 随之移动 ▲")]),t._v(" "),s("p",[t._v("这条命令"),s("strong",[t._v("做了两件事")]),t._v("。 "),s("strong",[t._v("一是使 HEAD 指回 "),s("code",[t._v("master")]),t._v(" 分支，二是将工作目录恢复成 "),s("code",[t._v("master")]),t._v(" 分支所指向的快照内容")]),t._v("。 也就是说，你现在做修改的话，项目将始于一个较旧的版本。 本质上来讲，这就是忽略 "),s("code",[t._v("testing")]),t._v(" 分支所做的修改，以便于向另一个方向进行开发。")]),t._v(" "),s("p",[t._v("我们不妨再稍微做些修改并提交：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" test.rb\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'made other changes'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("现在，这个项目的提交历史已经产生了分叉（参见 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/divergent_history",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目分叉历史"),s("OutboundLink")],1),t._v("）。 因为刚才你创建了一个新分支，并切换过去进行了一些工作，随后又切换回 master 分支进行了另外一些工作。 上述两次改动针对的是不同分支：你可以在不同分支间不断地来回切换和工作，并在时机成熟时将它们合并起来。 而所有这些工作，你需要的命令只有 "),s("code",[t._v("branch")]),t._v("、"),s("code",[t._v("checkout")]),t._v(" 和 "),s("code",[t._v("commit")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jorgen/image_store/blog/20200906211331.png",alt:""}})]),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("图9. 项目分叉历史 ▲")]),t._v(" "),s("p",[t._v("你可以简单地使用 "),s("code",[t._v("git log")]),t._v(" 命令查看分叉历史。 运行 "),s("code",[t._v("git log --oneline --decorate --graph --all")]),t._v(" ，它会输出你的提交历史、各个分支的指向以及项目的分支分叉情况。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline --decorate --graph --all\n* c2b9e "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD, master"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" made other changes\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * 87ab2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("testing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" made a change\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("/\n* f30ab "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" feature\n* 34ac2 fixed bug\n* 98ca9 initial commit of my project\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("由于 Git 的分支实质上仅是包含所指对象校验和（长度为 40 的 SHA-1 值字符串）的文件，所以它的创建和销毁都异常高效。 创建一个新分支就相当于往一个文件中写入 41 个字节（40 个字符和 1 个换行符），如此的简单能不快吗？")]),t._v(" "),s("p",[t._v("这与过去大多数版本控制系统形成了鲜明的对比，它们在创建分支时，将所有的项目文件都复制一遍，并保存到一个特定的目录。 完成这样繁琐的过程通常需要好几秒钟，有时甚至需要好几分钟。所需时间的长短，完全取决于项目的规模。 而在 Git 中，任何规模的项目都能在瞬间创建新分支。 同时，由于每次提交都会记录父对象，所以寻找恰当的合并基础（译注：即共同祖先）也是同样的简单和高效。 这些高效的特性使得 Git 鼓励开发人员频繁地创建和使用分支。")]),t._v(" "),s("h3",{attrs:{id:"创建分支同时切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建分支同时切换"}},[t._v("#")]),t._v(" 创建分支同时切换")]),t._v(" "),s("p",[t._v("通常我们会在创建一个新分支后立即切换过去，可以使用如下命令：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("newbranchname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);