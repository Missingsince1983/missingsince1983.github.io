import { useStore } from 'src/store'
import { Player } from 'src/store/gameCreate/types'

type Props = {
  player: Player
}

export const useController = (props: Props) => {
  const store = useStore()

  const removePlayer = async () => {
    await store.dispatch('gameCreate/removePlayerById', props.player.id)
  }
  return {
    removePlayer
  }
}
