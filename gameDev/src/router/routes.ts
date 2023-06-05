import { RouteRecordRaw } from 'vue-router'

import MainLayout from 'src/layouts/mainLayout/MainLayout.vue'
import { APP_ROUTES } from './variables'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: APP_ROUTES.MAIN, component: () => import('pages/index/Index.vue') },
      { path: APP_ROUTES.RULES, component: () => import('pages/rules/Rules.vue') },
      { path: APP_ROUTES.SETTINGS, component: () => import('pages/settings/Settings.vue') },
      { path: APP_ROUTES.SELECT_PACK, component: () => import('pages/selectPack/SelectPack.vue') },
      { path: APP_ROUTES.GAME_CREATE, component: () => import('pages/gameCreate/GameCreate.vue') },
      { path: APP_ROUTES.GAME_BETTING, component: () => import('pages/gameBetting/GameBetting.vue') },
      { path: APP_ROUTES.QUESTIONS, component: () => import('pages/questions/Questions.vue') },
      { path: APP_ROUTES.STATISTICS, component: () => import('pages/statistics/Statistics.vue') },
      { path: APP_ROUTES.ROUNDS, component: () => import('pages/rounds/Rounds.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
