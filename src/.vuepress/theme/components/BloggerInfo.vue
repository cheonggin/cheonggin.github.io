<template>
  <div class="personal-info-wrapper">
    <img
      class="personal-img"
      v-if="bloggerAvatar"
      :src="$withBase(bloggerAvatar)"
      alt="author-avatar"
    />
    <p class="name" v-if="bloggerName">
      {{ bloggerName }}
    </p>
    <p class="description">{{ blogOptions.description }}</p>

    <!-- 支持 hover 展示文案、图片 -->
    <ul class="social-links">
      <li class="social-item" v-for="(item, index) in socialLinks" :key="index">
        <Xicons
          :icon="item.icon"
          :link="item.link"
          :style="{ color: item.color }"
        />
      </li>
    </ul>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { withBase, usePageFrontmatter, usePageData } from '@vuepress/client'
import {
  useArticles,
  useBlogOptions,
  useCategoryMap,
  useTagMap,
  useTimelines
} from '@theme-hope/module/blog/composables'
import {
  useNavigate,
  useThemeLocaleData,
  useThemeData
} from '@theme-hope/composables'
import { createOneColor } from '../utils'

const themeLocal = useThemeLocaleData()
const frontmatter = usePageFrontmatter()
const blogOptions = useBlogOptions()
const themeConfig = useThemeData()

const bloggerName = computed(
  () => blogOptions.value.name || themeLocal.value.author
)

const bloggerAvatar = computed(
  () => blogOptions.value.avatar || themeLocal.value.logo
)

const socialLinks = computed(() =>
  (themeConfig.value?.blog?.socialLinks || []).map(item => {
    if (!item.color) item.color = createOneColor()
    return item
  })
)
</script>

<style scoped lang="scss">
.personal-info-wrapper {
  .personal-img {
    @apply block mt-8 mb-4 mx-auto w-24 h-24 rounded-1/2;
  }
  .name {
    @apply text-base text-center font-semibold;
  }
  .description {
    font-size: 14px;
    margin: 1rem auto;
    text-align: center;
  }
  .social-links {
    @apply box-border flex flex-wrap p-2;
    .social-item {
      @apply text-center list-none transform transition-transform;
      @apply hover:scale-110;
      width: 39px;
      height: 36px;
      line-height: 36px;
    }
  }
}
</style>
