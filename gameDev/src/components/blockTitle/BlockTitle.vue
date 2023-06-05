<template>
  <h2
    class="block-title"
  >
    {{ text }}
  </h2>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import './style.scss'
import { useController } from './controller'

export default defineComponent({
  name: 'BlockTitle',
  props: {
    text: { type: String, required: true }
  },
  setup () {
    const { CurrentColorTheme } = useController()
    return {
      CurrentColorTheme
    }
  }
})
</script>
