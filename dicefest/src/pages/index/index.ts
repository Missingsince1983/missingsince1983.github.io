import HeaderController from '../../modules/header/controller'
import { InitGridLayout } from './components/indexGrid/controller'
import { InitGridItemAnimation } from './components/indexGridItem/controller'
import './style.scss'

(
  () => {
    document.querySelectorAll('.j-header').forEach(elem => {
      new HeaderController(elem as HTMLDivElement)
    })
    document.querySelectorAll('.j-grid').forEach(elem => {
      new InitGridLayout(elem as HTMLDivElement)
    })
    document.querySelectorAll('.j-animate-item').forEach(elem => {
      new InitGridItemAnimation(elem as HTMLDivElement)
    })
  })()
