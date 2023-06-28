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
    const packCardHeight = 7.6 * RemSize.value
    const countPerRow = 1
    const size = Math.floor(VisibleSpaceHeight.value / packCardHeight) * countPerRow
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

  const RemSize = computed(() => store.state.general.remSize)
  const additionalHeight = 14 * RemSize.value
  const VisibleSpaceHeight = computed(() => store.state.general.visibleSpaceHeight - additionalHeight)
  const PlayersList = computed(() => store.state.gameCreate.playersList)
  return {
    playersAmount,
    playerName,
    addNewPlayer,
    continueStep,
    formatedPlayersList,
    slide,
    VisibleSpaceHeight
  }
}
