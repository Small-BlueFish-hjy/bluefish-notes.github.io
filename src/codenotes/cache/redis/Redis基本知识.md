---
# 当前页面内容标题
title: Redis基本知识
# 当前页面图标
icon: like
# 分类
category:
  - 目录
  - 导航
# 标签
tag:
  - 目录
  - 导航
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
---

# Redis详解

------

## 

### Redis的启动方式

> 启动一个，进入到redis中的src目录下 在控制台输入指令：**redis-server**（注意：这样启动默认端口是6379）
>
> 进入客户端输入：**redis-cli**



## 1. redis的数据结构：

![image-20231021085147165](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021085147165.png)



​	redis存储的是：key,value格式的数据，其中key都是字符串，value有5种不同的数据结构

​		value的数据结构：

​			1）字符串类型 string

​			2）哈希类型 hash ：map格式

​			3）列表类型 list ：linkedlist

​			4）集合类型 set ：不允许重复元素

​			5）有序集合类型 sortedset ：不允许重复元素，且元素有顺序

## 2. 命令操作

![image-20231021093114713](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021093114713.png)



![image-20231021105324001](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021105324001.png)

![image-20231021104453027](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021104453027.png)



![image-20231021111029044](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021111029044.png)

解决方案：

![image-20231021111131359](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021111131359.png)



		1. 字符串类型 string

* 存储：set key value

  ![image-20230805084350149](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20230805084350149.png)

* 获取：get key

  ![image-20230805084425091](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20230805084425091.png)

* 删除：del key

  ![image-20230805084453901](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20230805084453901.png)

### 2. 哈希类型 hash

![image-20231021163707329](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021163707329.png)

![image-20231021163743721](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021163743721.png)



* 存储：hset key field value

  ![image-20230805085244575](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20230805085244575.png)

* 获取：hget key field 或者 hgetall key（获取所有的field和value）

  ![image-20230805085312991](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20230805085312991.png)

* 删除：hdel key field

  ![image-20230805085431616](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20230805085431616.png)

### 3. 列表类型 list：可以添加元素到列表的头部 （左边）或者尾部（右边）【注：允许添加重复元素】

![image-20231021162958428](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021162958428.png)

![image-20231021163056316](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021163056316.png)

![image-20231021163633817](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021163633817.png)

* 添加：





* lpush key value1 [value2...] ：将元素加入到列表左边

* rpush key value1 [value2...] ：将元素加入到列表右边

* 获取：

* lrange key start end：范围获取（注：-1表示到结尾）

* 删除：

    * lpop key：删除列表最左边的元素，并将元素返回

    * rpop key：删除列表最右边的元素，并将元素返回



### 4. 集合类型 set：不允许重复元素且元素无序

![image-20231021163939324](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021163939324.png)

![image-20231021164230077](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021164230077.png)

![image-20231021164256978](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021164256978.png)

	* 存储：sadd key value
	* 获取：smembers key：获取set集合中所有元素
	* 删除：srem key value：删除set集合中的某个元素

### 5. 有序集合类型 sortedset：不允许重复元素，且元素有序

![image-20231021164601907](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021164601907.png)

![image-20231021165004196](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021165004196.png)



	* 存储：zadd key score value
	* 获取：zrange key start end
	* 删除：zren key value



## 3. 通用命令

1. keys *：查询所有的键
2. type key：获取键对应的value的类型
3. del key：删除指定的key value

## 4. 持久化

​	**概念**：redis是一个内存数据库，当redis服务器重启，获取电脑重启，数据会丢失，我们可以将redis内存中的数据持久化保存到硬盘的文件中。

​	**持久化机制：**

1. RDB：默认方式，不需要进行配置，默认就使用这种机制

   ​			**在一定的间隔时间中，检测key的变化情况，然后持久化数据**

   ​	编辑redis.conf文件



2. AOF：日志记录的方式，可以记录每一条命令的操作。可以每一次命令操作后，持久化数据

    1. 编辑redis.conf文件

       appendonly no（默认关闭）- - - > appendonly yes（开启aof）

       appendfsync always：每一次操作都进行持久化

       appendfsync everysec：每隔一秒进行一次持久化

       appendfsync no：不进行持久化

## 5. Java客户端（Jedis）

![image-20231021165548417](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231021165548417.png)



* Jedis：一款java操作redis数据库的工具
* 使用步骤：
    * 下载jedis的jar包
    * 使用

![image-20231022214250917](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231022214250917.png)

```xml
<!-- jedis -->
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>3.8.0</version>
</dependency>
```

