---
# 当前页面内容标题
title: Mysql常见日志及其作用
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

### 				Mysql日志：常见的日志有哪些及作用

### 1. 常见的日志类型分类：【针对于InnoDB存储引擎】

* **错误日志（error log）**：记录了Mysql的启动、运行、关闭过程
* **二进制日志（binary log）**：主要记录更改数据库数据的SQL语句
* **一般查询日志（general query log）**：已建立连接的客户端发送给Mysql服务器的所有SQL记录，SQL量比较大，默认关闭，不建议开启
* **慢查询日志（slow query log）**：执行时间超过`long_query_time`秒钟的查询，排查解决SQL慢查询问题有用
* **事务日志（redo log和undo log）**：redo log是重做日志，undo log是回滚日志
* **中续日志（redo log）**：elay log 是复制过程中产生的日志，很多方面都跟 binary log 差不多。不过，relay log 针对的是主从复制中的从库。
* **DDL 日志(metadata log)** ：DDL 语句执行的元数据操作。