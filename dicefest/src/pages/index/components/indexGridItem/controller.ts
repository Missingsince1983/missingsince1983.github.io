export class InitGridItemAnimation {
  private item: HTMLElement | null;
  private animationLeaveIndexTimer: ReturnType<typeof setTimeout> | null = null;
  private animationLeaveTimer: ReturnType<typeof setTimeout> | null = null;
  private animationHoverTimer: ReturnType<typeof setTimeout> | null = null;
  private HOVER_ANIM_TIME = 150
  private LEAVE_ANIM_TIME = 300
  private LEAVE_ANIM_INDEX_TIME = 550
  private HOVER_CLASS = '_hover'
  private HOVER_LEAVE_CLASS = '_hover-leave'
  private HOVER_INDEX_CLASS = '_hover-index'
  private HOVER_TEXT_CLASS = '_hover-text'

  constructor (private block: HTMLDivElement) {
    this.item = this.block
    this.init()
  }

  animateItemOnHover = () => {
    this.item?.classList.add(this.HOVER_CLASS)
    this.item?.classList.add(this.HOVER_INDEX_CLASS)
    this.animationHoverTimer = setTimeout(() => {
      this.item?.classList.add(this.HOVER_TEXT_CLASS)
    }, this.HOVER_ANIM_TIME)
  }

  animateItemOnHoverLeave = () => {
    if (this.animationHoverTimer) clearTimeout(this.animationHoverTimer)
    this.item?.classList.add(this.HOVER_LEAVE_CLASS)

    this.animationLeaveTimer = setTimeout(() => {
      this.item?.classList.remove(this.HOVER_CLASS)
      this.item?.classList.remove(this.HOVER_LEAVE_CLASS)
      this.item?.classList.remove(this.HOVER_TEXT_CLASS)
    }, this.LEAVE_ANIM_TIME)
    this.animationLeaveIndexTimer = setTimeout(() => {
      this.item?.classList.remove(this.HOVER_INDEX_CLASS)
    }, this.LEAVE_ANIM_INDEX_TIME)
  }

  init () {
    this.item?.addEventListener('mouseover', this.animateItemOnHover)
    this.item?.addEventListener('mouseleave', this.animateItemOnHoverLeave)
  }
}
