import { computed } from 'vue'
import { useStore } from 'src/store'
import { SettingsColor } from 'src/store/settings/types'
type Props = {
  color: SettingsColor;
}

export const useController = (props: Props) => {
  const { color } = props
  const store = useStore()

  const setCurrentQuestionByCategory = (val: SettingsColor) => { store.commit('settings/mutateCurrentColorTheme', val) } //eslint-disable-line
  const changeCurrentColor = () => { setCurrentQuestionByCategory(color) }

  const CurrentColor = computed(() => store.state.settings.currentColorTheme)
  return {
    CurrentColor,
    changeCurrentColor
  }
}
