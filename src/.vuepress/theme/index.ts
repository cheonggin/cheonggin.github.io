import { hopeTheme } from 'vuepress-theme-hope'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { pwaPlugin } from 'vuepress-plugin-pwa2'
import type { HopeThemeOptions } from 'vuepress-theme-hope'
import type { Theme } from 'vuepress'

export const localTheme = (options: HopeThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: hopeTheme(options),
    alias: {
      '@theme-hope/components/AutoLink': path.resolve(
        __dirname,
        './components/AutoLink.vue'
      ),
      '@theme-hope/module/blog/components/BlogHero': path.resolve(
        __dirname,
        './components/BlogHero.vue'
      ),
      '@theme-hope/module/blog/components/BloggerInfo': path.resolve(
        __dirname,
        './components/BloggerInfo.vue'
      ),
      '@theme-hope/module/blog/components/InfoList': path.resolve(
        __dirname,
        './components/InfoList.vue'
      ),
      '@theme-hope/module/info/components/PageInfo': path.resolve(
        __dirname,
        './components/PageInfo.vue'
      ),
      '@theme-hope/module/blog/components/ArticleList': path.resolve(
        __dirname,
        './components/ArticleList.vue'
      ),
      '@theme-hope/module/blog/components/ArticleItem': path.resolve(
        __dirname,
        './components/ArticleItem.vue'
      )
    },
    plugins: [
      registerComponentsPlugin({
        components: {
          Xicons: path.resolve(__dirname, './components/Xicons.vue')
        }
      }),
      searchPlugin({ hotKeys: [{ key: 'meta' }, { key: 'k' }] }),
      copyCodePlugin({
        selector: '.theme-container div[class*="language-"] pre',
        showInMobile: true
      }),
      pwaPlugin({})
    ]
  }
}
