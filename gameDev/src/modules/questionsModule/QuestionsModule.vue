<template>
  <div class="questions-module">
    <navbar
      :title="`Отвечает игрок ${ActivePlayer?.name}`"
      :is-hidden-back="true"
      :bg-color="ActivePlayer?.color"
    />
    <screen-section>
      <block-title :text="ActiveQuestion?.text ?? 'Вопрос не найден'" />
      <form-button
        v-if="!isAnswerShown"
        text="Показать ответ"
        :click-handler="showAnswer"
      />
      <block-subtitle
        v-if="isAnswerShown"
        :text="ActiveQuestion?.answer ?? 'Ответ не найден'"
      />
    </screen-section>
    <screen-section v-if="isAnswerShown">
      <block-subtitle :text="`Игрок ${ActivePlayer?.name} правильно ответил на вопрос?`" />
      <screen-section>
        <form-button
          text="Да"
          :click-handler="rightAnswerHandler"
        />
      </screen-section>

      <form-button
        text="Нет"
        :click-handler="wrongAnswerHandler"
        :is-secondary="true"
      />
    </screen-section>
  </div>
</template>

<script lang="ts">
import { ScreenSection, BlockTitle, FormButton, Navbar } from 'src/components'
import { defineComponent } from 'vue'
import BlockSubtitle from '../../components/blockSubtitle/BlockSubtitle.vue'
import { useСontroller } from './controller'
import './style.scss'

export default defineComponent({
  name: 'QuestionsModule',
  components: { ScreenSection, BlockTitle, BlockSubtitle, FormButton, Navbar },
  setup () {
    const {
      ActivePlayer,
      ActiveQuestion,
      isAnswerShown,
      showAnswer,
      rightAnswerHandler,
      wrongAnswerHandler
    } = useСontroller()
    return {
      ActivePlayer,
      ActiveQuestion,
      isAnswerShown,
      showAnswer,
      rightAnswerHandler,
      wrongAnswerHandler
    }
  }
})
</script>
