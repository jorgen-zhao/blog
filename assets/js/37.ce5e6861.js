(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{383:function(v,t,_){"use strict";_.r(t);var s=_(14),a=Object(s.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("介绍")]),v._v(" "),t("p",[v._v("权限管控可以通俗的理解为权力限制，即不同的人由于拥有不同权力，他所看到的、能使用的可能不一样。对应到一个应用系统，其实就是一个用户可能拥有不同的数据权限（看到的）和操作权限（使用的）。")])]),v._v(" "),t("div",{staticClass:"center-container"},[t("h3",{attrs:{id:"rbac-基于角色的权限访问控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rbac-基于角色的权限访问控制"}},[v._v("#")]),v._v(" RBAC，基于角色的权限访问控制")])]),t("p",[t("strong",[v._v("Role-Based Access Control")]),v._v("，核心在于用户只和角色关联，而角色代表对了权限，是一系列权限的集合。")]),v._v(" "),t("p",[v._v("RBAC三要素：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("用户")]),v._v("：系统中所有的账户")]),v._v(" "),t("li",[t("strong",[v._v("角色")]),v._v("：一系列权限的集合（如：管理员，开发者，审计管理员等）")]),v._v(" "),t("li",[t("strong",[v._v("权限")]),v._v("：菜单，按钮，数据的增删改查等详细权限。\n在RBAC中，权限与角色相关联，用户通过成为适当角色的成员而得到这些角色的权限。")])]),v._v(" "),t("p",[v._v("角色是为了完成各种工作而创造，用户则依据它的责任和资格来被指派相应的角色，用户可以很容易地从一个角色被指派到另一个角色。")]),v._v(" "),t("p",[v._v("角色可依新的需求和系统的合并而赋予新的权限，而权限也可根据需要而从某角色中回收。角色与角色的关系同样也存在继承关系防止越权。")]),v._v(" "),t("p",[t("strong",[v._v("优点")]),v._v("：便于角色划分，更灵活的授权管理；最小颗粒度授权；")]),v._v(" "),t("div",{staticClass:"center-container"},[t("p",[t("img",{attrs:{src:"/dev/60/10.jpg",alt:"模型"}})])]),t("div",{staticClass:"center-container"},[t("h3",{attrs:{id:"rbac-权限管理的在实际系统中的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rbac-权限管理的在实际系统中的应用"}},[v._v("#")]),v._v(" RBAC 权限管理的在实际系统中的应用")])]),t("p",[v._v("RBAC 权限模型由三大部分构成，即用户管理、角色管理、权限管理。")]),v._v(" "),t("p",[v._v("用户管理按照企业架构或业务线架构来划分，这些结构本身比较清晰，扩展性和可读性都非常好。")]),v._v(" "),t("p",[v._v("角色管理一定要在深入理解业务逻辑后再来设计，一般使用各部门真实的角色作为基础，再根据业务逻辑进行扩展。")]),v._v(" "),t("p",[v._v("权限管理是前两种管理的再加固，做太细容易太碎片，做太粗又不够安全，这里我们需要根据经验和实际情况来设计。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("用户管理")]),v._v("\n用户管理中的用户，是企业里每一位员工，他们本身就有自己的组织架构，我们可以直接使用企业部门架构或者业务线架构来作为线索，构建用户管理系统。")])]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("实际业务中的组织架构可能与企业部门架构、业务线架构不同，需要考虑数据共享机制，一般的做法为授权某个人、某个角色组共享某个组织层级的某个对象组数据。")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("角色管理")])])]),v._v(" "),t("blockquote",[t("p",[v._v("在设计系统角色时，我们应该深入理解公司架构、业务架构后，再根据需求设计角色及角色内的等级。一般角色相对于用户来说是固定不变的，每个角色都有自己明确的权限和限制，这些权限在系统设计之处就确定了，之后也轻易不会再变动。")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v("- 自动获得基础角色: 当员工入职到某部门时，该名员工的账号应该自动被加入该部门对应的基础角色中，并拥有对应的基础权限。这种操作是为了保证系统安全的前提下，减少了管理员大量手动操作。使新入职员工能快速使用系统，提高工作效率。\n\n- 临时角色与失效时间: 公司业务有时需要外援来支持，他们并不属于公司员工，也只是在某个时段在公司做支持。此时我们需要设置临时角色，来应对这种可能跨多部门协作的临时员工。如果公司安全级别较高，此类账号默认有固定失效时间，到达失效时间需再次审核才能重新开启。避免临时账号因为流程不完善，遗忘在系统中，引起安全隐患。\n\n- 虚拟角色:  部门角色中的等级，可以授权同等级的员工拥有相同的权限，但某些员工因工作原因，需要调用角色等级之外的权限，相同等级不同员工需要使用的权限还不相同。这种超出角色等级又合理的权限授予，我们可以设置虚拟角色。这一虚拟角色可集成这一工作所需的所有权限，然后将它赋予具体的员工即可。这样即不用调整组织架构和对应的角色，也可以满足工作中特殊情况的权限需求。\n\n- 黑白名单: 比较常见的黑名单场景是某些犯了错误的员工，虽然在职，但已经不能给他们任何公司权限了。这种既不能取消角色关联，也不能完全停用账号的情况，可以设置黑名单，让此类用户可以登录账号，查看基本信息，但大多数关键权限已经被黑名单限制。白名单：某些用户自身不拥有某部门的顶级角色，但处于业务需求，需要给他角色外的高级权限，那么我们可以设计限制范围的白名单，将需要的用户添加进去即可。在安全流程中，我们仅需要对白名单设计安全流程，即可审核在白名单中的特殊用户，做到监控拥有特殊权限的用户，减少安全隐患。\n")])])]),t("ul",[t("li",[t("p",[t("strong",[v._v("权限管理")])]),v._v(" "),t("blockquote",[t("p",[v._v("权限管理一般从三个方面来做限制。页面/菜单权限，操作权限，数据权限。")])]),v._v(" "),t("ul",[t("li",[v._v("页面/菜单权限：对于没有权限操作的用户，直接隐藏对应的页面入口或菜单选项。这种方法简单快捷直接，对于一些安全不太敏感的权限，使用这种方式非常高效。")]),v._v(" "),t("li",[v._v("操作权限：操作权限通常是指对同一组数据，不同的用户是否可以增删改查。对某些用户来说是只读浏览数据，对某些用户来说是可编辑的数据。")]),v._v(" "),t("li",[v._v("数据权限：对于安全需求高的权限管理，仅从前端限制隐藏菜单，隐藏编辑按钮是不够的，还需要在数接口上做限制。如果用户试图通过非法手段编辑不属于自己权限下的数据，服务器端会识别、记录并限制访问。")])]),v._v(" "),t("hr"),v._v(" "),t("p",[t("strong",[v._v("数据权限如何管控：数据权限可以分为行权限和列权限。")])]),v._v(" "),t("ul",[t("li",[v._v("行权限控制：看多少条数据。列权限控制：看一条数据的多少个字段。")]),v._v(" "),t("li",[v._v("简单系统中可以通过组织架构来管控行权限，按照角色来配置列权限，但是遇到复杂情况，组织架构是承载不了复杂行权限管控，角色也更不能承载列的特殊化展示。目前行业的做法是提供行列级数据权规则配置，把规则当成类似权限点配置赋予某个角色或者某个用户。")])])])]),v._v(" "),t("div",{staticClass:"center-container"},[t("h3",{attrs:{id:"用户管理系统权限设计中的更多实践细节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户管理系统权限设计中的更多实践细节"}},[v._v("#")]),v._v(" 用户管理系统权限设计中的更多实践细节")])]),t("ol",[t("li",[t("p",[t("strong",[v._v("超级管理员")]),v._v(" "),t("br"),v._v("\n超级管理员是用来启动系统，配置系统的账号。这个账号应该在配置好系统，创建管理员之后被隐藏起来。超级管理员账号拥有系统中全部权限，可穿梭查看各部门数据，如果使用不恰当，是系统管理的安全隐患。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("互斥角色如何处理")]),v._v(" "),t("br"),v._v("\n当用户已经有用的角色和即将添加的角色互相互斥时，应该在添加新角色时，提示管理员因角色互斥的原因，无法进行新角色添加。如需添加，要先撤销掉前一个角色，再添加新角色。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("用户管理权限系统设计一定要简单清晰")]),v._v(" "),t("br"),v._v("\n在设计权限系统之处，一定要理清思路，一切从简，能不增加的多余角色和权限逻辑，就一定不要增加。因为随着公司业务的扩大，权限和角色也会随之增多，如果初期设计思路不严谨，那么权限系统会随着业务的扩大而无限混乱下去，此时再来整理权限，已经太晚了。所以初期设计就一定要条理清晰，简单明了，能避免后续非常多不必要的麻烦。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("无权提示页")]),v._v(" "),t("br"),v._v("\n有时员工 A 会直接给员工 B 分享他当下正在操作的页面，但有可能员工 B 无权查看。此时我们应该在这里考虑添加「无权提示页」，避免粗暴的 404 页面让员工 B 以为是系统出错了。")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);