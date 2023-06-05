<template>
  <div class="game-betting-module">
    <block-title :text="`Ожидаются вопросы из категории: ${SelectedCategory?.title}`" />
    <screen-section>
      <block-title text="Время делать ставки" />
      <block-subtitle :text="descriptionText" />
    </screen-section>
    <template v-if="!isFinishedBettings">
      <screen-section>
        <form-button
          text="Да"
          :click-handler="votePros"
        />
      </screen-section>
      <screen-section>
        <form-button
          text="Нет"
          :click-handler="voteCons"
          :is-secondary="true"
        />
      </screen-section>
    </template>
    <screen-section :is-bottom-section="true">
      <form-button
        text="Далее"
        :click-handler="startGameQuestions"
        :is-disabled="!isFinishedBettings"
        :is-secondary="true"
      />
    </screen-section>
  </div>
</template>

<script lang="ts">
import { ScreenSection, BlockTitle, BlockSubtitle, FormButton } from 'src/components'
import { defineComponent } from 'vue'
import { useController } from './controller'
import './style.scss'

export default defineComponent({
  name: 'GameCreateModule',
  components: { ScreenSection, BlockTitle, BlockSubtitle, FormButton },
  setup () {
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
