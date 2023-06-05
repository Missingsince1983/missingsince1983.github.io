export type VoteType = 'Y' | 'F'

export type Player = {
  id: string;
  name: string;
  oppositePlayer?: string;
  voteType?: VoteType;
  summary: number;
  color: string;
}

export type VoteData = {
  playerId: string;
  oppositePlayerId: string;
  voteType: VoteType
}

export type PlayersAnswerData = Player & { answerType: VoteType }