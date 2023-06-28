import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { GeneralStateInterface } from './state'
const getters: GetterTree<GeneralStateInterface, StateInterface> = {
  getIsGeneralLoading(context): boolean {
    return context.isGeneralLoading
  },
  getVisibleSpaceHeight(context): number {
    return context.visibleSpaceHeight
  },
  getRemSize(context): number {
    return context.remSize
  }
}

export default getters
