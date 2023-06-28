<template>
  <div class="navbar" :style="`background: ${bgColor}`">
    <div v-if="!isHiddenBack" class="navbar__back" @click="delayedClickHandler" />
    <h2 class="navbar__title">
      {{ title }}
    </h2>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue'
import './style.scss'
import { useController } from './controller'

export default defineComponent({
  name: 'Navbar',
  props: {
    title: { type: String, required: true },
    bgColor: { type: String, required: false, default: '#EE941C' },
    backFunction: { type: Function as PropType<() => void>, required: false, default: null },
    isHiddenBack: { type: Boolean, required: false, default: false }
  },
  setup(props) {
    const { delayedClickHandler } = useController({ backFunction: props.backFunction })
    return {
      delayedClickHandler
    }
  }
})
</script>