```java
public class JedisTest {

    private Jedis jedis;

    @BeforeEach
    void setUp() {
        // 1. 建立连接
        jedis = new Jedis("192.168.200.130",6379);
        // 2. 设置密码
        jedis.auth("123456");
        // 3. 选择库
        jedis.select(0);
    }

    @Test
    void testString() {
        // 存入数据
        String result = jedis.set("name", "哈哈");
        System.out.println("result=" + result);
        // 获取数据
        String name = jedis.get("name");
        System.out.println("name=" + name);
    }

    @Test
    void testHash() {
        // 插入hash数据
        jedis.hset("user:1","name","Mick");
        jedis.hset("user:1","age","21");

        // 获取
        Map<String, String> map = jedis.hgetAll("user:1");
        System.out.println(map);
    }

    @AfterEach
    void tearDown() {
        if (jedis != null) {
            jedis.close();
        }
    }
}
```





**jedis连接池：JedisPool**

![image-20231022214443522](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231022214443522.png)

* 使用：

    1. 创建JedisPool连接池对象

       ```java
       public class JedisConnectionFactory {
           private static final JedisPool jedisPool;
       
           static {
               // 配置连接池
               JedisPoolConfig poolConfig = new JedisPoolConfig();
               poolConfig.setMaxTotal(8);
               poolConfig.setMaxIdle(8);
               poolConfig.setMinIdle(0);
               poolConfig.setMaxWaitMillis(1000);
               // 创建连接池对象
               jedisPool = new JedisPool(poolConfig,
                           "192.168.200.130", 6379, 1000, "123456");
       
           }
       
           public static Jedis getJedis() {
               return jedisPool.getResource();
           }
       
       }
       ```

    2. 调用方法获取Jedis连接

       ```java
       public class JedisTest {
       
           private Jedis jedis;
       
           @BeforeEach
           void setUp() {
               // 1. 建立连接
               jedis = JedisConnectionFactory.getJedis();
               // 2. 设置密码
               jedis.auth("123456");
               // 3. 选择库
               jedis.select(0);
           }
       
           @Test
           void testString() {
               // 存入数据
               String result = jedis.set("name", "哈哈");
               System.out.println("result=" + result);
               // 获取数据
               String name = jedis.get("name");
               System.out.println("name=" + name);
           }
       
           @Test
           void testHash() {
               // 插入hash数据
               jedis.hset("user:1","name","Mick");
               jedis.hset("user:1","age","21");
       
               // 获取
               Map<String, String> map = jedis.hgetAll("user:1");
               System.out.println(map);
           }
       
           @AfterEach
           void tearDown() {
               if (jedis != null) {
                   jedis.close();
               }
           }
       }
       ```



### 6. SpringDataRedis

![image-20231022222733742](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231022222733742.png)



![image-20231022222946043](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231022222946043.png)



![image-20231022223017198](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231022223017198.png)

![image-20231022223600256](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231022223600256.png)

![image-20231022223622227](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231022223622227.png)





## 实战篇（黑马点评）

![image-20240220090710048](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220090710048.png)



![image-20240220105654493](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220105654493.png)





### 什么是缓存

> 缓存就是数据交换的缓冲区（称作Cache），是存贮数据的临时地方，一般读写性能较高

![image-20240220112941067](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220112941067.png)

![image-20240220113026197](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220113026197.png)

![image-20240220120644908](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220120644908.png)



![image-20240220153315456](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220153315456.png)

![image-20240220175353590](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220175353590.png)

![image-20240220175711424](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220175711424.png)

> 方案一出现不一致的情况

线程一执行删除缓存

![image-20240220180357318](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220180357318.png)

这时，线程2来查询数据，执行了2、3

![image-20240220180531405](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220180531405.png)

这时，线程1终于执行到了更新数据库操作，最终缓存与数据库中的数据不一致

![image-20240220180639521](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220180639521.png)



> 方案2出现数据不一致的情况

![image-20240220180019894](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220180019894.png)





![image-20240220180037153](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240220180037153.png)











![image-20231102212816465](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231102212816465.png)

![](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231102212816465.png)

![image-20231102212855715](https://gitee.com/huang-jintong/csdn-blog-gallery/raw/master/img/image-20231102212855715.png)



```
id: number;
    username: string;
    userAccount: string;
    avatarUrl: string;
    gender: string;
    phone: string;
    email: string;
    userStatus: number;
    userRole: number;
    createTime: Date;
```

## Redis的基本使用



### 一.redis的使用

> 1. 配置redis信息（redis的host、port、possword...）

> 2. 引入redis依赖（比如：redis Template依赖，当然也可以是其他的）

> 3. 编写redis的工具类

> 4. 利用工具类使用redis

> ==注意:==如果不是新项目，那么别人可能已经配好了的，直接`ctrl+shift+r`，全局搜索redis（参考别人的代码，是如何使用的）**[这个技能特别重要]**



### 二、项目中使用redis的地方

1. 自定义注解，需要把校验信息存储到redis中
2. 一些经常使用的数据，在项目启动的时候就从数据库里加载到redis中
3. 验证码、token信息加载到redis中





![image-20240219232150449](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240219232150449.png)

