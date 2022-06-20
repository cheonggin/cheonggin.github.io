<template>
  <div class="page-info">
    <div class="item">
      <Xicons icon="User"></Xicons>
      <ul>
        <li v-for="(item, index) in config.author" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>

    <div class="item">
      <Xicons
        v-if="config.localizedDate"
        icon="Clock"
        :text="config.localizedDate"
      ></Xicons>
    </div>

    <div class="item">
      <Xicons v-if="config.category.length" icon="LayoutGrid"></Xicons>
      <ul>
        <li
          v-for="({ name, path }, index) in config.category"
          :key="index"
          @click="$router.push(path)"
        >
          {{ name }}
        </li>
      </ul>
    </div>

    <div class="item">
      <Xicons v-if="config.tag.length" icon="Tag"></Xicons>
      <ul>
        <li
          v-for="({ name, path }, index) in config.tag"
          :key="index"
          @click="$router.push(path)"
        >
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { PropType } from 'vue'
import type { PageInfo } from 'vuepress-theme-hope'

const props = defineProps({
  items: {
    type: [Array, Boolean] as PropType<PageInfo[] | false>,
    default: (): PageInfo[] => [
      'Author',
      'Original',
      'Date',
      'Category',
      'Tag',
      'ReadingTime'
    ]
  },

  config: {
    type: Object as PropType<PageInfoProps>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.page-info {
  @apply flex flex-wrap;
  align-items: center;
  margin-top: 0.5rem;

  .item {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    &:not(:last-child) {
      @apply mr-5;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;

    li {
      cursor: pointer;

      &:hover {
        @apply text-brand;
      }

      &:not(:last-child) {
        @apply mr-2;
      }
    }
  }
}
</style>
