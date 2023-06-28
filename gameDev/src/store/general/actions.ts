import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
const MOBILE_BREAKPOINT = 360
const TABLET_BREAKPOINT = 768
const actions: ActionTree<GeneralStateInterface, StateInterface> = {
  calculateVisibleSpaceHeight(context) {

    const remSize = window.innerWidth >= TABLET_BREAKPOINT ? 10 : window.innerWidth / MOBILE_BREAKPOINT * 10
    const headerHeight = 6.4 * remSize
    const bottomSectionHeight = 9 * remSize
    const paddingHeight = 3.2 * remSize
    const freeVisibleDpace = window.innerHeight - headerHeight - bottomSectionHeight - paddingHeight

    context.commit('mutateRemSize', remSize)
    context.commit('mutateVisibleSpaceHeight', freeVisibleDpace)
  }
}

export default actions
