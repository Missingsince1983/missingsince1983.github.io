<template>
  <div class="game-betting-module">
    <navbar title="Время делать ставки!" />
    <div class="game-betting-module__wrapper">
      <block-title :text="`Ожидаются вопросы из категории: ${SelectedCategory?.title}`" />
      <screen-section>
        <block-subtitle :text="descriptionText" />
      </screen-section>
      <template v-if="!isFinishedBettings">
        <screen-section>
          <block-button text="Да" :click-handler="votePros" />
        </screen-section>
        <screen-section>
          <block-button text="Нет" :click-handler="voteCons" />
        </screen-section>
      </template>
      <template v-else>
        <screen-section>
          <block-button text="Далее" :click-handler="startGameQuestions" />
        </screen-section>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { ScreenSection, BlockTitle, BlockSubtitle, BlockButton, Navbar } from 'src/components'
import { defineComponent } from 'vue'
import { useController } from './controller'
import './style.scss'

export default defineComponent({
  name: 'GameCreateModule',
  components: { ScreenSection, BlockTitle, BlockSubtitle, BlockButton, Navbar },
  setup() {
    const {
      voteCons,
      votePros,
      startGameQuestions,
      isFinishedBettings,
      descriptionText,
      SelectedCategory
    } = useController()
    return {
      voteCons,
      votePros,
      startGameQuestions,
      isFinishedBettings,
      descriptionText,
      SelectedCategory
    }
  }
})
</script>
