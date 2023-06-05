<template>
  <div class="modal">
    <div class="modal__bg" />
    <div class="modal__wrapper">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'Modal',
  props: {

  },
  setup () {
    return {
    }
  }
})
</script>
