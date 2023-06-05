<template>
  <div class="cover">
    <slot />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

import './style.scss'

export default defineComponent({
  name: 'Cover',
  setup () {
    return {

    }
  }
})
</script>
