import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { SettingsStateInterface } from './state'
import { SettingsColor } from './types'
const getters: GetterTree<SettingsStateInterface, StateInterface> = {
  getCurrentColorTheme(context): SettingsColor {
    return context.currentColorTheme
  }

}

export default getters
