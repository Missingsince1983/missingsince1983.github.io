<template>
  <h3 class="block-subtitle">
    {{ text }}
  </h3>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useController } from './controller'
import './style.scss'

export default defineComponent({
  name: 'BlockSubtitle',
  props: {
    text: { type: String, required: true }
  },
  setup() {
    const { CurrentColorTheme } = useController()
    return {
      CurrentColorTheme
    }
  }
})
</script>
