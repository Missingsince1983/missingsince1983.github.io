<template>
  <div class="rules-module">
    <screen-section>
      <navbar title="Правила игры" />
      <div class="rules-module__content">
        <p>
          Добавьте от 2-ух игроков, установите желаемое кол-во раундов и приступайте к игре! Каждый правильный ответ
          принесет вам +2 победных очка, но не все так просто ...
        </p>
        <p>
          В каждом раунде нужно поставить ставку на ответ оппонента: будет он верным или нет. За каждую угаданную ставку
          +1 очко, за каждый промах в ставке -1 очко
        </p>
      </div>
    </screen-section>
  </div>
</template>

<script lang="ts">
import { ScreenSection, Navbar } from 'src/components'
import { defineComponent } from 'vue'
import './style.scss'

export default defineComponent({
  name: 'RulesModule',
  components: { ScreenSection, Navbar },
  setup() {
    return {}
  }
})
</script>
