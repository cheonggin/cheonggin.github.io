<template>
  <div class="footer-wrapper">
    <span v-if="frontmatter?.footer?.record">
      <Xicons
        icon="ShieldCheck"
        :link="frontmatter?.footer?.recordLink || '#'"
        :text="frontmatter?.footer?.record"
      />
    </span>
    <span>
      <Xicons icon="Copyright">
        <a v-if="themeLocal.author">{{ themeLocal.author }}</a
        >&nbsp;&nbsp;
        <a
          v-if="
            frontmatter?.footer?.startYear &&
            frontmatter?.footer?.startYear != new Date().getFullYear()
          "
          >{{ frontmatter?.footer?.startYear }} -
        </a>
        {{ new Date().getFullYear() }}
      </Xicons>
    </span>
    <p class="cyber-security" v-if="frontmatter?.footer?.cyberSecurityRecord">
      <img
        src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png"
        alt=""
      />
      <a :href="frontmatter?.footer?.cyberSecurityLink || '#'">{{
        frontmatter?.footer?.cyberSecurityRecord
      }}</a>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/lib/client'
import { usePageFrontmatter } from '@vuepress/client'

const themeLocal = useThemeLocaleData()
const frontmatter = usePageFrontmatter()
</script>
