import { APP_ROUTES } from 'src/router/variables'
import { useStore } from 'src/store'
import { Player, VoteData, VoteType } from 'src/store/gameCreate/types'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export const useController = () => {
  const store = useStore()
  const router = useRouter()

  const continueStep = async () => {
    await router.push(APP_ROUTES.GAME_BETTING)
  }

  const activePlayer = ref<Player | null>(null)
  const oppositePlayer = ref<Player | null>(null)
  const iterationToSelectPlayer = ref(0)
  const isFinishedBettings = ref(false)

  const votePros = async () => {
    await voteForPSelectedPlayer('Y')
  }

  const voteCons = async () => {
    await voteForPSelectedPlayer('F')
  }
  const voteForPSelectedPlayer = async (typeOfVote: VoteType) => {
    if (activePlayer.value && oppositePlayer.value) {
      await voteForPlayer({
        playerId: activePlayer.value?.id,
        oppositePlayerId: oppositePlayer.value?.id,
        voteType: typeOfVote // eslint-disable-line
      })
      if (isLastPlayerSelected.value) {
        isFinishedBettings.value = true
      } else {
        setNextPlayersPair()
      }
    }
  }

  const voteForPlayer = async (val: VoteData) => await store.dispatch('gameCreate/voteForPlayer', val) // eslint-disable-line

  const isLastPlayerSelected = computed(() => iterationToSelectPlayer.value === PlayersList.value.length)
  const isPreLastPlayerSelected = computed(() => iterationToSelectPlayer.value + 1 === PlayersList.value.length)

  const setNextPlayersPair = () => {
    if (isPreLastPlayerSelected.value) {
      activePlayer.value = PlayersList.value[iterationToSelectPlayer.value]
      oppositePlayer.value = PlayersList.value[0]
    } else {
      activePlayer.value = PlayersList.value[iterationToSelectPlayer.value]
      oppositePlayer.value = PlayersList.value[iterationToSelectPlayer.value + 1]
    }
    iterationToSelectPlayer.value = iterationToSelectPlayer.value + 1
  }

  const descriptionText = computed(() =>
    isFinishedBettings.value
      ? 'Ставки сделаны!'
      : `${activePlayer.value?.name ?? ''}, ответит ли ${oppositePlayer.value?.name ?? ''} на вопрос?`)

  const selectRandomCategory = async () => await store.dispatch('questions/selectRandomCategory') // eslint-disable-line

  onMounted(async () => {
    await selectRandomCategory()
    setNextPlayersPair()
  })

  const startGameQuestions = async () => {
    await router.push(APP_ROUTES.QUESTIONS)
  }

  const PlayersList = computed(() => store.state.gameCreate.playersList)
  const SelectedCategory = computed(() => store.state.questions.selectedCategory)
  return {
    voteCons,
    votePros,
    continueStep,
    startGameQuestions,
    isFinishedBettings,
    descriptionText,
    SelectedCategory
  }
}
