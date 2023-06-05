<template>
  <div class="settings-mo">
    <screen-section>
      <block-title text="Настройки игры" />
      <settings-section>
        <settings-color />
      </settings-section>
    </screen-section>
  </div>
</template>

<script lang="ts">
import { ScreenSection, BlockTitle } from 'src/components'
import { defineComponent } from 'vue'
import SettingsColor from './components/settingsColor/SettingsColor.vue'
import SettingsSection from './components/settingsSection/SettingsSection.vue'
import { useController } from './controller'

export default defineComponent({
  name: 'SettingsModule',
  components: { ScreenSection, SettingsColor, SettingsSection, BlockTitle },
  setup () {
    const { list } = useController()
    return { list }
  }
})
</script>
