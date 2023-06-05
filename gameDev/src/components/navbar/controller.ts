import { useRouter } from 'vue-router'

type Props = {
  backFunction: () => void | null;
}
export const useController = ({ backFunction }: Props) => {
  const router = useRouter()
  const delayedClickHandler = () => {
    if (backFunction) {
      setTimeout(() => {
        backFunction()
      }, 300)
    } else {
      setTimeout(() => {
        router.go(-1)
      }, 300)
    }
  }
  return {
    delayedClickHandler
  }
}
