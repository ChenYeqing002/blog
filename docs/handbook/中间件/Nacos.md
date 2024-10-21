## 记录 SpringBoot 整合 Nacos

### 0、启动 nacos

### 1、引入依赖
> 引入这个版本依赖的时候启动有报错, 应该是版本不兼容, 后面把springboot的版本从2.4.5降到2.3.9.RELEASE就可以了, 但是 RabbitMQ 相关的编译就有错误了,暂时不处理
```xml
<dependency>
    <groupId>com.alibaba.boot</groupId>
    <artifactId>nacos-config-spring-boot-starter</artifactId>
    <version>0.2.7</version>
</dependency>
```


### 2、启用类上使用配置 @NacosPropertySource(dataId = "cyqblog", autoRefreshed = true, type = ConfigType.YAML)

- dataId 配置文件的名字
- groupId 默认就是 DEFAULT_GROUP
- autoRefreshed 是否实时更新，true:是；false:否
- type 可以指定nacos配置文件的类型。


### 3、配置文件中配置nacos信息

     创建application.properties,并写入nacos配置信息：
```yaml
nacos:
  config:
    server-addr: 127.0.0.1:8848
```

### 4、启动

测试后发现相同配置, 读取的是 本地dev.yml的配置, 比如 8888端口