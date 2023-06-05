import { APP_ROUTES } from 'src/router/variables'
import { useStore } from 'src/store'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export const useController = () => {
  const store = useStore()
  const router = useRouter()
  const playerName = ref('')

  const slide = ref(0)

  const addNewPlayer = async () => {
    if (playerName.value) {
      await store.dispatch('gameCreate/addNewPlayer', playerName.value)
      playerName.value = ''
      slide.value = formatedPlayersList.value.length - 1
    }
  }

  const formatedPlayersList = computed(() => {
    const size = 4
    const pagesCount = Math.ceil(PlayersList.value.length / size)
    const ar = []
    for (let i = 0; i < pagesCount; i++) {
      ar[i] = PlayersList.value.slice((i * size), (i * size) + size)
    }
    return ar
  })

  const continueStep = async () => {
    await router.push(APP_ROUTES.GAME_BETTING)
  }

  const playersAmount = computed(() => PlayersList.value.length)

  const PlayersList = computed(() => store.state.gameCreate.playersList)
  return {
    playersAmount,
    playerName,
    addNewPlayer,
    continueStep,
    formatedPlayersList,
    slide
  }
}
