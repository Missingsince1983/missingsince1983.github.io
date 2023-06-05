export class InitGridLayout {
  private grid: HTMLElement | null;
  private items: HTMLElement[] | null;
  private filterAllButton: HTMLElement | null;
  private filterButtonList: HTMLElement[] | null;
  private selectedFilterList: string[] = [];

  private SELECTED_FILTER_CLASS = '_selected'

  constructor (private block: HTMLDivElement) {
    this.grid = this.block.querySelector('.j-grid-layout')
    this.items = Array.from(this.block.querySelectorAll('.j-item'))
    this.filterAllButton = this.block.querySelector('.j-grid-filter-all')
    this.filterButtonList = Array.from(this.block.querySelectorAll('.j-grid-filter'))

    this.init()
  }

  init () {
    if (this.grid && this.items && this.filterButtonList && this.filterAllButton) {
      const muuriGrid = new Muuri(this.grid, {
        layout: {
          fillGaps: true
        }
      })

      const clearAllFilters = () => {
        this.filterAllButton?.classList.remove(this.SELECTED_FILTER_CLASS)
        this.filterButtonList?.forEach(item => {
          item.classList.remove(this.SELECTED_FILTER_CLASS)
        })
      }

      const refreshGridAfterClassModify = () => {
        muuriGrid.refreshItems(muuriGrid.getItems())
        muuriGrid.layout()
      }

      const filterGridAfterSelectFilter = () => {
        this.filterAllButton?.classList.remove(this.SELECTED_FILTER_CLASS)
        if (this.selectedFilterList.length) {
          muuriGrid.filter((item: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
            const itemClassStr = Array.from(item.getElement().classList).join(',')
            return this.selectedFilterList.some(i => itemClassStr.includes(i))
          })
        } else {
          this.filterAllButton?.classList.add(this.SELECTED_FILTER_CLASS)
        }
        muuriGrid.sort(muuriGrid.getItems().reverse())
        refreshGridAfterClassModify()
      }

      this.filterButtonList.forEach(item => {
        item.addEventListener('click', (e) => {
          const item = e.target as HTMLElement
          if (item) {
            const filterValue = item.dataset.filter || ''
            const isSelected = item.classList.contains(this.SELECTED_FILTER_CLASS)
            if (isSelected) {
              item.classList.remove(this.SELECTED_FILTER_CLASS)
              this.selectedFilterList = this.selectedFilterList.filter(i => i !== filterValue)
            } else {
              item.classList.add(this.SELECTED_FILTER_CLASS)
              this.selectedFilterList.push(filterValue)
            }
            filterGridAfterSelectFilter()
          }
        })
      })

      this.filterAllButton.addEventListener('click', (e) => {
        clearAllFilters();
        (e.target as HTMLElement).classList.add(this.SELECTED_FILTER_CLASS)
        muuriGrid.filter('.j-item')
        refreshGridAfterClassModify()
      })
    }
  }
}
