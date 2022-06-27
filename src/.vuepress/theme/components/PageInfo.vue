<template>
  <div v-if="showPageInfo" class="page-info">
    <Xicons v-if="!!author" icon="User" :text="author" />
    <Xicons v-if="!!date" icon="Clock" :text="date" />
    <Xicons v-if="!!categories && categories.length > 0" icon="LayoutGrid">
      <RouterLink
        v-for="(category, index) in categories"
        :key="index"
        :class="['category', { active: currentCategory === category }]"
        :to="`/categories/${convertToPinyin(category)}/1/`"
        >{{ category }}</RouterLink
      >
    </Xicons>
    <Xicons v-if="!!tags && tags.length > 0" icon="Tag">
      <RouterLink
        v-for="(tag, index) in tags"
        :key="index"
        :class="['tag', { active: currentTag === tag }]"
        :to="`/tags/${convertToPinyin(tag)}/1/`"
        >{{ tag }}</RouterLink
      >
    </Xicons>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/lib/client'
import { convertToPinyin } from '@vuepress-reco/shared'

const props = defineProps({
  pageData: {
    type: Object,
    default: () => ({})
  },
  currentCategory: {
    type: String,
    default: ''
  },
  currentTag: {
    type: String,
    default: ''
  }
})

const { pageData } = toRefs(props)
const themeData = useThemeLocaleData()
const author = computed(
  () => pageData?.value?.frontmatter?.author || themeData.value.author || ''
)

const date = computed(() => {
  return pageData?.value?.date || ''
})

const categories = computed(
  () => pageData?.value?.frontmatter?.categories || []
)

const tags = computed(() => pageData?.value?.frontmatter?.tags || [])

const showPageInfo = computed(
  () =>
    !!author.value ||
    !!date.value ||
    !!(categories.value && categories.value.length > 0) ||
    !!(tags.value && tags.value.length > 0)
)
</script>
