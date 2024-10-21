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
                title: '记录一下',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "JAVA",
              path: '/handbook/JVM基础',
              collapsable: false, // 不折叠
              children: [
                { title: "SpringBoot整合Nacos", path: "/handbook/Nacos" },
                { title: "JVM基础", path: "/handbook/JVM基础" },
                { title: "MySQL调优", path: "/handbook/MySQL调优" }
              ],
            },
            {
              title: "中间件",
              path: '/handbook/Nacos',
              collapsable: false, // 不折叠
              children: [
                { title: "SpringBoot整合Nacos", path: "/handbook/Nacos" },
                { title: "JVM基础", path: "/handbook/JVM基础" },
                { title: "MySQL调优", path: "/handbook/MySQL调优" }
              ],
            }

          ]
    }
}