(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{457:function(_,v,l){"use strict";l.r(v);var i=l(2),a=Object(i.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"_2023-11-06"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2023-11-06"}},[_._v("#")]),_._v(" 2023/11/06")]),_._v(" "),v("h3",{attrs:{id:"事务特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务特性"}},[_._v("#")]),_._v(" 事务特性?")]),_._v(" "),v("p",[_._v("ACID\n原子,一致,隔离,持久")]),_._v(" "),v("h3",{attrs:{id:"事务隔离级别有哪些"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离级别有哪些"}},[_._v("#")]),_._v(" 事务隔离级别有哪些?")]),_._v(" "),v("p",[_._v("RU(读未提交)\nRC(读已提交)\nRR(可重复读)(默认)\nS(序列化)")]),_._v(" "),v("h3",{attrs:{id:"不同隔离级别都有什么问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不同隔离级别都有什么问题"}},[_._v("#")]),_._v(" 不同隔离级别都有什么问题?")]),_._v(" "),v("p",[_._v("脏读:一个事务读取到了另一个事物修改但是没提交的记录\n不可重复读:一个事务读取同一条数据但是前后两次数据不同\n幻读:一个事务新增或删除的记录没有被另一个事务读取\n慢")]),_._v(" "),v("h3",{attrs:{id:"mvcc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvcc"}},[_._v("#")]),_._v(" MVCC")]),_._v(" "),v("p",[_._v("不可重复读:通过MVCC解决\n多版本(一行数据的版本链)并发(场景)控制(读取的结果)")]),_._v(" "),v("p",[_._v("版本链: undolog 和 mysql针对每行数据的隐藏字段trx_id和上个版本的指针")]),_._v(" "),v("p",[_._v("read view:\nmin_id(最小事务):26                     :26\nmax_id(最大事务):全局的下一个事务id         :101\ncur_trx_id(当前事务id)                   :100\nactive_id_list(当前活跃事务列表)           :26,38,75")]),_._v(" "),v("ol",[v("li",[_._v("比最小的小 一定读")]),_._v(" "),v("li",[_._v("比最大的打 一定读")]),_._v(" "),v("li",[_._v("当前事务id 肯定读")]),_._v(" "),v("li",[_._v("看在不在活跃事务列表 在 不读//不在 读")])]),_._v(" "),v("p",[_._v("隔离级别真正的区别不在于过滤的条件,而是在于生成的时机")]),_._v(" "),v("h3",{attrs:{id:"幻读"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#幻读"}},[_._v("#")]),_._v(" 幻读")]),_._v(" "),v("p",[_._v("两次查询数据量不一致\n解决方案: 直接不让他插入\nselect for update next-key-lock间隙锁")]),_._v(" "),v("p",[_._v("mysql解决了(快照读下的)幻读")]),_._v(" "),v("h3",{attrs:{id:"快照读和当前读的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快照读和当前读的区别"}},[_._v("#")]),_._v(" 快照读和当前读的区别")]),_._v(" "),v("h2",{attrs:{id:"mysql基础知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql基础知识"}},[_._v("#")]),_._v(" MySQL基础知识")]),_._v(" "),v("h3",{attrs:{id:"mysql的数据是如何存储在磁盘的-表到底是个什么概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql的数据是如何存储在磁盘的-表到底是个什么概念"}},[_._v("#")]),_._v(" Mysql的数据是如何存储在磁盘的,表到底是个什么概念?")]),_._v(" "),v("p",[_._v("Mysql中的每个数据库都存储为文件系统上的目录, 每个表存储为一个单独文件")]),_._v(" "),v("ul",[v("li",[_._v("逻辑上是表, 物理上是个什么东西?\n"),v("ul",[v("li",[_._v("物理上就是数据页16KB一页")])])]),_._v(" "),v("li",[_._v("行格式\n"),v("ul",[v("li",[_._v("按行记录数据的格式")])])]),_._v(" "),v("li",[_._v("行溢出\n"),v("ul",[v("li",[_._v("一个数据页上限是16k大小,大于这个值就是行溢出")])])]),_._v(" "),v("li",[_._v("数据页\n"),v("ul",[v("li",[_._v("一个数据页上限是16k大小")])])]),_._v(" "),v("li",[_._v("数据区\n"),v("ul",[v("li",[_._v("一张表的大小区域")])])])]),_._v(" "),v("h3",{attrs:{id:"一条更新sql的执行流程-还需要学习一下"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一条更新sql的执行流程-还需要学习一下"}},[_._v("#")]),_._v(" 一条更新sql的执行流程(还需要学习一下)")]),_._v(" "),v("ol",[v("li",[_._v("先建立数据库连接, 然后经过sql解析器, sql优化器, 开始执行sql")]),_._v(" "),v("li",[_._v("先把数据加载到缓存, 更新buffer pool, 然后更新undoLog(写入旧值便于回滚), 再进行事务的两阶段提交")])]),_._v(" "),v("h3",{attrs:{id:"acid特性遗迹实现原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#acid特性遗迹实现原理"}},[_._v("#")]),_._v(" ACID特性遗迹实现原理?")]),_._v(" "),v("ul",[v("li",[_._v("原子性: 事务是不可分割的工作单元, 事务中的操作要么都发生, 要么都不发生. 一部分成功,一部分失败,这时候需要回滚到事务开启前的状态.\n"),v("ul",[v("li",[_._v("实现: 原子性一靠undo log回滚日志实现,每次对数据做修改或者删除插入的操作都会生成一条undo log来记录操作之前的状态, 使用rollback语句就能够将执行成功的语句效果撤销.回滚日志比数据持久化先到硬盘上.回滚是逆向操作")])])]),_._v(" "),v("li",[_._v("一致性: 事务前后数据完整性一直, 一般来说就是数据的逻辑一致性(比如A给B转账, 不管是否成功, 两者的存款总额不变)\n"),v("ul",[v("li",[_._v("实现: 依靠其他三个性质实现, 一致性指的是事务的完整性, 为了保证数据的有意义状态.")])])]),_._v(" "),v("li",[_._v("隔离性: 事务的隔离性是多个用户并发访问数据库时, 数据库为每一个用户开启的事务, 不能被其他事务的操作数据所干扰, 多个并发事务之间要互相隔离.\n"),v("ul",[v("li",[_._v("实现: 通过锁机制实现,当事务操作数据的时候加锁,让事务执行前后看到的数据是一致的,并行执行事务和串行执行事务产生的效果一样.另外就是利用MVCC实现的快照读")])])]),_._v(" "),v("li",[_._v("持久性: 持久性是指一个事务一旦被提交,它对数据库中数据的改变是永久的,接下来即使数据库发生故障也不应该对其有任何影响\n"),v("ul",[v("li",[_._v("实现: 持久性通过redo log重做日志实现, redo log记录的是对数据库的操作. MySQL先把存放在硬盘上的数据加载到内存中,在内存中做修改再刷回磁盘,redo log使得在事务提交的时候将数据刷回磁盘.")])])])]),_._v(" "),v("h3",{attrs:{id:"索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[_._v("#")]),_._v(" 索引")]),_._v(" "),v("p",[_._v("索引的结构?")]),_._v(" "),v("p",[_._v("B+树")]),_._v(" "),v("h6",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[_._v("#")]),_._v(" 特点")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("矮胖")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("层级低,IO次数少")])]),_._v(" "),v("li",[v("p",[_._v("叶子结点形成有序链表,范围查找方便")])]),_._v(" "),v("li",[v("p",[_._v("矮: 减少IO, 树每往下翻一层都会进行一次磁盘IO")])]),_._v(" "),v("li",[v("p",[_._v("胖: 数据都在叶子节点, 用双向链表连接, 支持范围查询")])])])]),_._v(" "),v("li",[v("p",[_._v("叶子节点存储所有数据")]),_._v(" "),v("ul",[v("li",[_._v("降低层高,意味着查询数据可以有效减少磁盘IO")])])]),_._v(" "),v("li",[v("p",[_._v("叶子节点之间通过双向链表互相联结")]),_._v(" "),v("ul",[v("li",[_._v("便于互联网业务的范围查询,顺序查询")])])])]),_._v(" "),v("p",[_._v("索引的分类:")]),_._v(" "),v("ul",[v("li",[_._v("聚簇索引: 主键索引, 通过主键id维护索引树, 叶子节点上挂着所有数据")]),_._v(" "),v("li",[_._v("普通索引: 基本索引类型, 没有什么限制, 允许在定义索引的列中插入重复值和空值, 纯粹为了查询数据更快一些")]),_._v(" "),v("li",[_._v("联合索引: 遵循最左前缀匹配原则, 即最左优先, 查询的时候会优先匹配最左边的索引")]),_._v(" "),v("li",[_._v("唯一索引: 索引列中的值必须是唯一的, 但是允许为空值")])]),_._v(" "),v("p",[_._v("索引原理与SQL优化:")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("什么是索引覆盖?")]),_._v(" "),v("ul",[v("li",[_._v("索引覆盖是一个现象, 在联合索引中, 查询的数据正好是索引的字段, 就是索引覆盖")])])]),_._v(" "),v("li",[v("p",[_._v("什么是回表?")]),_._v(" "),v("ul",[v("li",[_._v("回表是一个动作, 在联合索引中, 查询的数据不包含索引, 就根据联合索引叶子节点上的主键id, 在进行一次聚簇索引, 这个动作就是回表")])])]),_._v(" "),v("li",[v("p",[_._v("什么是索引下推?")]),_._v(" "),v("ul",[v("li",[_._v("在联合索引中, 对索引包含的字段先进行判断, 过滤掉不符合条件的记录, 来减少回表的次数. 总的来说就是能用到索引就用索引, 用到了都比全表查询快")])])]),_._v(" "),v("li",[v("p",[_._v("什么是索引跳跃?")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("8.0版本引入的优化, 在联合索引(a,b)中, 查询语句是where b=xx, 那么就会构造成where a=1 and b=xx union where a=2 and b=xx这样的语句来达到走索引的目的")])]),_._v(" "),v("li",[v("p",[_._v("mysql只是提供了这个机制, 具体的执行会根据他自己的判断进行综合选择")])])])]),_._v(" "),v("li",[v("p",[_._v("什么是索引?")]),_._v(" "),v("ul",[v("li",[_._v("一组排好序的数据结构")])])]),_._v(" "),v("li",[v("p",[_._v("索引失效的情况有几种?")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("第一, 查询从数据结构上根本走不了索引")])]),_._v(" "),v("li",[v("p",[_._v("第二种, MySQL根据自己的判断觉得走不了索引, 就会进行全表扫描")])])])]),_._v(" "),v("li",[v("p",[_._v("慢SQL优化")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("EXPLAIN")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("using where 单纯指代使用了where条件过滤数据")])]),_._v(" "),v("li",[v("p",[_._v("using index condition代表使用索引但是不彻底, 发生了回表")])]),_._v(" "),v("li",[v("p",[_._v("using index 表示索引覆盖")])])])]),_._v(" "),v("li",[v("p",[_._v("数据库层面")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("索引的设计与取舍")])]),_._v(" "),v("li",[v("p",[_._v("索引失效分析 看SQL走不了索引还是优化器自动判断")])]),_._v(" "),v("li",[v("p",[_._v("碎片整理")])])])]),_._v(" "),v("li",[v("p",[_._v("代码层面")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("严禁for循环")])]),_._v(" "),v("li",[v("p",[_._v("连接池参数优化 默认8个")])]),_._v(" "),v("li",[v("p",[_._v("尽量避免联表查询, 都走单表查询性能最高")])])])]),_._v(" "),v("li",[v("p",[_._v("架构层面")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("单库有瓶颈 分库分表")])]),_._v(" "),v("li",[v("p",[_._v("主从 读写分离(读从库必须是对业务实时性要求不严苛的业务)")])]),_._v(" "),v("li",[v("p",[_._v("进一步搜索架构的延伸")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("es宽表")])]),_._v(" "),v("li",[v("p",[_._v("hbase row-key结构的大数据组件")])])])])])])])])]),_._v(" "),v("h3",{attrs:{id:"隔离级别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[_._v("#")]),_._v(" 隔离级别")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("读未提交")]),_._v(" "),v("ul",[v("li",[_._v("脏读: 读到了其他事物没提交的数据")])])]),_._v(" "),v("li",[v("p",[_._v("读已提交")]),_._v(" "),v("ul",[v("li",[_._v("不可重复读: 一次事务中多次读取同一条数据, 读取的数据不一致")])])]),_._v(" "),v("li",[v("p",[_._v("可重复读")]),_._v(" "),v("ul",[v("li",[_._v("幻读: 一次事务中相同的查询语句, 得到的数量不一致")])])]),_._v(" "),v("li",[v("p",[_._v("序列化")]),_._v(" "),v("ul",[v("li",[_._v("慢: 所有事务串行执行")])])])]),_._v(" "),v("h3",{attrs:{id:"mysql的几种日志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql的几种日志"}},[_._v("#")]),_._v(" MySQL的几种日志")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("redoLog: 前滚日志")])]),_._v(" "),v("li",[v("p",[_._v("undoLog: 回滚日志(版本链)")])]),_._v(" "),v("li",[v("p",[_._v("binLog: 二进制日志, 基本记录所有数据的更改")])])]),_._v(" "),v("h3",{attrs:{id:"mvcc-多版本并发控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvcc-多版本并发控制"}},[_._v("#")]),_._v(" MVCC(多版本并发控制)")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("多版本: 版本链")])]),_._v(" "),v("li",[v("p",[_._v("并发: 并发场景下多个线程对一行数据进行读写")])]),_._v(" "),v("li",[v("p",[_._v("控制: 用版本链控制事务读取的结果是哪个版本的数据")])])]),_._v(" "),v("h4",{attrs:{id:"不同的隔离级别中生成read-view的策略不同"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不同的隔离级别中生成read-view的策略不同"}},[_._v("#")]),_._v(" 不同的隔离级别中生成read-view的策略不同")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("读已提交: 每次执行查询sql时都会重新生成新的的read-view")])]),_._v(" "),v("li",[v("p",[_._v("可重复读: 只有第一次查询会生成read-view, 后续都是读取第一次的快照")])])]),_._v(" "),v("h4",{attrs:{id:"作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[_._v("#")]),_._v(" 作用")]),_._v(" "),v("p",[_._v("支持数据并发修改场景下的快照读")]),_._v(" "),v("h4",{attrs:{id:"实现原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[_._v("#")]),_._v(" 实现原理")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("read-view和undoLog记录的数据进行匹配,对的上就去读undoLog记录的最新数据")])]),_._v(" "),v("li",[v("p",[_._v("undoLog版本链: undoLog版本链是指一行数据被多个事务一次修改过后, 在每个事务修改完后,MySQL会保留修改前的数据到undo回滚日志,并且用trx_id(事务id)和roll_pointer(回滚日志)两个隐藏字段把这些undoLog串联起来形成一个历史记录版本链")])]),_._v(" "),v("li",[v("p",[_._v("read-view: 4个标志位")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("min_id: 最小事务id")])]),_._v(" "),v("li",[v("p",[_._v("max_id: 当前最大事务id+1")])]),_._v(" "),v("li",[v("p",[_._v("cur_trx_id: 当前事务")])]),_._v(" "),v("li",[v("p",[_._v("active_ids: 当前活跃事务列表")])])])]),_._v(" "),v("li",[v("p",[_._v("MVCC如何根据read-view结合行数据的undoLog版本链过滤数据?")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("按顺序比较")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("最新的undoLog记录的事务id比read-view中的min_trx_id小, 说明这条undoLog的事务在read-view产生的时候已经被提交了")])]),_._v(" "),v("li",[v("p",[_._v("如果行数据的最新undoLog事务id和当前read-view的cur_trx_id一样,说明是这个事务的, 也可以读")])]),_._v(" "),v("li",[v("p",[_._v("如果undoLog记录的事务id就在活跃列表中, 那也不能读, 因为活跃列表都是还没有提交的事务id")])]),_._v(" "),v("li",[v("p",[_._v("如果行数据的最新undoLog比max_trx_id还大, 说明它是在这个事务之后提交的, 也不能读")])])])]),_._v(" "),v("li",[v("p",[_._v("按照顺序比较下来之后没有合适的, 那就按照undoLog版本链的上一个指针向上找, 重新进行比较, 直到找到一个符合规则的数据")])])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);