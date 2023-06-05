import { computed } from 'vue'
import { useStore } from 'src/store'
import { APP_THEMES } from 'src/store/settings/constants'

export const useController = () => {
  const store = useStore()

  const CurrentColor = computed(() => store.state.settings.currentColorTheme)
  const CurrentColorTheme = computed(() => APP_THEMES.find(theme => theme.colorName === CurrentColor.value)) // eslint-disable-line
  return {
    CurrentColorTheme
  }
}
