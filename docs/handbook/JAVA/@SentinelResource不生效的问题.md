# @SentinelResource使用过程中遇到的问题

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.3.2.RELEASE</version>
        <relativePath/>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.cyq.springcloud</groupId>
    <artifactId>sentinel-demo</artifactId>
    <version>1.0-SNAPSHOT</version>


    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>com.alibaba.csp</groupId>
            <artifactId>sentinel-core</artifactId>
            <version>1.8.0</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.18</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba.csp</groupId>
            <artifactId>sentinel-annotation-aspectj</artifactId>
            <version>1.8.0</version>
        </dependency>
    </dependencies>

</project>
```



```java
package com.cyq.sentinelnew.controller;

import com.alibaba.csp.sentinel.Entry;
import com.alibaba.csp.sentinel.SphU;
import com.alibaba.csp.sentinel.Tracer;
import com.alibaba.csp.sentinel.annotation.SentinelResource;
import com.alibaba.csp.sentinel.slots.block.BlockException;
import com.alibaba.csp.sentinel.slots.block.RuleConstant;
import com.alibaba.csp.sentinel.slots.block.flow.FlowRule;
import com.alibaba.csp.sentinel.slots.block.flow.FlowRuleManager;
import com.cyq.sentinelnew.pojo.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;


@RestController
@Slf4j
public class HelloController {

    private static final String RESOURCE_NAME = "hello";
    private static final String USER_RESOURCE_NAME = "user";
    private static final String DEGRADE_RESOURCE_NAME = "degrade";


    // 进行sentinel流控
    @RequestMapping("/hello")
    public String hello() {
        Entry entry = null;
        try {
            entry = SphU.entry(RESOURCE_NAME);
            String str = "Hello World!";
            log.info("===={}====", str);
            return str;
        } catch (BlockException e) {
            log.info("block");
            return "被限流了";
        } catch (Exception e) {
            Tracer.traceEntry(e, entry);
        } finally {
            if (entry != null) {
                entry.exit();
            }
        }
        return null;
    }

    @GetMapping("user")
    @SentinelResource(value = USER_RESOURCE_NAME, blockHandler = "blockHandlerForGetUser", fallback = "fallbackForGetUser")
    public User getUser(String id) {
        int i = 2/0;
        return new User("正常");
    }

    /**
     * 限流
     * @param id
     * @param ex
     * @return
     */
    public User blockHandlerForGetUser(String id, BlockException ex) {
        ex.printStackTrace();
        return new User("限流");
    }


    /**
     * 服务熔断降级处理，函数签名与原函数一致或加一个 Throwable 类型的参数
     * @param id
     * @param throwable
     * @return
     */
    public User fallbackForGetUser(String id, Throwable throwable) {
        throwable.printStackTrace();
        return new User("降级");
    }


    @PostConstruct
    private static void initFlowRules() {
        // 流控规则
        List<FlowRule> rules = new ArrayList<>();

//        // 流控
//        FlowRule rule = new FlowRule();
//        // 为哪个资源进行流控
//        rule.setResource(RESOURCE_NAME);
//        // 设置流控规则 QPS
//        rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
//        // 设置受保护的资源阈值
//        rule.setCount(1);
//        rules.add(rule);


        // 流控
        FlowRule rule2 = new FlowRule();
        // 为哪个资源进行流控
        rule2.setResource(USER_RESOURCE_NAME);
        // 设置流控规则 QPS
        rule2.setGrade(RuleConstant.FLOW_GRADE_QPS);
        // 设置受保护的资源阈值
        rule2.setCount(1);
        rules.add(rule2);

        // 加载配置好的规则
        FlowRuleManager.loadRules(rules);
    }


}


```



在上述代码中遇到了一个问题，注解形式的限流没有生效，纯代码形式的生效了。

开始判断可能是限流方法写的不对，比如返回值，入参有不一样。仔细对比后没发现异常

后面判断可能是没有进行代理，因为注解是通过动态代理来实现的，后面再启动类添加了@EnableAspectJAutoProxy重启后还是没有生效。后面在网上找到了答案。



在SpringBoot和Spring项目中，需要通过配置的方式将sentinelResourceAspect注册成一个bean才能使注解生效。

```java
@Configuration
public class SentinelAspectConfiguration {
 
    @Bean
    public SentinelResourceAspect sentinelResourceAspect() {
        return new SentinelResourceAspect();
    }
}
```
