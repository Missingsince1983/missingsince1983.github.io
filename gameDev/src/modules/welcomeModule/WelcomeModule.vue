<template>
  <div class="welcome-module">
    <div class="welcome-module__logo-block">
      <div class="welcome-module__logo" />
    </div>
    <div class="welcome-module__button-block">
      <screen-section>
        <form-button
          text="Продолжить"
          :is-secondary="true"
          :click-handler="continueGame"
        />
      </screen-section>
      <screen-section>
        <form-button
          text="Новая игра"
          :click-handler="openGame"
        />
      </screen-section>
      <screen-section>
        <form-button
          text="Правила игры"
          :click-handler="openRules"
        />
      </screen-section>
    </div>
  </div>
</template>

<script lang="ts">
import { FormButton, ScreenSection } from 'src/components'
import { defineComponent } from 'vue'
import { useController } from './controller'
import './style.scss'

export default defineComponent({
  name: 'WelcomeModule',
  components: { FormButton, ScreenSection },
  setup () {
    const { openRules, openSettings, openGame, continueGame } = useController()
    return { openRules, openSettings, openGame, continueGame }
  }
})
</script>
