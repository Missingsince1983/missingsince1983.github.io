import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ACTIVE_PLAYER_WON_SUMM, VOTED_PLAYER_WON_SUMM } from './constants'
import { updatedPlayersSummaryByConditional } from './helpers'
import { GameCreateStateInterface } from './state'
import { Player, PlayersAnswerData, VoteData } from './types'

const actions: ActionTree<GameCreateStateInterface, StateInterface> = {

  addNewPlayer(context, playerName: string) {
    const currentPlayersList = context.getters.getPlayersList
    const playerColorList = context.getters.getPlayerColorList
    context.commit('mutatePlayersList', [...currentPlayersList, { id: Date.now(), name: playerName, summary: 0, color: playerColorList[currentPlayersList.length] }])
  },

  removePlayerById(context, removingPlayerId: string) {
    const currentPlayersList = context.getters.getPlayersList
    context.commit('mutatePlayersList', currentPlayersList.filter((player: Player) => player.id !== removingPlayerId))
  },

  voteForPlayer(context, voteData: VoteData) {
    const currentPlayersList = JSON.parse(JSON.stringify(context.getters.getPlayersList)) as Player[]
    const playersListToMutate = currentPlayersList.map(player => {
      if (player.id === voteData.playerId) {
        return {
          ...player,
          oppositePlayer: voteData.oppositePlayerId,
          voteType: voteData.voteType
        }
      } else return player
    })
    context.commit('mutatePlayersList', playersListToMutate)
  },

  handlePlayersAnswer(context, payload: PlayersAnswerData) {
    const currentPlayersList = JSON.parse(JSON.stringify(context.getters.getPlayersList)) as Player[]

    const playersListToMutate = currentPlayersList.map(player => {
      if (player.id === payload.id) {
        const isCurrentPlayerRight = payload.answerType === 'Y'
        return updatedPlayersSummaryByConditional(player, isCurrentPlayerRight, ACTIVE_PLAYER_WON_SUMM)
      }
      if (player.id === payload.oppositePlayer) {
        const isVoteWon = player.voteType === payload.answerType
        return updatedPlayersSummaryByConditional(player, isVoteWon, VOTED_PLAYER_WON_SUMM)
      }
      return player
    })
    context.commit('mutatePlayersList', playersListToMutate)
  }
}

export default actions
