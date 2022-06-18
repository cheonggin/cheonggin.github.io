<template>
  <div>
    <h4 class="module-title">
      <Xicons
        icon="LayoutGrid"
        text="分类"
        textColor="#2c3e50"
        iconColor="#2c3e50"
      />
    </h4>
    <ul class="category-wrapper">
      <li
        class="category-item"
        v-for="([categoryName, value], index) in categories"
        :key="index"
      >
        <router-link class="category-link" :to="`/category/${categoryName}`">
          <span class="text">{{ categoryName }}</span>
          <span class="num">{{ value.items.length }}</span>
        </router-link>
      </li>
    </ul>

    <h4 class="module-title">
      <Xicons icon="Tag" text="标签" textColor="#2c3e50" iconColor="#2c3e50" />
    </h4>
    <ul class="tag-wrapper">
      <li
        class="tag-item"
        v-for="([tagName, value], index) in tags"
        :key="index"
        :style="{ borderColor: createOneColor() }"
      >
        <router-link class="tag-link" :to="`/tag/${tagName}`">
          {{ tagName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCategoryMap } from '@theme-hope/module/blog/composables'
import { useTagMap } from '@theme-hope/module/blog/composables'
import { createOneColor } from '../utils'

const categoryMap = useCategoryMap()
const categories = Object.entries(categoryMap.value.map)
const tagMap = useTagMap()
const tags = Object.entries(tagMap.value.map)
</script>

<style scoped lang="scss">
.module-title {
  @apply mt-4 mb-2 pt-0;
}
.category-wrapper {
  @apply list-none pl-0;
  .category-item {
    @apply mb-4 rounded cursor-pointer border-brand border-2 border-solid;
    .category-link {
      @apply flex justify-between px-4 py-1.5;
      .text {
        @apply mr-1 text-xs leading-5 text-text-light;
      }
      .num {
        @apply inline-block h-5 px-2 bg-brand rounded text-white text-xs leading-5;
      }
    }
    &:hover {
      @apply bg-brand-light;
      .category-link {
        .text {
          @apply text-white;
        }
        .num {
          @apply text-white;
        }
      }
    }
  }
}
.tag-wrapper {
  @apply list-none pl-0;
  .tag-item {
    @apply inline-block mr-2 mb-2 rounded cursor-pointer border-2 border-solid;
    .tag-link {
      @apply flex justify-between px-2 py-0.5 leading-none text-xs;
    }
    &:hover {
      @apply bg-brand-light text-white;
      .tag-link {
        @apply text-white;
      }
    }
  }
}
</style>
