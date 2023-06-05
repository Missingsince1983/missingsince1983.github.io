export default {
  smoothVerticalScroll (scrollingBlock: HTMLElement | Element, finishedScrollValue: number, finalCallback: (() => void) | null) {
    const height = finishedScrollValue < 0 ? 0 : finishedScrollValue
    let timer: ReturnType<typeof setInterval> | null = null
    if (scrollingBlock) {
      let i = scrollingBlock.scrollTop
      // Скролл вниз
      if (i < height) {
        const speed = (height - i) < 200 ? 8 : (height - i) / 130 < 5 ? 15 : (height - i) / 130 < 30 ? 40 : (height - i) / 130 < 40 ? (height - i) / 110 : (height - i) / 60
        timer = setInterval(() => {
          i = i + speed < height ? i + speed : height
          scrollingBlock.scrollTo(0, i)
          if (timer && i >= height) {
            clearInterval(timer)
            if (finalCallback) { finalCallback() } //eslint-disable-line
          }
        }, 5)
      } else {
        // Скролл вверх
        const speed = (i - height) < 200 ? 8 : (i - height) / 130 < 5 ? 15 : (i - height) / 130 < 30 ? 40 : (i - height) / 130 < 40 ? (i - height) / 110 : (i - height) / 60
        timer = setInterval(() => {
          scrollingBlock.scrollTo(0, i)
          if (timer && i <= height) {
            clearInterval(timer)
            if (finalCallback) { finalCallback() } //eslint-disable-line
          }
          i = i - speed > height ? i - speed : height
        }, 5)
      }
    }
  },
  smoothHorizontalScroll (scrollingBlock: HTMLElement | Element, finishedScrollValue: number) {
    let i = scrollingBlock.scrollLeft
    const isForwardDirection = i < finishedScrollValue
    let timer: ReturnType<typeof setInterval> | null = null
    // Скролл вперед
    const speed = 12
    if (isForwardDirection) {
      timer = setInterval(() => {
        scrollingBlock.scrollTo({
          left: i
        })
        i = i + speed < finishedScrollValue ? i + speed : finishedScrollValue
        if (timer && i >= finishedScrollValue) {
          clearInterval(timer)
          timer = null
        }
      }, 10)
    } else {
      // Скролл назад
      timer = setInterval(() => {
        scrollingBlock.scrollTo({
          left: i
        })
        i = i - speed > finishedScrollValue ? i - speed : finishedScrollValue
        if (timer && i <= finishedScrollValue) {
          clearInterval(timer)
          timer = null
        }
      }, 10)
    }
  }
}
