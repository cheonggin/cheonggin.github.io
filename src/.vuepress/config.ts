import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { localTheme } from './theme'
import type { HopeThemeOptions } from 'vuepress-theme-hope'

export default defineUserConfig({
  lang: 'zh-CN',
  title: "Gin's blog",
  description: "Gin's blog",
  dest: 'dist',
  shouldPrefetch: false,
  theme: localTheme({
    hostname: 'https://www.zhanggin.work/',
    author: 'Gin',
    logo: 'https://img.zhanggin.work/avatar.jpg',
    sidebar: 'heading',
    sidebarIcon: false,
    darkmode: 'disable',
    editLink: false,
    navbar: [
      { text: '主页', link: '/' },
      { text: '分类', link: '/category' },
      { text: '标签', link: '/tag' },
      { text: '时间轴', link: '/timeline' }
    ],
    navbarLayout: {
      left: ['Brand'],
      center: [],
      right: ['Search', 'Links']
    },
    blog: {
      description: '一直在努力成为一个不需要努力也能幸福的人',
      socialLinks: [
        { icon: 'MailForward', link: 'mailto:215129113@qq.com' },
        { icon: 'BrandGithub', link: 'https://github.com/zhanggin' }
      ]
    },
    plugins: {
      blog: true,
      comment: {
        provider: 'Waline',
        serverURL: 'valine.zhanggin.work'
      }
    }
  } as HopeThemeOptions),
  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')]
        }
      }
    }
  })
})
