(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{463:function(a,s,v){"use strict";v.r(s);var t=v(2),_=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("ol",[s("li",[s("p",[a._v("注意一下公司项目中的一些全局的事情.")])]),a._v(" "),s("li",[s("p",[a._v("接口有没有幂等设计")])]),a._v(" "),s("li",[s("p",[a._v("公司用的是什么消息队列, 为什么用RabbitMQ?")]),a._v(" "),s("h3",{attrs:{id:"redis为什么快"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis为什么快"}},[a._v("#")]),a._v(" Redis为什么快")])]),a._v(" "),s("li",[s("p",[a._v("基于内存 why? 内存距离CPU近")])]),a._v(" "),s("li",[s("p",[a._v("IO多路复用 what?? 简单解释一下:")]),a._v(" "),s("p",[a._v("正常:每个客户端和服务端连接,每个连接都需要一个线程\n优化: 维护线程消耗资源, 想办法减少new线程\n因为不是每个连接时时刻刻都有数据的, 优化一下,一个线程监控多个io(socket)连接")])]),a._v(" "),s("li",[s("p",[a._v("单线程 减少上下文切换")]),a._v(" "),s("p",[a._v("一个cpu同时只能执行一个A线程的任务(任务有进度,有背景,线程的信息)\n过一会又去执行另外一个B线程的任务, 不通线程都需要去抢CPU的资源(也就是CPU的执行时间(时间片))")])])]),a._v(" "),s("h3",{attrs:{id:"redis基于内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis基于内存"}},[a._v("#")]),a._v(" redis基于内存")]),a._v(" "),s("p",[a._v("内存的空间是不是都很宝贵?所以我们是不是得考虑怎么节约redis内存资源?")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("过期删除:")]),a._v(" "),s("ul",[s("li",[a._v("redis的key一般都有个过期时间, 那过期的数据怎么删除?")]),a._v(" "),s("li",[a._v("1000W个key每个key都有过期时间?你怎么删除?")]),a._v(" "),s("li",[a._v("大量数据的过期删除怎么做?考虑性能 考虑及时性")])]),a._v(" "),s("p",[a._v("redis的机制:随机部分抽查 + 惰性删除?查出来发现过期了再给他删除")])]),a._v(" "),s("li",[s("p",[a._v("内存淘汰:内存空间优先 满了怎么办? 默认LRU算法 最近最少使用")])])]),a._v(" "),s("h3",{attrs:{id:"内存的数据一旦重启-会不会丢失-1000w的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存的数据一旦重启-会不会丢失-1000w的数据"}},[a._v("#")]),a._v(" 内存的数据一旦重启 会不会丢失?1000W的数据?")]),a._v(" "),s("p",[a._v("全部备份 不合适 太慢\n只记最新数据的变化 也不行 因为不全\nRDB: 全量备份\nAOF: 增量备份 AOF记录redis命令 文件太多太大了怎么办?AOF重写(比如只记计算结果,如key:+1-1+10+10+1, 变成key:+1,减少了内存消耗)\n什么时候重写? 无非就是说AOF文件太大了, 按命令条数?按文件大小?\nRedis主从怎么同步? 先同步RDB文件, 然后再同步AOF")]),a._v(" "),s("h3",{attrs:{id:"分布式锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[a._v("#")]),a._v(" 分布式锁:")]),a._v(" "),s("p",[a._v("java里面常用的集合有哪些?\nmap,list,set\nredis里面的数据长啥样?\nredis数据结构? 其实本质上就是一个非常大的基于内存的HashMap\nredis基本数据结构其实说的是它的value的数据结构:string,list,hash,set,zset")]),a._v(" "),s("ul",[s("li",[a._v("什么是锁?\n"),s("ul",[s("li",[a._v("保证同一时间只有一个线程能操作共享资源")])])]),a._v(" "),s("li",[a._v("什么是分布式锁?\n"),s("ul",[s("li",[a._v("分布式环境下 保证同一时间只有一个节点的线程能操作共享资源换")])])]),a._v(" "),s("li",[a._v("redis分布式锁:\n"),s("ul",[s("li",[a._v("mysql能不能做?\n"),s("ul",[s("li",[a._v("给一个字段设置唯一索引 并发插入只有一个能成功")])])]),a._v(" "),s("li",[a._v("zookeeper能不能做? 临时顺序节点")]),a._v(" "),s("li",[a._v("为什么大家都用redis分布式锁?\n"),s("ul",[s("li",[a._v("首先是快")]),a._v(" "),s("li",[a._v("redission框架出来的时间较早 功能比较完善 先入为主")])])])])])]),a._v(" "),s("h3",{attrs:{id:"数据结构-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据结构-原理"}},[a._v("#")]),a._v(" 数据结构 原理")]),a._v(" "),s("p",[a._v("SET NX (SET IF NOT EXISTS)\n如果不存在就赋值,存在就不赋值\nredis单线程的\nSET NX(123) a 谁成功谁拿到锁(这个锁只是一个抽象概念)\nSET NX(123) b\nSET NX(123) c\n大家约定好, 谁赋值成功就算拿到了锁\nredis分布式锁的一些原理和底层数据结构\na上了锁\nb来解锁, 你觉得可以吗? 不可以? 那你怎么知道b是b?\n你怎么知道来的人是谁?\nthread.id(随机的 避免重复)\nhash结构 两层hash map\n第一层 key 业务key 比如 skuCode  比如 订单id\n第二层 key threadId+uuid 防止别人偷鸡\nvalue是什么? 锁的重入次数0\nredis锁会遇到哪些问题?\n看门狗 watchDog\n默认30秒过期 每隔10秒会去续约一次")]),a._v(" "),s("h3",{attrs:{id:"隔离级别有哪几种"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别有哪几种"}},[a._v("#")]),a._v(" 隔离级别有哪几种?")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("  1. 读未提交:脏读\n  2. 读已提交:不可重复读\n  3. 可重复读(默认):幻读\n  4. 序列化:慢\n")])])]),s("h3",{attrs:{id:"mvcc-多版本并发控制-支持数据并发修改场景下的快照读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvcc-多版本并发控制-支持数据并发修改场景下的快照读"}},[a._v("#")]),a._v(" MVCC 多版本并发控制(支持数据并发修改场景下的快照读):")]),a._v(" "),s("p",[a._v("(每个事物开启后修改数据都会生成undolog版本链条)\n1. undolog:版本链最新的数据节点 有事务id\n2. read view: 最小事务id 当前活跃事务列表 最大事务id+1 当前事务")]),a._v(" "),s("h2",{attrs:{id:"索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[a._v("#")]),a._v(" 索引")]),a._v(" "),s("p",[a._v("B+树(一般来说千万级别的数据也就三层, 阿里的代码规范500万分库分表(大概数值)\n矮胖:减少io, 树每往下翻一层, 都会进行一次磁盘io\n数据都在叶子结点用双向链表连接 支持范围查询)")]),a._v(" "),s("h3",{attrs:{id:"聚簇索引和普通索引的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引和普通索引的区别"}},[a._v("#")]),a._v(" 聚簇索引和普通索引的区别")]),a._v(" "),s("ol",[s("li",[a._v("聚簇索引(主键索引):叶子结点挂的是所有数据")]),a._v(" "),s("li",[a._v("普通索引:叶子结点挂的是主键id(如果没有主键id? mysql默认生成)")])]),a._v(" "),s("h3",{attrs:{id:"索引覆盖是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引覆盖是什么"}},[a._v("#")]),a._v(" 索引覆盖是什么?")]),a._v(" "),s("p",[a._v("是一个现象\n首先他是普通联合索引 年龄+成绩\n有几个B+树? 一个\n普通节点: 年龄+成绩\n叶子节点: 主键id\nselect age, num from xx where age = 18\n查询的数据正好是联合索引中的字段")]),a._v(" "),s("h3",{attrs:{id:"回表是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回表是什么"}},[a._v("#")]),a._v(" 回表是什么?")]),a._v(" "),s("p",[a._v("是一个动作\n普通联合索引 查询的主键id, 根据主键id去查询聚簇索引")]),a._v(" "),s("h3",{attrs:{id:"索引下推"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引下推"}},[a._v("#")]),a._v(" 索引下推")]),a._v(" "),s("p",[a._v("这是mysql5.6的优化,尽量能用索引就用索引,毕竟比全表查询快")]),a._v(" "),s("h3",{attrs:{id:"mysql锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql锁"}},[a._v("#")]),a._v(" mysql锁")]),a._v(" "),s("blockquote",[s("p",[a._v("update where age = xx?\n人家问你 这条sql锁的是表还是行数据?")])]),a._v(" "),s("p",[a._v("这时候需要问清楚:什么引擎? 这个列有没有索引? myisam:表锁, innoDB:age是索引锁行 不是索引锁表")]),a._v(" "),s("blockquote",[s("p",[a._v("如果where是id, id是主键")])]),a._v(" "),s("p",[a._v("答: 锁行, 因为主键默认有索引\n表锁:\n行锁: innoDB特有: 索引 行锁 锁的是索引")])])}),[],!1,null,null,null);s.default=_.exports}}]);