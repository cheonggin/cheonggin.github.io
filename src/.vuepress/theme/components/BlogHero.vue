<template>
  <section class="banner-wrapper" :style="{ ...bgImageStyle }">
    <div class="hero-content">
      <img
        v-if="heroImage"
        :src="heroImage"
        :style="{
          heroImageStyle
        }"
        alt="heroImage"
      />
      <h1 v-if="frontmatter?.heroText">
        {{ frontmatter?.heroText }}
      </h1>
      <p v-if="frontmatter?.tagline">
        {{ frontmatter?.tagline }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePageFrontmatter, withBase } from '@vuepress/client'

const frontmatter = usePageFrontmatter()

const heroImage = computed(() => {
  return frontmatter.value?.heroImage
    ? withBase(frontmatter.value?.heroImage)
    : null
})

const heroImageStyle = computed(() => frontmatter.value.heroImageStyle || {})

const bgImageStyle = computed(() => {
  const { bgImageStyle, bgImage } = frontmatter.value || {}

  const initBgImageStyle = bgImage
    ? {
        textAlign: 'center',
        overflow: 'hidden',
        background: `url(${withBase(bgImage)}) center/cover no-repeat`
      }
    : {}

  return bgImageStyle
    ? { ...initBgImageStyle, ...bgImageStyle }
    : initBgImageStyle
})
</script>

<style scoped lang="scss">
.banner-wrapper {
  @apply h-screen-3/5 md:h-screen flex justify-center items-center;
  .hero-content {
    img {
      @apply block mx-auto w-32 sm:w-40 md:w-60 mb-16;
    }
    h1 {
      @apply text-center mb-6;
    }
    p {
      @apply text-center;
    }
  }
}
</style>
