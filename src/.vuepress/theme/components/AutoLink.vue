<template>
  <RouterLink
    v-if="renderRouterLink"
    :to="config.link"
    :class="['nav-link', { active: isActive }]"
    :aria-label="linkAriaLabel"
    v-bind="$attrs"
    @focusout="onFocusout"
  >
    <slot name="before" />
    <Xicons
      :icon="config.icon"
      :text="config.text"
      icon-size="20"
      text-size="14"
    />
    <slot name="after" />
  </RouterLink>

  <a
    v-else
    class="nav-link"
    :href="config.link"
    :rel="anchorRel"
    :target="linkTarget"
    :aria-label="linkAriaLabel"
    v-bind="$attrs"
  >
    <slot name="before" />
    <Xicons
      :icon="config.icon"
      :text="config.text"
      icon-size="20"
      text-size="14"
    />
    <ExternalLinkIcon v-if="externalLinkIcon" />
    <slot name="after" />
  </a>
</template>

<script setup lang="ts">
import { computed, resolveComponent, toRef } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useSiteData } from '@vuepress/client'
import { ExternalLinkIcon } from '@vuepress/plugin-external-link-icon/lib/client'
import { isLinkHttp, isLinkMailto, isLinkTel } from '@vuepress/shared'
import type { PropType } from 'vue'
import type { AutoLink } from 'vuepress-theme-hope'

const route = useRoute()
const site = useSiteData()

const props = defineProps({
  config: {
    type: Object as PropType<AutoLink>,
    required: true
  },
  exact: Boolean,
  externalLinkIcon: {
    type: Boolean,
    default: true
  }
})

const emits = defineEmits(['focusout'])

const onFocusout = () => emits('focusout')

// if the link has http protocol
const hasHttpProtocol = computed(() => isLinkHttp(props.config.link))

// if the link has non-http protocol
const hasNonHttpProtocal = computed(
  () => isLinkMailto(props.config.link) || isLinkTel(props.config.link)
)

// if the `target` attr is '_blank'
const isBlankTarget = computed(() => linkTarget.value === '_blank')

// resolve the `target` attr
const linkTarget = computed(() =>
  hasNonHttpProtocal.value
    ? undefined
    : props.config.target || (hasHttpProtocol.value ? '_blank' : undefined)
)

// resolve the `rel` attr
const anchorRel = computed(() =>
  hasNonHttpProtocal.value
    ? undefined
    : props.config.rel ||
      (isBlankTarget.value ? 'noopener noreferrer' : undefined)
)

// resolve the `aria-label` attr
const linkAriaLabel = computed(
  () => props.config.ariaLabel || props.config.text
)

// render `<RouterLink>` or not
const renderRouterLink = computed(
  () =>
    !hasHttpProtocol.value && !hasNonHttpProtocal.value && !isBlankTarget.value
)

// should be active when current route is a subpath of this link
const shouldBeActiveInSubpath = computed(() => {
  // should not be active in `exact` mode
  if (props.exact) return false

  const localeKeys = Object.keys(site.value.locales)

  return localeKeys.length
    ? // check all the locales
      localeKeys.every(key => key !== props.config.link)
    : // check root
      props.config.link !== '/'
})

// if this link is active
const isActive = computed(() =>
  renderRouterLink.value
    ? props.config.activeMatch
      ? new RegExp(props.config.value.activeMatch).test(route.path)
      : // if this link is active in subpath
      !shouldBeActiveInSubpath.value
      ? route.path === props.config.link
      : route.path.startsWith(props.config.link)
    : false
)
</script>

<style scoped></style>
