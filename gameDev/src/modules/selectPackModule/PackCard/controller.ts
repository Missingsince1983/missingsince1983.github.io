import { useStore } from 'src/store'
import { QuestionPackType } from 'src/store/questions/types'

type Props = {
  pack: QuestionPackType
}

export const useController = (props: Props) => {
  const store = useStore()

  const selectQuestionsPack = () => {
    store.commit('questions/mutateSelectedPack', props.pack)
  }

  return {
    selectQuestionsPack
  }
}
