import GetService from 'src/services/GetService'
import LoadService from 'src/services/LoadService'

import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { formatCategoryArrayByExcludedValues, getRandomArbitrary } from './helpers'
import { QuestionsStateInterface } from './state'
import { AnsweredQuestionsType, CategoryResponseType, CategoryType, QuestionPackResponseType } from './types'


const actions: ActionTree<QuestionsStateInterface, StateInterface> = {

  loadQuestionsPackList(context) {
    LoadService.apiRequest<QuestionPackResponseType>('packs.json')
      .then((data) => {
        context.commit('mutatePacksList', data)
      })
      .catch((err) => console.error(err))
  },

  loadCategoriesByPackPath(context, payload: { packPath: string }) {
    LoadService.apiRequest<CategoryResponseType>(`packs/${payload.packPath}.json`)
      .then((data) => {
        context.commit('mutateCategoriesList', data.categories)
      })
      .catch((err) => console.error(err))
  },

  selectRandomCategory(context) {
    const currentCategoriesList = JSON.parse(JSON.stringify(context.getters.getCategoriesList)) as CategoryType[]
    const randomNum = getRandomArbitrary(0, currentCategoriesList.length - 1)
    context.commit('mutateSelectedCategory', currentCategoriesList[randomNum])
    context.commit('mutateAnsweredQuestions', [])
  },

  selectRandomQuestion(context) {
    const currentCategory = context.getters.getSelectedCategory as CategoryType
    const answeredQuestions = context.getters.getAnsweredQuestions as AnsweredQuestionsType[]
    const unrepeatedQuestionsList = formatCategoryArrayByExcludedValues(currentCategory, answeredQuestions)
    const randomNum = getRandomArbitrary(0, unrepeatedQuestionsList.length - 1)
    const isRepeatableArrayAreEqualToInitial = unrepeatedQuestionsList.length === currentCategory.questions.length
    const selectedQuestion = unrepeatedQuestionsList[randomNum]
    context.commit('mutateActiveQuestion', selectedQuestion)
    const answersListToMutate = answeredQuestions.map(answered => {
      if (answered.categoryId === currentCategory.id) {
        return {
          ...answered,
          questions: isRepeatableArrayAreEqualToInitial
            ? []
            : [...answered.questions, selectedQuestion.id]
        }
      }
      return answered
    })
    context.commit('mutateAnsweredQuestions', answersListToMutate)
  },


}

export default actions
