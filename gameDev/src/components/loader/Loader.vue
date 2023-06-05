<template>
  <div class="loader">
    <div class="loader__text">
      Идет загрузка ....
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'Loader',
  setup () {
    return {
    }
  }
})
</script>
