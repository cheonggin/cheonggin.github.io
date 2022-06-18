<template>
  <a :class="['icon-container', iconPosition]" :href="link">
    <component v-if="icon" :style="iconStyle" :is="icons[icon]" />

    <span v-if="!!text || $slots.default" :style="textStyle">
      <slot>{{ text }}</slot>
    </span>
  </a>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import * as icons from '@vicons/tabler'

import type { Component } from 'vue'

enum EIconPosition {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom'
}

type PropsType = {
  icon: Component
  iconPosition: keyof typeof EIconPosition
  iconSize: number | string
  iconColor: string
  text: string
  textSize: number | string
  textColor: string
  link: string
}

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  iconPosition: {
    type: String,
    default: 'left'
  },
  iconSize: {
    type: [String, Number],
    default: 18
  },
  iconColor: {
    type: String,
    default: 'inherit'
  },
  text: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: 'inherit'
  },
  textSize: {
    type: [String, Number],
    default: '14'
  },
  link: {
    type: String,
    default: 'javascript:void(0)'
  }
})

const { icon, iconSize, iconColor, textColor, textSize } = toRefs(props)

const iconStyle = computed(() => {
  return {
    color: iconColor.value,
    width: `${iconSize.value}px`,
    height: `${iconSize.value}px`,
    fontSize: `${iconSize.value}px`
  }
})

const textStyle = computed(() => {
  return { color: textColor.value, fontSize: `${textSize.value}px` }
})
</script>

<style lang="scss" scoped>
.icon-container {
  @apply inline-flex;
  &.left {
    @apply flex-row items-center;
    > svg {
      @apply mr-1.5;
    }
  }
  &.right {
    @apply flex-row-reverse items-center;
    > span {
      @apply mr-1.5;
    }
  }
  &.top {
    @apply flex-col items-center;
    > span {
      @apply mt-1.5;
    }
  }
  &.bottom {
    @apply flex-col-reverse items-center;
    > span {
      @apply mb-1.5;
    }
  }
}
</style>
