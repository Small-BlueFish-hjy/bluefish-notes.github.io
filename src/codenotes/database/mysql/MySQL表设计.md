---
# 当前页面内容标题
title: MySQL表设计
# 当前页面图标
icon: mysql
# 分类
category:
  - 数据库
  - 关系型数据库Mysql
# 标签
tag:
  - 数据库
  - Mysql
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

## MySQL表设计

### 1. 规范

**命名尽量见名知意**

> 1. 表名：customers、orders
>
> 2. 字段名：customer_id、order_date
> 3. 索引名：idx_customer_id

==tips：==

* 表名、字段名必须使用小写字母，禁止使用数字开头、禁止使用拼音，并且一般不使用英文缩写
* 主键索引名为pk_字段名, 唯一索引名为uk_字段名， 普通索引名为idx_字段名

### 2. 选择合适的字段类型

* 根据数据类型选择字段类型：
    * 整数：INT 或 BIGINT
    * 浮点型：FLOAT 或 DOUBLE
    * 字符型：VARCHAR 或 CHAR
* 考虑数据长度
    * 若某个字段的数据长度不超过20，则可以使用CHAR(10)代替VARCHAR(50),以节省空间

* 注意精度和小数位数：对于需要精确数值计算的字段（如货币和百分比），一个选择带有精度和小数位数的字段类型（如 DECIMAL）
* 考虑数据完整性



### 3. 主键设计要合理

使用自增的id，保持主键的连续性，比如说可以使用优化的雪花id等等。



### 4. 选择合适的字段长度

![image-20240313095223250](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240313095223250.png)



### 5. 优先考虑逻辑是删除，而不是物理删除

![image-20240313095329951](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240313095329951.png)



### 6. 每个表都需要添加通用字段

![image-20240313095520892](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240313095520892.png)



### 7. 一张表的字段不宜过多

![image-20240313095655916](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240313095655916.png)



### 8. 定义字段尽量not null

![image-20240313095747458](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240313095747458.png)



### 9. 合理添加索引

![image-20240313095901838](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240313095901838.png)

![image-20240313095956275](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240313095956275.png)

![image-20240313100046432](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240313100046432.png)


