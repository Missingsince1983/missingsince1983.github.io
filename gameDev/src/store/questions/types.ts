import { Player, VoteType } from "../gameCreate/types";

export type CategoryResponseType = {
  categories: CategoryType
}

export type QuestionPackResponseType = QuestionPackType

export type CategoryType = {
  id: string;
  title: string;
  questions: QuestionType[];
}

export type QuestionType = {
  id: string;
  text: string;
  answer: string;
}

export type QuestionPackType = {
  id: string;
  title: string;
  amount: number;
  image?: string;
  path: string;
  tag?: string;
}

export type AnsweredQuestionsType = {
  categoryId: string;
  questions: string[];
}