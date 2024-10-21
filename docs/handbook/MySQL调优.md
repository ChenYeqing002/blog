## MySQL调优



### 架构

读写分离

主从

分库分表

缓存 双写一致性

java数据结构



### 硬件

内存 建议32G, 至少大于16G, buffer pool(75%):加载数据页

Cpu

MySQL版本

MySQL连接数  CPU的核心数*2 + 1(固态硬盘)

固态硬盘还可以+1



### SQL

##### 平时注意的点

SELECT * 要避免, 用什么查什么字段

不要重复查询, 可以把第一次查询出来的数据存起来, 作为参数传递

limit    主键id是自增类型时可以通过 `where id>10000 limit 20`来优化

update 只更新需要的字段, 而不要全部查出来, 修改对象后再全部更新

日期    datetime  8

            timestamp  4  1970年1月1号 - 2038年, 带小数时占用8位

            date  3

订单状态之类可以用 tinyint 1, enum

可以确定长度的字符可以用char(), 比如手机号

对于一些用for循环单挑插入的数据用批量插入语法



### 系统配置

redolog 刷盘策略`innodb_flush_log_trx_commit`

- 1秒刷盘一次

- commit一次刷盘一次(性能最差)

- 操作系统去进行刷盘

binlog刷盘策略`sync_binlog`

- 代表几次提交binlog就刷盘一次



### 慢SQL

`slow_query_log`是否开启慢sql日志

`long_query_time` 多少时间算慢sql的阈值

`忘记叫什么`有没有走索引

`%slow_query_log%`慢SQL日志文件位置



Explain(SQL执行计划)

Type  system  const  eq_ref  ref  range  index  all(全表扫描)



等值: where xx=xx

主键索引或者唯一索引就是 `const`

普通索引就是`ref`



`eq_ref`是在关联到另一个表的唯一索引时的类型



两个表关联的字段不一样就会出现索引失效





### 索引

最左前缀原则

索引覆盖

索引下推

主键尽量使用自增主键,减少页分裂

长字段使用前缀索引

避免既用ASC, 又用DESC

like可能会索引失效

范围查询应该放到最后(联合索引中范围索引后面都会失效)

or, 左右两边有一个字段没有索引就会导致全表扫描

update 的where条件如果没有索引, 在可重复读隔离级别下会锁表

```mysql
# 查看哪些表被锁着
show open tables where in_use > 0

# 正在执行的事务
select * from information_schema.innodb_trx

```

不要在索引列上做任何操作, 比如 id+1 = 700, 或者 substr(data, 1, 3)='100'






