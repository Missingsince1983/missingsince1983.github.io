<template>
  <screen
    :has-no-back-button="true"
    :has-visible-rounds="true"
  >
    <statistics-module />
  </screen>
</template>

<script lang="ts">
import Screen from 'src/components/screen/Screen.vue'
import { defineComponent } from 'vue'
import StatisticsModule from '../../modules/statisticsModule/StatisticsModule.vue'

export default defineComponent({
  name: 'PageStatistics',
  components: { Screen, StatisticsModule },
  setup () {
    return { }
  }
})
</script>
