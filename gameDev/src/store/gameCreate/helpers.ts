import { Player } from "./types";

export const updatedPlayersSummaryByConditional = (player: Player, isConditionalDone: boolean, value: number) => {
  return {
    ...player,
    summary: player.summary + (isConditionalDone ? value : 0)
  }
}