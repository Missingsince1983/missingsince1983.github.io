<template>
  <div
    class="settings-color-item"
    :style="`border-color: ${isColorCurrent ? color.colorName : 'transparent'}`"
    @click="changeCurrentColor"
  >
    <div
      class="settings-color-item__inner"
      :style="`background-color: ${color.colorName}`"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

import './style.scss'
import { useController } from './controller'
import { SettingsColorItemType } from 'src/store/settings/types'

export default defineComponent({
  name: 'SettingsColorItem',
  components: { },
  props: {
    color: { type: Object as PropType<SettingsColorItemType>, required: true }
  },
  setup (props) {
    const { CurrentColor, changeCurrentColor } = useController({ color: props.color.colorName }) // eslint-disable-line
    const isColorCurrent = computed(() => CurrentColor.value === props.color.colorName) // eslint-disable-line
    return {
      isColorCurrent,
      changeCurrentColor
    }
  }
})
</script>
