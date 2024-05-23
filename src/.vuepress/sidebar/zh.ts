import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 代码笔记的侧边栏
  "/codenotes/": [
    {
      text: "Java核心",
      icon: "java",
      collapsible: true,
      prefix: "/codenotes/javacore/",
      children: [
        {
          text: "Java基础-数据类型",
          icon: "write",
          link: "Java基础-数据类型.md",
        },
        {
          text: "Java基础-String类详析",
          icon: "write",
          link: "Java基础-String类详析.md",
        },
        {
          text: "Java基础-面向对象",
          icon: "write",
          link: "Java基础-面向对象.md",
        },
        {
          text: "Java基础-泛型机制",
          icon: "write",
          link: "Java基础-泛型机制.md",
        },
        {
          text: "Java基础-注解机制",
          icon: "write",
          link: "Java基础-注解机制.md",
        },
        {
          text: "Java基础-异常机制",
          icon: "write",
          link: "Java基础-异常机制.md",
        },
        {
          text: "Java基础-反射机制",
          icon: "write",
          link: "Java基础-反射机制.md",
        },
        {
          text: "Java集合-类关系图",
          icon: "write",
          link: "Java集合-类关系图.md",
        },
        {
          text: "Java集合-ArrayList",
          icon: "write",
          link: "Java集合-ArrayList.md",
        },
        {
          text: "Java8新特性",
          icon: "write",
          link: "Java8新特性.md",
        },
        {
          text:"Java中的SPI机制",
          icon:"write",
          link:"Java中的SPI机制.md",
        },
      ]
    },
    {
      text: "Spring框架",
      icon: "engine",
      collapsible: true,
      prefix: "/codenotes/spring/",
      children: [
        ""
      ]
    },
    {
      text: "Java虚拟机",
      icon: "engine",
      collapsible: true,
      prefix: "/codenotes/jvm/",
      children: [
        ""
      ]
    },
    {
      text: "企业级框架",
      icon: "frame",
      collapsible: true,
      prefix: "/codenotes/framework/",
      children: [
        {
          text: "Netty",
          icon: "network",
          collapsible: true,
          prefix: "netty/",
          children: [
            "Netty核心.md",
            "Netty高级.md",
          ],
        },
        {
          text: "Maven",
          icon: "maven",
          collapsible: true,
          prefix: "maven/",
          children: [
            "maven高级.md",
          ],
        },
        {
          text: "spring",
          icon: "spring",
          collapsible: true,
          prefix: "spring/",
          children: [
            "day01.md",
            "day02.md",
            "day03.md",
            "spring整合web.md",
          ],
        },
      ]
    },
    {
      text: "计算机基础",
      icon: "ability",
      collapsible: true,
      prefix: "/codenotes/base/",
      children: [
        {
          text:"计算机网络",
          icon:"like",
          collapsible:true,
          prefix:"internet/",
          children:[

          ],
        },
        {
          text:"操作系统",
          icon:"like",
          collapsible:true,
          prefix:"system/",
          children:[

          ],
        },
        {
          text:"计算机组成原理",
          icon:"like",
          collapsible:true,
          prefix:"principles/",
          children:[

          ],
        },
        {
          text: "计算机系统结构",
          icon: "like",
          collapsible: true,
          prefix: "constructor/",
          children: [],
        }
      ],
    },
    {
      text: "算法和数据结构",
      icon: "ability",
      collapsible: true,
      prefix: "/codenotes/algdata/",
      children: [
        {
          text:"算法小抄",
          icon:"like",
          collapsible:true,
          prefix:"lbld/",
          children:[
            "算法小抄核心套路.md",
            "算法小抄数学运算.md",
            "算法小抄动态规划.md",
            "算法小抄数据结构.md",
            "算法小抄算法思维.md",
            "算法小抄高频面试.md",
          ],
        }
      ],
    },
    {
      text: "数据库",
      icon: "mysql",
      collapsible: true,
      prefix: "/codenotes/database/",
      children: [
        {
          text:"Mysql",
          icon:"like",
          collapsible:true,
          prefix:"mysql/",
          children:[
            "MySQL常见日志及其作用.md",
            "MySQL索引.md",
            "MySQL表设计.md",
            "MySQL规范.md",
          ],
        }
      ],
    },
    {
      text: "缓存",
      icon: "redis",
      collapsible: true,
      prefix: "/codenotes/cache/",
      children: [
        {
          text:"Redis",
          icon:"redis",
          collapsible:true,
          prefix:"redis/",
          children:[
            "开篇.md",
            "Redis三大常见问题.md",
            "Redis基本知识.md",
          ],
        }
      ],
    },
    {
      text: "Linux",
      icon: "linux",
      collapsible: true,
      prefix: "/codenotes/linux/",
      children: [
        {
          text: "目录结构",
          icon: "write",
          link: "目录结构.md",
        },
        {
          text: "Linux常用命令和操作",
          icon: "write",
          link: "常用命令和操作.md",
        },
        {
          text: "shell",
          icon: "shell",
          collapsible: true,
          prefix: "shell/",
          children: [
            "Shell基础知识.md",
          ],
        },
      ],
    },


    {
      text: "开发必备",
      icon: "tool",
      collapsible: true,
      prefix: "/codenotes/devtool/",
      children: [
        ""
      ],
    },
    {
      text: "在线技术文档",
      icon: "read",
      collapsible: true,
      prefix: "/codenotes/cookbook/",
      children: [
        ""
      ],
    }




  ],

  // 浮生杂记的侧边栏
  "/floatinglife/": [
    {
      text: "小镇美食家",
      icon: "linter",
      collapsable: true,
      link: "/floatinglife/cooker/",
    },
    {
      text: "小镇技术宅",
      icon: "computer",
      collapsable: true,
      link: "/floatinglife/iter/",
    },
    {
      text: "小镇运动狂",
      icon: "strong",
      collapsable: true,
      link: "/floatinglife/sporter/",
    },
    {
      text: "小镇思考者",
      icon: "style",
      collapsable: true,
      link: "/floatinglife/thinker/",
    },
  ],

  // 开源项目的侧边栏
  "/projects/": [
    {
      text: "技术教程",
      icon: "guide",
      collapsable: true,
      link: "/projects/techguide/",
    },
    {
      text: "实战项目",
      icon: "workingDirectory",
      collapsable: true,
      link: "/projects/pracprojects/",
    },
    {
      text: "系统设计",
      icon: "shell",
      collapsable: true,
      link: "/projects/systemdesign/",
    },
    {
      text: "工具类库",
      icon: "module",
      collapsable: true,
      link: "/projects/toollibrary/",
    },
  ],
});
