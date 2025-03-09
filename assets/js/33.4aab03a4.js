(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{378:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("调度系统就是这样，不能等着最优解自己出现，而是要利用技术，创造最优解！🎯\n")]),t._v(" "),s("h2",{attrs:{id:"背景介绍-📖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍-📖"}},[t._v("#")]),t._v(" 背景介绍 📖")]),t._v(" "),s("p",[t._v("想象一下，你点了一杯奶茶，希望它在30分钟内送到手中，而配送系统仍然在用“接到订单就慢慢计算路线”的方式派单——结果你等了1个小时，奶茶都凉了🥶。")]),t._v(" "),s("p",[t._v("这就是实时调度的魅力——它得快、准、狠，把每个环节的时间掐得死死的。不管是外卖、物流，还是设备管理，实时调度就像个“超级大脑”，得随时知道谁在干啥、啥时候干完、接下来干啥。\n以前我们总觉得“来一条算一条”挺好，但后来发现，时代变了，数据量大了，这种老办法已经跟不上节奏了。")]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"从问题到方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从问题到方案"}},[t._v("#")]),t._v(" 从问题到方案")]),t._v(" "),s("h3",{attrs:{id:"为啥传统办法不行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为啥传统办法不行"}},[t._v("#")]),t._v(" 为啥传统办法不行？")]),t._v(" "),s("p",[t._v("一开始，我们的想法很简单：来一条订单，算一条呗，存到MySQL里，需要啥就查啥，多省事！但现实给了我们一记响亮的耳光。")]),t._v(" "),s("ol",[s("li",[t._v("问题1：数据量大了，MySQL扛不住 💥")])]),t._v(" "),s("p",[t._v("当订单量从几百跳到几万，甚至几十万时，MySQL的查询速度开始“龟速前进”。你想想，查个表还得加锁，算个结果还得扫全表，调度哪还有“实时”可言？")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("问题2：批处理像「延迟邮差」​🐌")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 每小时统计一次的订单看板")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" orders \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" create_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NOW")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTERVAL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HOUR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("问题3：单条计算太“短视” 😫\n假如一个骑手刚送完单，你单独算这条订单，可能觉得他闲着。但其实他下一秒就被另一单占了，这种“只看眼前”的算法根本没法全局优化。")])])]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("逐条计算，无法应对高并发：MySQL等关系型数据库适合存储和查询，但不擅长高吞吐的流式计算。")]),t._v(" "),s("li",[t._v("查询压力大，影响业务性能：直接查MySQL，在大规模并发下，查询会变得缓慢。")]),t._v(" "),s("li",[t._v("缺乏实时性，无法快速决策：调度涉及多个环节，每个环节的延迟都会累积，导致整体调度失效。")])]),t._v(" "),s("blockquote",[s("p",[t._v("​传统架构像「俄罗斯套娃」​业务系统→Redis→MQ→Hive→MySQL，数据流转就像玩击鼓传花，等传到决策层手里，黄花菜都凉了。")])]),t._v(" "),s("p",[t._v("那咋办呢？我们开始找更厉害的工具，这才盯上了Flink和Clickhouse。")]),t._v(" "),s("h3",{attrs:{id:"flink-click"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flink-click"}},[t._v("#")]),t._v(" Flink + Click")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Flink：实时计算的「闪电侠」⚡")])])]),t._v(" "),s("p",[t._v("Flink是个实时流处理的专家，能把数据当成一条“流水线”，边来边算，还能记住历史的“上下文”。比如，它能实时分析设备的位置、订单的紧急程度，瞬间给出最优派单方案。比起传统“攒一堆再算”，Flink简直是“未卜先知”。\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/jorgen-zhao/picGo/blog/flink-application-sources-sinks.png",alt:"flink"}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Clickhouse：分析查询的「快银」💨")])])]),t._v(" "),s("p",[t._v("Clickhouse是个列式数据库，查询速度快得飞起，特别适合那种“给我10分钟内所有订单状态”的需求。MySQL查这个可能要喘口气，Clickhouse直接秒出结果。\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/jorgen-zhao/picGo/blog/column-oriented-d082e49b7743d4ded32c7952bfdb028f.gif",alt:"clickhouse"}})]),t._v(" "),s("h3",{attrs:{id:"对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("​维度")])]),t._v(" "),s("th",[s("strong",[t._v("​传统架构（MySQL）​")])]),t._v(" "),s("th",[s("strong",[t._v("​Flink + ClickHouse")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("​"),s("strong",[t._v("实时性")])]),t._v(" "),s("td",[t._v("秒级~分钟级延迟")]),t._v(" "),s("td",[t._v("毫秒级~秒级延迟")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("strong",[t._v("吞吐量")])]),t._v(" "),s("td",[t._v("单机万级TPS，扩展困难")]),t._v(" "),s("td",[t._v("分布式百万级TPS，线性扩展")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("strong",[t._v("复杂计算支持")])]),t._v(" "),s("td",[t._v("依赖代码实现，难以处理乱序事件/状态管理")]),t._v(" "),s("td",[t._v("内置窗口函数、状态后端、CEP库")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("strong",[t._v("存储成本")])]),t._v(" "),s("td",[t._v("行式存储，压缩率低")]),t._v(" "),s("td",[t._v("列式存储，压缩率高（节省50%+存储空间）")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("strong",[t._v("扩展性")])]),t._v(" "),s("td",[t._v("垂直扩展（硬件升级），分库分表成本高")]),t._v(" "),s("td",[t._v("水平扩展（增加节点），自动分片与负载均衡")])]),t._v(" "),s("tr",[s("td",[t._v("​"),s("strong",[t._v("容错能力")])]),t._v(" "),s("td",[t._v("依赖数据库事务，故障恢复时间长")]),t._v(" "),s("td",[t._v("Checkpoint + 副本机制，秒级故障恢复")])])])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"八大环节的「实时调度交响曲」🎻"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八大环节的「实时调度交响曲」🎻"}},[t._v("#")]),t._v(" 八大环节的「实时调度交响曲」🎻")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/jorgen-zhao/picGo/blog/service.png",alt:"service"}}),t._v("\n调度涉及多个步骤，每一步都要精准计算。")]),t._v(" "),s("p",[t._v("1️⃣ 用户下单")]),t._v(" "),s("p",[t._v("订单数据进入 Flink 流计算，分析订单属性（紧急程度、用户信用等）。")]),t._v(" "),s("p",[t._v("2️⃣ 后台派单")]),t._v(" "),s("p",[t._v("计算最优服务人员，结合历史数据（ClickHouse）+ 实时状态（Flink）。")]),t._v(" "),s("p",[t._v("3️⃣ 操作手确认")]),t._v(" "),s("p",[t._v("实时判断服务人员位置、任务情况，避免重复派单或超载。")]),t._v(" "),s("p",[t._v("4️⃣ 出仓转运")]),t._v(" "),s("p",[t._v("计算最佳路线、运力分配，结合交通流量等数据。")]),t._v(" "),s("p",[t._v("5️⃣ 服务准备")]),t._v(" "),s("p",[t._v("确保工具、设备、人员就绪，减少等待时间。")]),t._v(" "),s("p",[t._v("6️⃣ 地头作业")]),t._v(" "),s("p",[t._v("监控作业进度，防止异常（如设备故障、时间超限等）。")]),t._v(" "),s("p",[t._v("7️⃣ 设备清洗")]),t._v(" "),s("p",[t._v("计算下一个作业地点或回仓需求，优化资源利用率。")]),t._v(" "),s("p",[t._v("8️⃣ 回仓/下一处作业")]),t._v(" "),s("p",[t._v("动态调度，避免不必要的空驶，提升效率。")]),t._v(" "),s("h2",{attrs:{id:"踩坑指南与「真香定律」😅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#踩坑指南与「真香定律」😅"}},[t._v("#")]),t._v(" 踩坑指南与「真香定律」😅")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("乱序数据打脸事件")])])]),t._v(" "),s("p",[t._v("方案：Flink水印机制+EventTime")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WatermarkStrategy")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" strategy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WatermarkStrategy")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forBoundedOutOfOrderness")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ofSeconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withTimestampAssigner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCreateTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[s("strong",[t._v("Flink窗口设置太死板")])])]),t._v(" "),s("p",[t._v("方案：一开始窗口时间设得太长，算出来的结果总是“迟到”。后来我们动态调整窗口大小，根据数据量和延迟需求灵活切换，总算赶上了趟")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[t._v("Clickhouse数据一致性")])])]),t._v(" "),s("p",[t._v("方案：调整分区策略，避免热点查询。")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("strong",[t._v("调度规则复杂，计算逻辑优化困难")])])]),t._v(" "),s("p",[t._v("方案：使用 Flink SQL 提高可读性，减少手写代码的维护成本。")]),t._v(" "),s("h2",{attrs:{id:"风险"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#风险"}},[t._v("#")]),t._v(" 风险")]),t._v(" "),s("ol",[s("li",[t._v("Flink的Checkpoint调优：配置不当可能导致作业恢复时间过长（如大状态作业的RocksDB性能问题）。")]),t._v(" "),s("li",[t._v("​​内存占用：Flink状态后端（如RocksDB）和ClickHouse的索引可能消耗大量内存，需合理分配资源。")]),t._v(" "),s("li",[t._v("​技术栈多样性：同时维护Flink和ClickHouse两套系统，对团队技术栈深度要求较高，需投入额外学习成本。")])]),t._v(" "),s("h2",{attrs:{id:"展望"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#展望"}},[t._v("#")]),t._v(" 展望")]),t._v(" "),s("ol",[s("li",[t._v("Flink：调整Checkpoint间隔与并行度，启用增量Checkpoint减少IO压力。")]),t._v(" "),s("li",[t._v("​架构简化：探索Flink与ClickHouse的深度集成（如Flink直接访问ClickHouse的分布式引擎），减少组件依赖。")]),t._v(" "),s("li",[t._v("冷热数据分离：将历史调度数据从ClickHouse迁移至S3等低成本存储。")])]),t._v(" "),s("h2",{attrs:{id:"结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),s("p",[t._v("调度系统就是这样，不能等着最优解自己出现，而是要利用技术，创造最优解！🎯")])])}),[],!1,null,null,null);s.default=r.exports}}]);