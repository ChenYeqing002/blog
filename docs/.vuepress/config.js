module.exports = {
  title: '陈烨庆的博客',
  description: 'TypeScript4 最新官方文档翻译',
base: '/blog/',
locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
theme: 'reco',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '陈烨庆的博客', 
                items: [
                    { text: 'Gitee', link: 'https://gitee.com/chenyeqing' }
                ]
            }
        ],
subSidebar: 'auto',
        sidebar: [
            {
              title: "JAVA",
              path: '/',
              collapsable: false, // 不折叠
              children: [
                { title: "231111锁", path: "/handbook/JAVA/231111锁" },
                { title: "JVM基础", path: "/handbook/JAVA/JVM基础" },
                { title: "JVM探究", path: "/handbook/JAVA/JVM探究" },
                { title: "多线程", path: "/handbook/JAVA/多线程" },
                { title: "集合源码", path: "/handbook/JAVA/集合源码" },
                { title: "垃圾回收(回收对象)", path: "/handbook/JAVA/垃圾回收(回收对象)" },
                { title: "切换日志记录", path: "/handbook/JAVA/切换日志记录" },
                { title: "三级缓存", path: "/handbook/JAVA/三级缓存" },
              ],
            },
            {
              title: "中间件",
              path: '/handbook/中间件/',
              collapsable: false, // 不折叠
              children: [
                { title: "MySQL20231106", path: "/handbook/中间件/MySQL20231106" },
                { title: "Nacos", path: "/handbook/中间件/Nacos" },
                { title: "MySQL调优", path: "/handbook/中间件/MySQL调优" },
                { title: "RabbitMQ", path: "/handbook/中间件/RabbitMQ" }
              ],
            },
            {
              title: "面试",
              path: '/handbook/面试/',
              collapsable: false, // 不折叠
              children: [
                { title: "面试", path: "/handbook/面试/面试" },
                { title: "面试2.0", path: "/handbook/面试/面试2.0" }
              ],
            },
            {
              title: "电脑问题",
              path: '/handbook/电脑问题/',
              collapsable: false, // 不折叠
              children: [
                { title: "在Win11桌面右键直接创建md文件", path: "/handbook/电脑问题/在Win11桌面右键直接创建md文件" }
              ],
            }


          ]
    }
}