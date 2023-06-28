import { MutationTree } from 'vuex'
import { GeneralStateInterface } from './state'

const mutation: MutationTree<GeneralStateInterface> = {
  mutateIsGeneralLoading(state: GeneralStateInterface, payload: boolean): void {
    state.isGeneralLoading = payload
  },
  mutateVisibleSpaceHeight(state: GeneralStateInterface, payload: number): void {
    state.visibleSpaceHeight = payload
  },
  mutateRemSize(state: GeneralStateInterface, payload: number): void {
    state.remSize = payload
  }
}

export default mutation
