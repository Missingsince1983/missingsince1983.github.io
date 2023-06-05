
export default class HeaderController {
    private burgerButton: HTMLElement | null;
    private mobileMenuBlock: HTMLDivElement | null;
    private isOpenMobileMenu = false;
    private ANIMATED_CLASS = '_animated'
    private OPEN_CLASS = '_open'

    constructor (private container: HTMLDivElement) {
      this.burgerButton = container.querySelector('.j-header-burger')
      this.mobileMenuBlock = container.querySelector('.j-header-menu')

      this.init()
    }

    init () {
      if (this.burgerButton) this.burgerButton.addEventListener('click', this.burgerClickHandler)
      this.mobileMenuBlock?.classList.add(this.ANIMATED_CLASS)
    }

    closeMenuClickHandler = () => {
      this.burgerButton?.classList.remove(this.OPEN_CLASS)
      this.mobileMenuBlock?.classList.remove(this.OPEN_CLASS)
    }

    openMenuClickHandler = () => {
      this.burgerButton?.classList.add(this.OPEN_CLASS)
      this.mobileMenuBlock?.classList.add(this.OPEN_CLASS)
    }

    getIsOpenMenu = () => {
      return this.burgerButton?.classList.contains(this.OPEN_CLASS)
    }

    burgerClickHandler = () => {
      if (this.getIsOpenMenu()) {
        this.closeMenuClickHandler()
      } else {
        this.openMenuClickHandler()
      }
    }
}
