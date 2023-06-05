import { MutationTree } from 'vuex'
import { GameCreateStateInterface } from './state'
import { Player } from './types'

const mutation: MutationTree<GameCreateStateInterface> = {
  mutatePlayersList(state: GameCreateStateInterface, payload: Player[]): void {
    state.playersList = payload
  },
  mutateActivePlayer(state: GameCreateStateInterface, payload: Player): void {
    state.activePlayer = payload
  }
}

export default mutation
