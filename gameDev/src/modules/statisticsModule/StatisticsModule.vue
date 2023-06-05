<template>
  <div class="statistics-module">
    <navbar
      title="Итоги за раунд:"
      :is-hidden-back="true"
    />
    <screen-section>
      <block-subtitle
        v-for="player in PlayersList"
        :key="player.id"
        :text="`Игрок ${player.name} - ${player.summary}`"
      />
      <block-button
        v-if="isLastRound"
        text="Выйти в меню"
        :click-handler="finishGame"
      />
      <block-button
        v-else
        text="Продолжить игру"
        :click-handler="continueGame"
      />
    </screen-section>
  </div>
</template>

<script lang="ts">
import { ScreenSection, BlockButton, Navbar } from 'src/components'
import { defineComponent } from 'vue'
import BlockSubtitle from '../../components/blockSubtitle/BlockSubtitle.vue'
import { useСontroller } from './controller'
import './style.scss'

export default defineComponent({
  name: 'StatisticsModule',
  components: { ScreenSection, BlockSubtitle, BlockButton, Navbar },
  setup () {
    const {
      PlayersList,
      continueGame,
      finishGame,
      isLastRound
    } = useСontroller()
    return {
      PlayersList,
      continueGame,
      finishGame,
      isLastRound
    }
  }
})
</script>
