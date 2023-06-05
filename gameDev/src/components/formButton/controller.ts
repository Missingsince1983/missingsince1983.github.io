type Props = {
  clickHandler: () => void;
}

export const useController = ({ clickHandler }: Props) => {
  const delayedClickHandler = () => {
    setTimeout(() => {
      clickHandler()
    }, 300)
  }
  return {
    delayedClickHandler
  }
}
