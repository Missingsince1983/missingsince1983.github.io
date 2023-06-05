<template>
  <screen>
    <game-betting-module />
  </screen>
</template>

<script lang="ts">
import Screen from 'src/components/screen/Screen.vue'
import GameBettingModule from 'src/modules/gameBettingModule/GameBettingModule.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GameBetting',
  components: { Screen, GameBettingModule },
  setup () {
    return { }
  }
})
</script>
