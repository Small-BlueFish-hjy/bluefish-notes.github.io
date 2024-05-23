---
# 当前页面内容标题
title: Java基础-数据类型
# 当前页面图标
icon: write
# 分类
category:
  - Java
# 标签
tag:
  - Java
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: true
# 是否将该文章添加至时间线中
timeline: true
---

## 基本数据类型

> Java中有8种基本数据类型：
>
> 1. 6种数字类型：byte、short、int、long、float、double
> 2. 1种字符类型：char
> 3. 1种布尔型：boolean

* 它们的默认值和占用的空间

| 基本类型 | 位数 | 字节 | 默认值  |
| -------- | ---- | ---- | ------- |
| int      | 32   | 4    | 0       |
| short    | 16   | 2    | 0       |
| long     | 64   | 8    | 0L      |
| byte     | 8    | 1    | 0       |
| char     | 16   | 2    | 'u0000' |
| float    | 32   | 4    | 0f      |
| double   | 64   | 8    | 0d      |
| boolean  | 1    |      | false   |

==注：==

1. 对于`boolean`，官方文档未明确定义，依赖于JVM厂商的具体实现

2. `long`类型的数据需要加上L/l，否则将被作为整型处理
3. char:单引号   String:双引号

## 包装类型

分别为：`Byte`、`Short`、`Integer`、`Long`、`Float`、`Double`、`Character`、`Boolean`

### 1. 基本类型和包装类型的区别

* **作用**：除了定义一些常量和局部变量，对象属性中很少使用基本类型，并且包装类型可用于泛型
* **存储方式**：基本类型的局部变量存放在栈中，基本类型的成员变量（没有被static修饰）存放在Java堆中。包装类型属于对象类型，几乎所有的对象实例存在于堆中
* **占用空间**：两者对比，基本类型数据占用的空间往往非常小
* **默认值**：包装类型默认值是`null`
* **比较方式**：对于基本数据类型来说，== 比较的是值。对于包装数据类型来说，== 比较的是对象的内存地址。所有整型包装类对象之间值的比较，全部使用 equals() 方法。

### 2. 包装类型的常量池技术

`Byte`,`Short`,`Integer`,`Long` 这 4 种包装类默认创建了数值 [-128，127] 的相应类型的缓存数据，`Character` 创建了数值在[0,127]范围的缓存数据，`Boolean` 直接返回 True Or False。

> Integer i1=40 会发生装箱，等价于 Integer i1=Integer.valueOf(40) 。因此，i1 直接使用的是常量池中的对象。而Integer i2 = new Integer(40) 会直接创建新的对象。两者i1==i2是false

![image-20240307213614482](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240307213614482.png)

### 3. 为什么需要包装类型

* 有些业务场景，需要某对象的某些属性没有赋值，为null
* 泛型参数不能是基本类型【因为基本类型不是`Object`子类】
* 包装类是对象类型，可以调用方法

### 4. 基本类型与包装类之间的自动拆装箱

```java
Integer i = 10; //装箱
int j = i; //拆箱
```

> 其实，装箱就是调用了包装类的`valueOf()`方法，拆箱就是调用了`xxxValue()`方法
>
> 因此，上方的代码：
>
> Integer i = 10，即Integer i = Integer.valueOf(10);
>
> int j = i，即int j = i.intValue(); 

### 5. 自动拆箱引发的NPE问题

在《阿里巴巴开发手册》上就有这样的规定：

![image-20240307214411353](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240307214411353.png)

**举个例子**

```java
@Test
    void test(){
        int i = getNum();
    }
    public Integer getNum(){
        return null;
    }
```

![image-20240307215159513](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240307215159513.png)

> 这是因为方法getNum()返回的值为`null`，null无法调用方法

**另外一个经典的例子**: 三目运算符使用不当导致NPE异常

```java
public class Main {
    public static void main(String[] args) {
        Integer i = null;
        Boolean flag = false;
        System.out.println(flag ? 0 : i);
    }
}
```

>flag ? 0 : i 这行代码中，0 是基本数据类型 int，返回数据的时候 i 会被强制拆箱成 int 类型，由于 i 的值是 null，因此就抛出了 NPE 异常。

**正确写法**

```java
Integer i = null;
Boolean flag = false;
System.out.println(flag ? new Integer(0) : i);
```

![image-20240307215924097](https://blog-img-store1.oss-cn-guangzhou.aliyuncs.com/img/image-20240307215924097.png)

