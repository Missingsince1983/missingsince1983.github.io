import { computed } from 'vue'
import { useStore } from 'src/store'
import { APP_THEMES } from 'src/store/settings/constants'
import { useRoute, useRouter } from 'vue-router'

type Props = {
  hasNoBackButton: boolean
}
export const useController = ({ hasNoBackButton }: Props) => {
  const store = useStore()
  const router = useRouter()
  const route = useRoute()

  const CurrentColor = computed(() => store.state.settings.currentColorTheme)
  const CurrentColorTheme = computed(() => APP_THEMES.find(theme => theme.colorName === CurrentColor.value)) // eslint-disable-line

  const RoundsAmount = computed(() => store.state.questions.roundsAmount)
  const ActiveRound = computed(() => store.state.questions.activeRound)

  const roundsString = computed(() => `Раунд ${ActiveRound.value}/${RoundsAmount.value}`)

  const isBackButtonVisible = computed(() => hasNoBackButton ? false : route.fullPath !== '/')
  const backFunction = () => {
    router.go(-1)
  }
  return {
    CurrentColorTheme,
    isBackButtonVisible,
    roundsString,
    backFunction
  }
}
