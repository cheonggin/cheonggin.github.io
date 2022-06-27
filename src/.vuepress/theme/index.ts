import { path } from '@vuepress/utils'
import { recoTheme } from 'vuepress-theme-reco'
import type { Theme } from 'vuepress'

export const localTheme = (option): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: recoTheme(option),
    alias: {
      './Footer.vue': path.resolve(__dirname, './components/Footer.vue'),
      './PageInfo.vue': path.resolve(__dirname, './components/PageInfo.vue'),
      './Blog.vue': path.resolve(__dirname, './components/Blog.vue'),
      './PostItem.vue': path.resolve(__dirname, './components/PostItem.vue'),
      '../components/Page.vue': path.resolve(
        __dirname,
        './components/Page.vue'
      ),
      './NavbarLinks.vue': path.resolve(
        __dirname,
        './components/NavbarLinks.vue'
      )
    }
  }
}
