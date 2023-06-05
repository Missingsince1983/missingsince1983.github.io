<template>
  <screen>
    <game-create-module />
  </screen>
</template>

<script lang="ts">
import Screen from 'src/components/screen/Screen.vue'
import GameCreateModule from 'src/modules/gameCreateModule/GameCreateModule.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GameCreate',
  components: { Screen, GameCreateModule },
  setup () {
    return { }
  }
})
</script>
