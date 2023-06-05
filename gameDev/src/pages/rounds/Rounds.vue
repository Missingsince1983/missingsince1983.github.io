<template>
  <screen>
    <rounds-module />
  </screen>
</template>

<script lang="ts">
import Screen from 'src/components/screen/Screen.vue'

import { defineComponent } from 'vue'
import RoundsModule from '../../modules/roundsModule/RoundsModule.vue'

export default defineComponent({
  name: 'PageRounds',
  components: { Screen, RoundsModule },
  setup () {
    return { }
  }
})
</script>
