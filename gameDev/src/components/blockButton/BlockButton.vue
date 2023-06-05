<template>
  <q-btn
    v-ripple
    :class="[`block-btn`, {'block-btn--disabled': isDisabled, 'block-btn--selected': isSelected}]"
    @click="delayedClickHandler"
  >
    {{ text }}
  </q-btn>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { useController } from './controller'
import './style.scss'

export default defineComponent({
  name: 'BlockButton',
  props: {
    text: { type: String, required: true },
    clickHandler: { type: Function, required: true },
    isDisabled: { type: Boolean, default: false },
    isSelected: { type: Boolean, default: false }
  },
  setup (props) {
    const delayedClickHandler = () => {
      setTimeout(() => {
        props.clickHandler()
      }, 300)
    }
    const { CurrentColorTheme } = useController()

    return { delayedClickHandler, CurrentColorTheme }
  }
})
</script>
