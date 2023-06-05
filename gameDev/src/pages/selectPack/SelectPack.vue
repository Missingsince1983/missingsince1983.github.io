<template>
  <screen>
    <select-pack-module />
  </screen>
</template>

<script lang="ts">
import Screen from 'src/components/screen/Screen.vue'
import { defineComponent } from 'vue'
import SelectPackModule from '../../modules/selectPackModule/SelectPackModule.vue'

export default defineComponent({
  name: 'PageSelectPack',
  components: { Screen, SelectPackModule },
  setup () {
    return { }
  }
})
</script>
