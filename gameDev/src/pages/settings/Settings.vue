<template>
  <screen>
    <settings-module />
  </screen>
</template>

<script lang="ts">
import Screen from 'src/components/screen/Screen.vue'
import SettingsModule from 'src/modules/settingsModule/SettingsModule.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageSettings',
  components: { Screen, SettingsModule },
  setup () {
    return { }
  }
})
</script>
