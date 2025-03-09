(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{376:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("🚀 Flink + ClickHouse：物联网实时数据处理的黄金搭档")]),s._v(" "),t("h2",{attrs:{id:"🌟-背景介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🌟-背景介绍"}},[s._v("#")]),s._v(" 🌟 背景介绍")]),s._v(" "),t("p",[s._v("在物联网（IoT）领域，设备数据源源不断地产生，数据量大、时效性高，如何高效处理、存储并快速查询，成了每个技术团队必须面对的问题。💡")]),s._v(" "),t("p",[s._v("在这片数据的海洋里，我们找到了 Flink + ClickHouse 这对黄金搭档：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Apache Flink")]),s._v("：流处理神器，能实时计算、处理复杂事件。")]),s._v(" "),t("li",[t("strong",[s._v("ClickHouse")]),s._v("：高性能列式数据库，适合高吞吐、实时查询。")])]),s._v(" "),t("p",[s._v("Flink 负责数据流式处理，ClickHouse 负责高效存储和查询。两者结合，能让 IoT 数据处理更丝滑、更高效！🎯")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"🔍-flink-clickhouse-各自的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🔍-flink-clickhouse-各自的特点"}},[s._v("#")]),s._v(" 🔍 Flink & ClickHouse 各自的特点")]),s._v(" "),t("h3",{attrs:{id:"🌊-apache-flink-实时流处理引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🌊-apache-flink-实时流处理引擎"}},[s._v("#")]),s._v(" 🌊 Apache Flink：实时流处理引擎")]),s._v(" "),t("p",[s._v("Flink 是一款分布式流处理框架，专注于低延迟、高吞吐的流式计算。它的主要特点包括：")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("Exactly-once 语义")]),s._v("：保证数据不会重复处理，也不会丢失。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("事件时间（Event Time）支持")]),s._v("：可以基于事件的发生时间而不是系统时间进行计算。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("强大的窗口机制")]),s._v("：支持滚动窗口、滑动窗口、会话窗口等，适用于各种场景。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("状态管理")]),s._v("：高效的状态存储和恢复，适合处理有状态的流计算。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("丰富的连接器")]),s._v("：支持 Kafka、MySQL、ClickHouse、Elasticsearch 等多种数据源和目标。")]),s._v(" "),t("p",[s._v("相比于 "),t("strong",[s._v("Spark Streaming")]),s._v("，Flink 处理真正的流数据，而 Spark Streaming 采用微批（Micro-Batch）模式，延迟较高。")]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"🏆-clickhouse-高性能列式数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🏆-clickhouse-高性能列式数据库"}},[s._v("#")]),s._v(" 🏆 ClickHouse：高性能列式数据库")]),s._v(" "),t("p",[s._v("ClickHouse 是一款专为"),t("strong",[s._v("OLAP")]),s._v("（在线分析处理）优化的列式存储数据库，具备以下优势：")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("列式存储")]),s._v("：数据按列存储，查询时只读取相关列，大幅减少 IO。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("极致压缩")]),s._v("：支持多种高效压缩算法，数据占用更少存储空间。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("MergeTree 引擎")]),s._v("：支持自动数据合并、分区、索引优化，提高查询效率。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("高并发查询")]),s._v("：适合大规模数据分析，查询速度远超传统关系型数据库。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("分布式架构")]),s._v("：可以横向扩展，适用于 PB 级数据存储和查询。")]),s._v(" "),t("p",[s._v("与 "),t("strong",[s._v("Elasticsearch")]),s._v(" 相比，ClickHouse 在结构化数据分析上更快，适用于 BI 和报表查询，而 Elasticsearch 更擅长全文搜索和非结构化数据分析。")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"💡-为什么在物联网领域适用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💡-为什么在物联网领域适用"}},[s._v("#")]),s._v(" 💡 为什么在物联网领域适用？")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("数据量大")]),s._v("：成千上万台设备，每秒成百上千条数据，传统架构扛不住。")]),s._v(" "),t("li",[t("strong",[s._v("数据时效性要求高")]),s._v("：设备状态、异常报警、传感器数据，必须实时处理，不能等！⏳")]),s._v(" "),t("li",[t("strong",[s._v("数据查询需求复杂")]),s._v("：既要支持实时流式计算（Flink），也要支持历史数据分析（ClickHouse）。")])]),s._v(" "),t("p",[s._v("Flink 处理实时数据流，ClickHouse 进行 OLAP 分析，完美适配 IoT 业务需求！🎯")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"⚙️-实现细节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#⚙️-实现细节"}},[s._v("#")]),s._v(" ⚙️ 实现细节")]),s._v(" "),t("p",[s._v("我们来拆解一个典型的数据处理流程：")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("数据源")]),s._v("（IoT 设备）👉 MQTT / Kafka 采集数据")]),s._v(" "),t("li",[t("strong",[s._v("Flink 处理")]),s._v("：\n"),t("ul",[t("li",[s._v("数据清洗（去重、格式化、异常处理）")]),s._v(" "),t("li",[s._v("计算聚合（设备状态、流量统计、告警检测）")])])]),s._v(" "),t("li",[t("strong",[s._v("写入 ClickHouse")]),s._v("：\n"),t("ul",[t("li",[s._v("采用 "),t("strong",[t("code",[s._v("MergeTree")])]),s._v(" 表引擎，提高查询效率")]),s._v(" "),t("li",[s._v("利用 "),t("strong",[t("code",[s._v("Materialized View")])]),s._v(" 预计算，提高响应速度")])])]),s._v(" "),t("li",[t("strong",[s._v("数据查询 & 可视化")]),s._v("：\n"),t("ul",[t("li",[s._v("Grafana / Superset 直接查询 ClickHouse，实时展示设备状态📊")])])])]),s._v(" "),t("p",[s._v("架构示意图：")]),s._v(" "),t("div",{staticClass:"language-plaintext line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plaintext"}},[t("code",[s._v("   +-------------+      +----------+      +-------------+      +------------+\n   |  IoT 设备   | ---\x3e |    MQ    | ---\x3e |   Flink     | ---\x3e | ClickHouse |\n   +-------------+      +----------+      +-------------+      +------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("📊 "),t("strong",[s._v("实测数据")]),s._v("：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("50台机器人")]),s._v("，每秒"),t("strong",[s._v("60条")]),s._v("数据上报")]),s._v(" "),t("li",[t("strong",[s._v("存量数据")]),s._v("约"),t("strong",[s._v("2GB")]),s._v("，大约"),t("strong",[s._v("4亿")]),s._v("条")]),s._v(" "),t("li",[s._v("每条消息"),t("strong",[s._v("0.5KB")]),s._v("，10分钟后能追上消费速度")]),s._v(" "),t("li",[t("strong",[s._v("ClickHouse 开启压缩后，磁盘使用比消息队列减少 3/4")])]),s._v(" "),t("li",[t("strong",[s._v("ClickHouse 结合 S3")]),s._v("，可进一步优化存储，减少磁盘占用，降低成本 💰")])]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"⚠️-flink-clickhouse-结合的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#⚠️-flink-clickhouse-结合的注意事项"}},[s._v("#")]),s._v(" ⚠️ Flink + ClickHouse 结合的注意事项")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("批量写入 ClickHouse")]),s._v("：避免单条插入，使用 "),t("code",[s._v("max_insert_block_size")]),s._v(" 调优。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("数据分区策略")]),s._v("：合理选择分区键，提高查询性能。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("数据聚合")]),s._v("：使用 ClickHouse "),t("code",[s._v("Materialized View")]),s._v(" 预计算，提高查询效率。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("Flink Checkpoint")]),s._v("：确保数据处理的可靠性，防止数据丢失。")]),s._v(" "),t("p",[s._v("✅ "),t("strong",[s._v("ClickHouse 连接池")]),s._v("：优化 "),t("code",[s._v("jdbc:clickhouse")]),s._v(" 连接池，提高吞吐量。")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"✍️-示例代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#✍️-示例代码"}},[s._v("#")]),s._v(" ✍️ 示例代码")]),s._v(" "),t("h3",{attrs:{id:"_1️⃣-flink-消费-kafka-并写入-clickhouse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1️⃣-flink-消费-kafka-并写入-clickhouse"}},[s._v("#")]),s._v(" 1️⃣ Flink 消费 Kafka 并写入 ClickHouse")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StreamExecutionEnvironment")]),s._v(" env "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StreamExecutionEnvironment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getExecutionEnvironment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Properties")]),s._v(" props "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nprops"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bootstrap.servers"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka-broker:9092"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nprops"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setProperty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group.id"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"flink-iot-group"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FlinkKafkaConsumer")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" consumer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FlinkKafkaConsumer")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iot_topic"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SimpleStringSchema")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataStream")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" stream "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addSource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("consumer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataStream")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IoTData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" parsedStream "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" stream"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseIoTData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nparsedStream"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addSink")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClickHouseSink")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jdbc:clickhouse://clickhouse-server:8123/iot_db"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nenv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("execute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IoT Flink to ClickHouse"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h3",{attrs:{id:"_2️⃣-clickhouse-表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2️⃣-clickhouse-表结构"}},[s._v("#")]),s._v(" 2️⃣ ClickHouse 表结构")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" iot_data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    device_id String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    temperature Float32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    humidity Float32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DateTime")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MergeTree"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("device_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("hr"),s._v(" "),t("h2",{attrs:{id:"😆-鲁迅曾说"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#😆-鲁迅曾说"}},[s._v("#")]),s._v(" 😆 鲁迅曾说......")]),s._v(" "),t("blockquote",[t("p",[s._v('"数据如流水，处理需及时。"')])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/jorgen-zhao/picGo/blog/luxun.jpg",alt:"luxun"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);