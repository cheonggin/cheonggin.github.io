import { defineUserConfig } from 'vuepress'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { commentPlugin } from 'vuepress-plugin-comment2'
import { pwaPlugin } from 'vuepress-plugin-pwa2'
import { feedPlugin } from 'vuepress-plugin-feed2'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { localTheme } from './theme'

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Gin's blog",
  description: "Gin's blog",
  dest: 'dist',
  shouldPrefetch: false,
  theme: localTheme({
    author: 'Gin',
    logo: 'https://img.zhanggin.work/avatar.jpg',
    authorAvatar: 'https://img.zhanggin.work/avatar.jpg',
    autoAddCategoryToNavbar: true,
    lastUpdatedText: '最后更新时间为：'
  }),
  plugins: [
    copyCodePlugin({
      selector: '.theme-reco-default-content div[class*="language-"] pre',
      showInMobile: true
    }),
    commentPlugin({ provider: 'Waline', serverURL: 'valine.zhanggin.work' }),
    pwaPlugin({}),
    feedPlugin({ hostname: 'https://www.zhanggin.work/', rss: true }),
    sitemapPlugin({ hostname: 'https://www.zhanggin.work/' })
  ]
})
