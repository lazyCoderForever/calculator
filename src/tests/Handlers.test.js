import Handlers from '../Handlers.ts'

// handlers.getPressedButton({target: clearButton}) - for clear data, emulation press 'C'

describe('Class Handlers:',()=>{
  document.body.innerHTML =
  '<div>' +
  '  <span class="result_example" />' +
  '  <input class="field_input-value" />' +
  '  <div class="interface_calculator">' +
  '<span class="button " data-value="C">C</span>' + 
  '<span class="button " data-value="√">√</span>' + 
  '<span class="button " data-value="%">%</span>' +
  '<span class="button " data-value="/">/</span>' +
  '<span class="button " data-value="7">7</span>' +
  '<span class="button " data-value="8">8</span>' + //buttons[5]
  '<span class="button " data-value="9">9</span>' +
  '<span class="button " data-value="x">x</span>' +
  '<span class="button "data-value="4">4</span>' +
  '<span class="button " data-value="5">5</span>' +
  '<span class="button " data-value="6">6</span>' + //buttons[10]
  '<span class="button " data-value="-">-</span>' +
  '<span class="button " data-value="1">1</span>' +
  '<span class="button " data-value="2">2</span>' +
  '<span class="button " data-value="3">3</span>' +
  '<span class="button " data-value="+">+</span>' + //buttons[15]
  '<span class="button " data-value="00">00</span>' +
  '<span class="button " data-value=",">,</span>' +
  '<span class="button " data-value="=">=</span>'+
  '</div>'+
  '</div>';

  let handlers;
  let clearButton;

  beforeEach(() => {
    handlers = new Handlers()
    clearButton = document.querySelectorAll('.button')[0]
  })
  
  test('getInputSymbol Method', () => {
    // null - "backspace" on keyboard
    // {data: 'el'} - <input class="field_input-value" /> symbol from keyboard after press buhandlerson

     handlers.getInputSymbol({data: '2'})
     expect(handlers.userInputValue).toBe('2')

     handlers.getInputSymbol({data: '42'})
     expect(handlers.userInputValue).toBe('242')

     handlers.getInputSymbol({data: null})
     expect(handlers.userInputValue).toBe('24')

     handlers.getInputSymbol({data: '+'})
     expect(handlers.resultField.innerText).toBe('24 + ')
     expect(handlers.inputField.value).toBe('')
     expect(handlers.userInputValue).toBe('')
     expect(handlers.userExample).toBe('24 + ')

     handlers.getInputSymbol({data: '('})
     handlers.getInputSymbol({data: '1'})
     expect(handlers.userInputValue).toBe('(1')

     handlers.getInputSymbol({data: '*'})
     expect(handlers.resultField.innerText).toBe('24 + (1 x ')
     expect(handlers.inputField.value).toBe('')

     handlers.getInputSymbol({data: '3)'})
     handlers.getInputSymbol({data: '-'})
     expect(handlers.resultField.innerText).toBe('24 + (1 x 3) - ')
     expect(handlers.inputField.value).toBe('')
     expect(handlers.userInputValue).toBe('')
     expect(handlers.userExample).toBe('24 + (1 x 3) - ')

     handlers.getInputSymbol({data: null})
     handlers.getInputSymbol({data: null})
     handlers.getInputSymbol({data: '.'})
     expect(handlers.userInputValue).toBe(',')

     handlers.getInputSymbol({data: null})
     handlers.getInputSymbol({data: ','})
     expect(handlers.userInputValue).toBe(',')
  })

  test('getPressedButton Method', ()=>{
    const buttons = document.querySelectorAll('.button')

    handlers.getPressedButton({target:buttons[5]})
    expect(handlers.inputField.value).toBe('8')
    expect(handlers.userInputValue).toBe('8')

    handlers.getPressedButton({target:buttons[14]})
    expect(handlers.inputField.value).toBe('83')
    expect(handlers.userInputValue).toBe('83')

    handlers.getPressedButton({target:buttons[17]})
    handlers.getPressedButton({target:buttons[4]})
    expect(handlers.inputField.value).toBe('83,7')
    expect(handlers.userInputValue).toBe('83,7')

    handlers.getPressedButton({target:buttons[15]})
    expect(handlers.resultField.innerText).toBe('83,7 + ')
    expect(handlers.inputField.value).toBe('')
    expect(handlers.userExample).toBe('83,7 + ')
    expect(handlers.userInputValue).toBe('')

    handlers.getPressedButton({target:buttons[5]})
    expect(handlers.inputField.value).toBe('8')
    expect(handlers.userExample).toBe('83,7 + ')
    expect(handlers.userInputValue).toBe('8')

    handlers.getPressedButton({target:buttons[18]})
    expect(handlers.resultField.innerText).toBe('83,7 + 8')
    expect(handlers.inputField.value).toBe('91,7')
    expect(handlers.userExample).toBe('')
    expect(handlers.userInputValue).toBe('91,7')

    handlers.getPressedButton({target:buttons[0]})
    expect(handlers.resultField.innerText).toBe('')
    expect(handlers.inputField.value).toBe('')
    expect(handlers.userExample).toBe('')
    expect(handlers.userInputValue).toBe('')

  })

  test('updateExampleFieldAndData Method', ()=>{
    handlers.userInputValue = '25'
    handlers.updateExampleFieldAndData('x')
    expect(handlers.resultField.innerText).toBe('25 x ')
    expect(handlers.inputField.value).toBe('')
    expect(handlers.userExample).toBe('25 x ')
    expect(handlers.userInputValue).toBe('')

    handlers.getPressedButton({target: clearButton})

    handlers.userInputValue = '36'
    handlers.updateExampleFieldAndData('√')
    expect(handlers.resultField.innerText).toBe('36 √ ')
    expect(handlers.inputField.value).toBe('')
    expect(handlers.userExample).toBe('36 √ ')
    expect(handlers.userInputValue).toBe('')

    handlers.getPressedButton({target: clearButton})

    handlers.userExample = '152 + '
    handlers.userInputValue = '44'
    handlers.updateExampleFieldAndData('=')
    expect(handlers.resultField.innerText).toBe('152 + 44')
    expect(handlers.inputField.value).toBe('')
    expect(handlers.userExample).toBe('152 + 44')
    expect(handlers.userInputValue).toBe('')
  })
})