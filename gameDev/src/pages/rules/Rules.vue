<template>
  <screen>
    <rules-module />
  </screen>
</template>

<script lang="ts">
import Screen from 'src/components/screen/Screen.vue'
import RulesModule from 'src/modules/rulesModule/RulesModule.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageRules',
  components: { Screen, RulesModule },
  setup () {
    return { }
  }
})
</script>
