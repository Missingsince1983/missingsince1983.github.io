import { APP_ROUTES } from 'src/router/variables'
import { useRouter } from 'vue-router'

export const useController = () => {
  const router = useRouter()

  const openRules = async () => {
    await router.push(APP_ROUTES.RULES)
  }

  const openSettings = async () => {
    await router.push(APP_ROUTES.SETTINGS)
  }

  const openGame = async () => {
    await router.push(APP_ROUTES.SELECT_PACK)
  }

  const continueGame = async () => {
    await router.push(APP_ROUTES.SELECT_PACK)
  }

  return { openRules, openSettings, openGame, continueGame }
}
