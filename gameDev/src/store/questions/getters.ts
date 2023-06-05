import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { QuestionsStateInterface } from './state'
import { AnsweredQuestionsType, CategoryType, QuestionPackType, QuestionType } from './types'

const getters: GetterTree<QuestionsStateInterface, StateInterface> = {
  getPacksList (context): QuestionPackType[] {
    return context.packs
  },
  getCategoriesList (context): CategoryType[] {
    return context.categories
  },
  getSelectedPack (context): QuestionPackType | null {
    return context.selectedPack
  },
  getSelectedCategory (context): CategoryType | null {
    return context.selectedCategory
  },
  getActiveQuestion (context): QuestionType | null {
    return context.activeQuestion
  },
  getAnsweredQuestions (context): AnsweredQuestionsType[] {
    return context.answeredQuestions
  },
  getRoundsAmount (context): number {
    return context.roundsAmount
  },
  getActiveRound (context): number {
    return context.activeRound
  }
}

export default getters
