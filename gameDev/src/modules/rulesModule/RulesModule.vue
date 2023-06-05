<template>
  <div class="rules-module">
    <navbar title="Правила игры" />
    <screen-section>
      <block-title text="Здесь будут правила игры" />
    </screen-section>
  </div>
</template>

<script lang="ts">
import { ScreenSection, BlockTitle, Navbar } from 'src/components'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RulesModule',
  components: { ScreenSection, BlockTitle, Navbar },
  setup () {
    return {}
  }
})
</script>
