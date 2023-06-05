<template>
  <div :class="['screen-section', {'screen-section--bottom': isBottomSection}]">
    <slot />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import './style.scss'

export default defineComponent({
  name: 'ScreenSection',
  props: {
    isBottomSection: { type: Boolean, default: false }
  },
  setup () {
    return {

    }
  }
})
</script>
