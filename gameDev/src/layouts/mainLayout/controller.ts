import { computed } from 'vue'
import { useStore } from 'src/store'
import { SettingsColor } from 'src/store/settings/types'
import { useRoute, useRouter } from 'vue-router'
const LOADER_TIME = 700
const useController = () => {
  const store = useStore()
  const route = useRoute()
  const router = useRouter()
  const changeIsGeneralLoading = (val: boolean) => { store.commit('general/mutateIsGeneralLoading', val) }
  const loadQuestionsPackList = async () => { await store.dispatch('questions/loadQuestionsPackList') }

  const calculateVisibleSpaceHeight = async () => { await store.dispatch('general/calculateVisibleSpaceHeight') }

  const setCurrentQuestionByCategory = (val: SettingsColor) => { store.commit('settings/mutateCurrentColorTheme', val) } //eslint-disable-line
  const IsGeneralLoading = computed(() => store.state.general.isGeneralLoading)

  const generalLoading = async () => {
    return new Promise<void>((resolve) => {
      changeIsGeneralLoading(true)
      setTimeout(() => {
        changeIsGeneralLoading(false)
        resolve()
      }, LOADER_TIME)
    })
  }

  const redirectToMainPage = async () => {
    if (route.fullPath !== '/') await router.push('/')
  }

  const loadSettingsFromLocalStorage = () => {
    const localColorName = localStorage.getItem('settingsThemeColorName')
    if (localColorName) setCurrentQuestionByCategory(localColorName as SettingsColor)
  }

  const resizeHandler = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  const onMountedCallback = async () => {
    await redirectToMainPage()
    resizeHandler()
    loadSettingsFromLocalStorage()
    await loadQuestionsPackList()
    await generalLoading()
    void calculateVisibleSpaceHeight()
    window.addEventListener('resize', () => {
      resizeHandler()
      void calculateVisibleSpaceHeight()
    })
  }

  return {
    IsGeneralLoading,
    onMountedCallback
  }
}

export default useController
