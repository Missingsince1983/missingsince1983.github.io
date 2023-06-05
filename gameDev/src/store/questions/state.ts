import { AnsweredQuestionsType, CategoryType, QuestionPackType, QuestionType } from "./types"

export interface QuestionsStateInterface {
  packs: QuestionPackType[];
  categories: CategoryType[];
  selectedPack: QuestionPackType | null;
  selectedCategory: CategoryType | null;
  activeQuestion: QuestionType | null;
  answeredQuestions: AnsweredQuestionsType[];
  activeRound: number;
  roundsAmount: number;
}

const state: QuestionsStateInterface = {
  packs: [],
  categories: [],
  selectedPack: null,
  selectedCategory: null,
  activeQuestion: null,
  answeredQuestions: [],
  roundsAmount: 0,
  activeRound: 0
}

export default state
