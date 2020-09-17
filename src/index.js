import Handlers from './Handlers.ts'
import './styles/style.css'

document.addEventListener('DOMContentLoaded', function () {
   const handlers = new Handlers()
   handlers.addInputListener()
   handlers.addButtonListener()
})
