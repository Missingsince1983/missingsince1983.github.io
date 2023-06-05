import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { GameCreateStateInterface } from './state'
import { Player } from './types'
const getters: GetterTree<GameCreateStateInterface, StateInterface> = {
  getPlayersList(context): Player[] {
    return context.playersList
  },
  getActivePlayer(context): Player | null {
    return context.activePlayer
  },
  getPlayerColorList(context): string[] {
    return context.playerColorList
  }

}

export default getters
