import Calculator from './Calculator.ts';
import Handlers from './Handlers.ts';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', function(event) {
    const handlers = new Handlers()
    handlers.addInputListener()
    handlers.addButtonListener()
});
