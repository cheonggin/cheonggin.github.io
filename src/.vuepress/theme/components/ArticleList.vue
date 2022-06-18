<template>
  <div id="article-list" class="article-wrapper" v-if="currentArticles.length">
    <ArticleItem
      v-for="({ info, path }, index) in currentArticles"
      :key="path"
      :info="info"
      :path="path"
    ></ArticleItem>
    <Pagination
      :currentPage="currentPage"
      :perPage="articlePerPage"
      :total="items.length"
      :onUpdateCurrentPage="updatePage"
    ></Pagination>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import ArticleItem from '@theme-hope/module/blog/components/ArticleItem'
import Pagination from '@theme-hope/module/blog/components/Pagination'
import DropTransition from '@theme-hope/components/transitions/DropTransition'
import { useBlogOptions } from '@theme-hope/module/blog/composables'

import type { PropType } from 'vue'

const props = defineProps({
  items: {
    type: Array as PropType<{ path: string; info: ArticleInfo }[]>,
    default: () => []
  }
})
const route = useRoute()
const router = useRouter()
const blogOptions = useBlogOptions()

const currentPage = ref(1)

const articlePerPage = computed(() => blogOptions.value.articlePerPage || 10)

const currentArticles = computed(() =>
  props.items.slice(
    (currentPage.value - 1) * articlePerPage.value,
    currentPage.value * articlePerPage.value
  )
)

const updatePage = (page: number): void => {
  currentPage.value = page

  const query = { ...route.query }

  if (query['page'] === page.toString() || (page === 1 && !query['page']))
    return
  if (page === 1) delete query['page']
  else query['page'] = page.toString()

  void router.push({ path: route.path, query })
}

watch(currentPage, () => {
  // list top border distance
  const distance =
    (document.querySelector('#article-list') as Element).getBoundingClientRect()
      .top + window.scrollY

  setTimeout(() => {
    window.scrollTo(0, distance)
  }, 100)
})

onMounted(() => {
  const { page } = route.query

  updatePage(page ? Number(page) : 1)
})
</script>

<style scoped></style>
