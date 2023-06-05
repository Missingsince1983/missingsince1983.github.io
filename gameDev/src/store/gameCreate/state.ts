import { Player } from "./types";

export interface GameCreateStateInterface {
  playersList: Player[];
  activePlayer: Player | null;
  playerColorList: string[];
}

const state: GameCreateStateInterface = {
  playersList: [],
  activePlayer: null,
  playerColorList: [
    '#32AAB1',
    '#EE941C',
    '#FA5FC2',
    '#842DFA',
    '#B4EF4B',
    '#ED3F3E',
    '#096FAD',
    '#F7D548',
    '#92F0E6'
  ]
}

export default state
