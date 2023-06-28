import { AnsweredQuestionsType, CategoryType } from "./types";

export const getRandomArbitrary = (min: number, max: number) => {
  return Math.ceil(Math.random() * (max - min) + min);
}

export const formatCategoryArrayByExcludedValues = (payload: { category: CategoryType, excludedValues: AnsweredQuestionsType[] }) => {
  const { category, excludedValues } = payload
  const actualExcludedValues = excludedValues.find(val => val.categoryId === category.id)
  const isCategoryQuestionsEqualToExcludes = actualExcludedValues?.questions.length !== category.questions.length
  const ifThereAnyValuesToExclude = !!actualExcludedValues?.questions
  if (ifThereAnyValuesToExclude && isCategoryQuestionsEqualToExcludes) {
    return category.questions.filter(cat => !actualExcludedValues.questions.includes(cat.id))
  } else return category.questions
}

export const createdAnswersListData = (payload: { currentCategory: CategoryType, answeredQuestions: AnsweredQuestionsType[] }) => {
  const { currentCategory, answeredQuestions } = payload
  const unrepeatedQuestionsList = formatCategoryArrayByExcludedValues({ category: currentCategory, excludedValues: answeredQuestions })
  const randomNum = getRandomArbitrary(0, unrepeatedQuestionsList.length - 1)
  const isRepeatableArrayAreEqualToInitial = unrepeatedQuestionsList.length === currentCategory.questions.length
  const selectedQuestion = unrepeatedQuestionsList[randomNum]
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
  return {
    selectedQuestion, answersListToMutate
  }
}