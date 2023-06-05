<template>
  <screen
    :has-no-back-button="true"
    :has-visible-rounds="true"
  >
    <questions-module />
  </screen>
</template>

<script lang="ts">
import Screen from 'src/components/screen/Screen.vue'

import { defineComponent } from 'vue'
import QuestionsModule from '../../modules/questionsModule/QuestionsModule.vue'

export default defineComponent({
  name: 'PageQuestions',
  components: { Screen, QuestionsModule },
  setup () {
    return { }
  }
})
</script>
