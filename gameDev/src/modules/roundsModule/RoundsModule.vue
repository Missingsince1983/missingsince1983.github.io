<template>
  <div class="rounds-module">
    <navbar title="Кол-во раундов" />
    <screen-section :is-padded="true">
      <div class="rounds-module__slider-section">
        <q-slider
          v-model="roundsAmountLocal"
          :min="1"
          :max="4"
          markers
          track-size="1.2rem"
          inner-track-color="white"
          marker-labels-class="rounds-module__slider-marker"
          :marker-labels="val => `${val}`"
          class="rounds-module__slider"
        />
      </div>
    </screen-section>
    <screen-section :is-bottom-section="true">
      <form-button
        text="Далее"
        :is-secondary="true"
        :click-handler="continueStep"
        :is-disabled="!roundsAmountLocal"
      />
    </screen-section>
  </div>
</template>

<script lang="ts">
import { ScreenSection, Navbar, FormButton } from 'src/components'
import { defineComponent } from 'vue'
import { useСontroller } from './controller'
import './style.scss'

export default defineComponent({
  name: 'RoundsModule',
  components: { ScreenSection, Navbar, FormButton },
  setup () {
    const { continueStep, roundsAmountLocal } = useСontroller()
    return { continueStep, roundsAmountLocal }
  }
})
</script>
