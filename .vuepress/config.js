module.exports = {
  title: "清玄剑阁",
  description: '专注于高效的代码',
  dest: 'public',
  base: '/StudyNotes/',
  head: [
    ['link', { rel: 'icon', href: '/xuaner.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          // moment 时间格式化文档戳这里 http://momentjs.cn/
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    ["sitemap", {
      "hostname": "https://kirigayakazima.github.io", // 替换成你的 GitHub 地址
      "exclude": ['/404.html'],
      "dateFormatter": time => {
        return time
      }
    }],
    ['@vuepress/medium-zoom',{
        selector: ".page img",
        options: {
          margin: 16,
        background: "#202124de",
        scrollOffset: 0
        }
    }],
    ["nest", {
      // 更多配置项以及配置项说明上 https://github.com/vxhly/vuepress-plugin-nest 查看
      "color": "255,0,255",
      "count": 100,
      "opacity": 0.7
    }],

  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Docs',
        icon: 'reco-message',
        items: [
          { text: 'vuepress-reco', link: '/blogs/' }
        ]
      },
      { text: 'Contact',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/kirigayakazima', icon: 'reco-github' }
        ]
      }
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    friendLink: [
      // {
      //   title: '午后南杂',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: '1156743527@qq.com',
      //   link: 'https://www.recoluan.com'
      // },
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //   avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   link: 'https://vuepress-theme-reco.recoluan.com'
      // },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'kirigayakazima',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2019',
    sidebar: 'auto'//在所有页面中启用自动生成侧栏
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}
