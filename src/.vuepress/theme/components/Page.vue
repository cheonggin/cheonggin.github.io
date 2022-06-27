<template>
  <main class="page-container">
    <h1 v-if="!!title" class="page-title">{{ title }}</h1>
    <PageInfo :page-data="pageData" />
    <div class="theme-reco-default-content">
      <Content />
    </div>
    <PageMeta />
    <PageNav />

    <CommentService :darkmode="isDarkMode" />
  </main>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { usePageData } from '@vuepress/client'
import { useRoute } from 'vue-router'
import PageNav from 'vuepress-theme-reco/lib/client/components/PageNav.vue'
import PageMeta from 'vuepress-theme-reco/lib/client/components/PageMeta.vue'
import PageInfo from './PageInfo.vue'

const pageData = usePageData()

const route = useRoute()

const title = computed(
  () => pageData?.value?.frontmatter?.title || pageData?.value?.title || ''
)

const isDarkMode = ref(false)

let observer

onMounted(() => {
  const html = document.querySelector('html') as HTMLElement

  isDarkMode.value = html.classList.contains('dark')

  // watch theme change
  observer = new MutationObserver(() => {
    isDarkMode.value = html.classList.contains('dark')
  })

  observer.observe(html, {
    attributeFilter: ['class'],
    attributes: true
  })
})

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<style lang="scss">
.theme-reco-default-content {
  div[class*='language-'] {
    overflow: initial;
  }
}

.waline-wrapper {
  @apply lg:max-w-screen-md xl:max-w-screen-lg mx-auto px-4;
  @apply md:px-10;
  border-top: 1px solid transparent;
}
</style>
