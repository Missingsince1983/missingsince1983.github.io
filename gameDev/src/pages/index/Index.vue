<template>
  <welcome-module />
</template>

<script lang="ts">
import WelcomeModule from 'src/modules/welcomeModule/WelcomeModule.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',
  components: { WelcomeModule },
  setup () {
    return { }
  }
})
</script>
