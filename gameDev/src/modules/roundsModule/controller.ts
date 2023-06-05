import { APP_ROUTES } from 'src/router/variables'
import { useStore } from 'src/store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useСontroller = () => {
  const store = useStore()
  const router = useRouter()

  const roundsAmountLocal = ref(1)

  const selectRoundsAmount = (val: number) => { store.commit('questions/mutateRoundsAmount', val) }
  const setActiveRound = (val: number) => { store.commit('questions/mutateActiveRound', val) }

  const continueStep = async () => {
    selectRoundsAmount(roundsAmountLocal.value)
    setActiveRound(1)
    await router.push(APP_ROUTES.GAME_CREATE)
  }

  return { continueStep, roundsAmountLocal }
}
