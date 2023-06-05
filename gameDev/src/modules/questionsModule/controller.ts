import { APP_ROUTES } from 'src/router/variables'
import { useStore } from 'src/store'
import { Player, PlayersAnswerData, VoteType } from 'src/store/gameCreate/types'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export const useСontroller = () => {
  const store = useStore()
  const router = useRouter()

  const selectActivePlayer = (val: Player) => { store.commit('gameCreate/mutateActivePlayer', val) }

  const selectRandomQuestion = async () => { await store.dispatch('questions/selectRandomQuestion') }

  const handlePlayersAnswer = async (val: PlayersAnswerData) => { await store.dispatch('gameCreate/handlePlayersAnswer', val) }

  const PlayersList = computed(() => store.state.gameCreate.playersList)
  const ActivePlayer = computed(() => store.state.gameCreate.activePlayer)
  const ActiveQuestion = computed(() => store.state.questions.activeQuestion)

  const isAnswerShown = ref(false)
  const showAnswer = () => { isAnswerShown.value = true }
  const hideAnswer = () => { isAnswerShown.value = false }

  const answerHandlerByVoteType = async (answerType: VoteType) => {
    if (ActivePlayer.value) {
      await handlePlayersAnswer({ ...ActivePlayer.value, answerType })
      hideAnswer()
      await selectRandomQuestion()
      await setNextCurrentPlayer()
    }
  }

  const rightAnswerHandler = async () => {
    await answerHandlerByVoteType('Y')
  }

  const wrongAnswerHandler = async () => {
    await answerHandlerByVoteType('F')
  }

  const finishRound = async () => {
    await router.push(APP_ROUTES.STATISTICS)
  }

  const iterationNumber = ref(0)
  const setNextCurrentPlayer = async () => {
    const isLastPlayersTurn = iterationNumber.value + 1 > PlayersList.value.length
    if (!isLastPlayersTurn) {
      selectActivePlayer(PlayersList.value[iterationNumber.value])
      iterationNumber.value = iterationNumber.value + 1
    } else {
      await finishRound()
    }
  }

  onMounted(async () => {
    await setNextCurrentPlayer()
    await selectRandomQuestion()
  })
  return {
    ActivePlayer,
    ActiveQuestion,
    isAnswerShown,
    showAnswer,
    rightAnswerHandler,
    wrongAnswerHandler
  }
}
