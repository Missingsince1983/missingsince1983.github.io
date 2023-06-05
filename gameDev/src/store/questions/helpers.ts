import { AnsweredQuestionsType, CategoryType } from "./types";

export const getRandomArbitrary = (min: number, max: number) => {
  return Math.ceil(Math.random() * (max - min) + min);
}

export const formatCategoryArrayByExcludedValues = (category: CategoryType, excludedValues: AnsweredQuestionsType[]) => {
  const actualExcludedValues = excludedValues.find(val => val.categoryId === category.id)
  const isCategoryQuestionsEqualToExcludes = actualExcludedValues?.questions.length !== category?.questions.length
  const ifThereAnyValuesToExclude = !!actualExcludedValues?.questions
  if (ifThereAnyValuesToExclude && isCategoryQuestionsEqualToExcludes) {
    return category.questions.filter(cat => !actualExcludedValues.questions.includes(cat.id))
  } else return category.questions
}