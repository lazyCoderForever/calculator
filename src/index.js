import Calculator from './Calculator.ts';
import Handlers from './Handlers.ts';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', function() {
    const handlers = new Handlers()
    handlers.addInputListener()
    handlers.addButtonListener()
    const calculator = new Calculator()
    new Promise((resolve,reject) =>{
        calculator.conversionFromInfix('12 + 4 + 5 x ( ( 21 + 32 ) x 2 )')
    }).then(calculator.calculateResultValue())
    
});
