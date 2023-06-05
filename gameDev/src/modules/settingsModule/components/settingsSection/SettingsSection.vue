<template>
  <div class="settings-section">
    <slot />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'SettingsSection',
  components: { },
  setup () {
    return {}
  }
})
</script>
