<template>
  <div
    class="screen"
    :style="`background-color: ${CurrentColorTheme?.mainBgColor}`"
  >
    <slot />
    <!-- <q-btn
      v-if="isBackButtonVisible"
      class="screen__back-button"
      @click="backFunction"
    >
      Назад
    </q-btn> -->
    <div
      v-if="hasVisibleRounds"
      class="screen__rounds"
    >
      {{ roundsString }}
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useController } from './controller'
import './style.scss'

export default defineComponent({
  name: 'Screen',
  props: {
    hasNoBackButton: { type: Boolean, required: false, default: false },
    hasVisibleRounds: { type: Boolean, required: false, default: false }
  },
  setup (props) {
    const { CurrentColorTheme, isBackButtonVisible, roundsString, backFunction } = useController({
      hasNoBackButton: props.hasNoBackButton
    })
    return {
      CurrentColorTheme,
      isBackButtonVisible,
      roundsString,
      backFunction
    }
  }
})
</script>
