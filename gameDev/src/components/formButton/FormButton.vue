<template>
  <q-btn
    v-ripple
    :class="[`form-btn`,
             { 'form-btn--disabled': isDisabled, 'form-btn--secondary': isSecondary, 'form-btn--orange': isOrange }]"
    @click="delayedClickHandler"
  >
    {{ text }}
  </q-btn>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import { useController } from './controller'
import './style.scss'

export default defineComponent({
  name: 'FormButton',
  props: {
    text: { type: String, required: true },
    clickHandler: { type: Function as PropType<() => void>, required: true },
    isDisabled: { type: Boolean, default: false },
    isSecondary: { type: Boolean, default: false },
    isOrange: { type: Boolean, default: false }
  },
  setup (props) {
    const { delayedClickHandler } = useController({ clickHandler: props.clickHandler })
    return { delayedClickHandler }
  }
})
</script>
