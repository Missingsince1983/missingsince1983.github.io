import LoadService from 'src/services/LoadService'

import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { createdAnswersListData, getRandomArbitrary } from './helpers'
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

    const { selectedQuestion, answersListToMutate } = createdAnswersListData({ currentCategory, answeredQuestions })
    context.commit('mutateActiveQuestion', selectedQuestion)
    context.commit('mutateAnsweredQuestions', answersListToMutate)
  },


}

export default actions
