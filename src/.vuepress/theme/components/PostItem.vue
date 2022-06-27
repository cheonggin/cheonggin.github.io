<template>
  <div class="post-item-container">
    <div v-if="!!isSticky" class="sticky">
      <Xicons icon="ArrowBigUpLine" class="sticky-icon" />
    </div>
    <div class="title">
      <RouterLink :to="data.path">{{ data.title }}</RouterLink>
    </div>
    <div class="abstract" v-html="data.excerpt"></div>
    <PageInfo :page-data="data" :hide-valine-views="true"></PageInfo>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import PageInfo from './PageInfo.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const isSticky = computed(() => props.data.frontmatter?.sticky)
</script>

<style>
.post-item-container {
  position: relative;

  .sticky {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-color: transparent #4954e6 transparent transparent;
    border-style: solid;
    border-width: 0 40px 40px 0;

    &-icon {
      position: absolute;
      top: 0;
      right: -42px;
      color: #fff;
    }
  }
}
</style>
