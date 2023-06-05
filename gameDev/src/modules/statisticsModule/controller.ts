import { APP_ROUTES } from 'src/router/variables'
import { useStore } from 'src/store'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export const useСontroller = () => {
  const store = useStore()
  const router = useRouter()
  const PlayersList = computed(() => store.state.gameCreate.playersList)

  const setActiveRound = (val: number) => { store.commit('questions/mutateActiveRound', val) }

  const isLastRound = computed(() => RoundsAmount.value === ActiveRound.value)

  const RoundsAmount = computed(() => store.state.questions.roundsAmount)
  const ActiveRound = computed(() => store.state.questions.activeRound)

  const finishGame = async () => {
    await router.push('/')
  }

  const continueGame = async () => {
    setActiveRound(ActiveRound.value + 1)
    await router.push(APP_ROUTES.GAME_BETTING)
  }

  return {
    PlayersList,
    continueGame,
    finishGame,
    isLastRound
  }
}
