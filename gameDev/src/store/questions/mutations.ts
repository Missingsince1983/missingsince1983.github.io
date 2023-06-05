import { MutationTree } from 'vuex'
import { QuestionsStateInterface } from './state'
import { AnsweredQuestionsType, CategoryType, QuestionPackType, QuestionType } from './types'

const mutation: MutationTree<QuestionsStateInterface> = {
  mutatePacksList (state: QuestionsStateInterface, payload: QuestionPackType[]): void {
    state.packs = payload
  },
  mutateCategoriesList (state: QuestionsStateInterface, payload: CategoryType[]): void {
    state.categories = payload
  },
  mutateSelectedPack (state: QuestionsStateInterface, payload: QuestionPackType): void {
    state.selectedPack = payload
  },
  mutateSelectedCategory (state: QuestionsStateInterface, payload: CategoryType): void {
    state.selectedCategory = payload
  },
  mutateActiveQuestion (state: QuestionsStateInterface, payload: QuestionType): void {
    state.activeQuestion = payload
  },
  mutateAnsweredQuestions (state: QuestionsStateInterface, payload: AnsweredQuestionsType[]): void {
    state.answeredQuestions = payload
  },
  mutateActiveRound (state: QuestionsStateInterface, payload: number): void {
    state.activeRound = payload
  },
  mutateRoundsAmount(state: QuestionsStateInterface, payload: number): void {
    state.roundsAmount = payload
  },
}

export default mutation
