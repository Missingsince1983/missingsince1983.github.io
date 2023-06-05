import { MutationTree } from 'vuex'
import { SettingsStateInterface } from './state'
import { SettingsColor } from './types'

const mutation: MutationTree<SettingsStateInterface> = {
  mutateCurrentColorTheme(state: SettingsStateInterface, payload: SettingsColor): void {
    localStorage.setItem('settingsThemeColorName', payload)
    state.currentColorTheme = payload
  }

}

export default mutation
