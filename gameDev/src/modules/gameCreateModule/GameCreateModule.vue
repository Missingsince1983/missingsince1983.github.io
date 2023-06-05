<template>
  <div class="game-create-module">
    <navbar title="Добавьте игроков" />

    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="white"
      navigation
      class="game-create-module__carousel"
    >
      <q-carousel-slide
        v-for="(players, i) in formatedPlayersList"
        :key="i"
        :name="i"
        class="game-create-module__slide"
      >
        <div class="game-create-module__list">
          <game-player-card
            v-for="player in players"
            :key="player.id"
            :player="player"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="game-create-module__new">
      <div class="game-create-module__new-field">
        <form-field
          v-model="playerName"
          :on-submit-by-enter="addNewPlayer"
          :placeholder="`Игрок ${playersAmount + 1}`"
        />
      </div>
      <form-button
        text="+"
        :click-handler="addNewPlayer"
        :is-orange="true"
      />
    </div>

    <screen-section :is-bottom-section="true">
      <form-button
        text="Далее"
        :is-secondary="true"
        :click-handler="continueStep"
        :is-disabled="playersAmount < 3"
      />
    </screen-section>
  </div>
</template>

<script lang="ts">
import { ScreenSection, FormField, Navbar, FormButton } from 'src/components'
import GamePlayerCard from './components/gamePlayerCard/GamePlayerCard.vue'
import { defineComponent } from 'vue'
import { useController } from './controller'
import './style.scss'

export default defineComponent({
  name: 'GameCreateModule',
  components: { ScreenSection, FormButton, FormField, GamePlayerCard, Navbar },
  setup () {
    const { addNewPlayer, playersAmount, playerName, continueStep, formatedPlayersList, slide } = useController()
    return { addNewPlayer, playersAmount, playerName, continueStep, formatedPlayersList, slide }
  }
})
</script>
