import { APP_ROUTES } from 'src/router/variables'
import { useStore } from 'src/store'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export const useController = () => {
  const store = useStore()
  const router = useRouter()

  const slide = ref(0)

  const loadCategoriesByPackId = async (val: { packPath: string }) => await store.dispatch('questions/loadCategoriesByPackPath', val) // eslint-disable-line

  const continueStep = async () => {
    if (SelectedPack.value) {
      await loadCategoriesByPackId({ packPath: SelectedPack.value?.path }) // eslint-disable-line
      await router.push(APP_ROUTES.ROUNDS)
    }
  }

  const formatedPackList = computed(() => {
    const packCardHeight = 12 * RemSize.value
    const countPerRow = 2
    const size = Math.floor(VisibleSpaceHeight.value / packCardHeight) * countPerRow
    const pagesCount = Math.ceil(PacksList.value.length / size)
    const ar = []
    for (let i = 0; i < pagesCount; i++) {
      ar[i] = PacksList.value.slice((i * size), (i * size) + size)
    }
    return ar
  })

  const SelectedPack = computed(() => store.state.questions.selectedPack)
  const PacksList = computed(() => store.state.questions.packs)
  const VisibleSpaceHeight = computed(() => store.state.general.visibleSpaceHeight)
  const RemSize = computed(() => store.state.general.remSize)

  return {
    PacksList,
    SelectedPack,
    continueStep,
    formatedPackList,
    slide,
    VisibleSpaceHeight
  }
}
