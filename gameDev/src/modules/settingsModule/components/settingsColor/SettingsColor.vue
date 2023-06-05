<template>
  <div class="settings-color">
    <block-subtitle text="Выберите цвет" />

    <div class="settings-color__list">
      <settings-color-item
        v-for="color in APP_THEMES"
        :key="color.colorName"
        :color="color"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BlockSubtitle } from 'src/components'

import SettingsColorItem from '../settingsColorItem/SettingsColorItem.vue'
import './style.scss'
import { APP_THEMES } from 'src/store/settings/constants'

export default defineComponent({
  name: 'SettingsColor',
  components: { SettingsColorItem, BlockSubtitle },
  setup () {
    return {
      APP_THEMES
    }
  }
})
</script>
