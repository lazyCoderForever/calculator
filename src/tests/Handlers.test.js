import Handlers from '../Handlers.ts'
import userEvent from '@testing-library/user-event'
import html from '../index.html';


describe('Class Handlers:', () => {
   document.body.innerHTML = html

      let handlers
      let clearButton
      let summaryButton
      let resultField
      let inputField

      beforeEach(() => {
         handlers = new Handlers()
         handlers.addInputListener()
         handlers.addButtonListener()

         resultField = document.querySelector('.result_example'),
         inputField = document.querySelector('.field_input-value ')
         clearButton = document.querySelectorAll('.button')[0]
         summaryButton = document.querySelectorAll('.button')[19]
         userEvent.click(clearButton)
      })
   
      test('getInputSymbol Method', ()=>{

   
         userEvent.type(inputField, '23')
         expect(handlers.userInputValue).toBe('23')
         expect(inputField.value).toBe('23')
   
         userEvent.type(inputField, ',')
         userEvent.type(inputField, '89')
         expect(handlers.userInputValue).toBe('23,89')
         expect(inputField.value).toBe('23,89')
   
         userEvent.click(clearButton)
   
         userEvent.type(inputField, '45.98')
         expect(handlers.userInputValue).toBe('45,98')
         expect(inputField.value).toBe('45,98')
   
         userEvent.click(clearButton)
   
         userEvent.type(inputField, '145 + 325')
         expect(handlers.userInputValue).toBe('325')
         expect(inputField.value).toBe('325')
         expect(handlers.userExample).toBe('145 + ')
         expect(resultField.innerText).toBe('145 + ')
   
         userEvent.click(clearButton)
   
         userEvent.type(inputField, '143.34 * (33 + 23)')
         expect(handlers.userInputValue).toBe('23)')
         expect(inputField.value).toBe('23)')
         expect(handlers.userExample).toBe('143,34 x (33 + ')
         expect(resultField.innerText).toBe('143,34 x (33 + ')
   
         userEvent.click(clearButton)
   
         userEvent.type(inputField, '124/12+5%')
         expect(handlers.userInputValue).toBe('')
         expect(inputField.value).toBe('')
         expect(handlers.userExample).toBe('124 / 12 + 5 % ')
         expect(resultField.innerText).toBe('124 / 12 + 5 % ')
   
         userEvent.click(clearButton)
   
         userEvent.type(inputField, '25√')
         expect(handlers.userInputValue).toBe('')
         expect(inputField.value).toBe('')
         expect(handlers.userExample).toBe('25 √ ')
         expect(resultField.innerText).toBe('25 √ ')
      })
   
      test('getPressedButton Method',() => {
         const calculcatorButtons = document.querySelectorAll('.button')
         
         userEvent.click(calculcatorButtons[4])
         expect(handlers.userInputValue).toBe('7')
         expect(inputField.value).toBe('7')
         expect(handlers.userExample).toBe('')
         expect(resultField.innerText).toBe('')
   
         userEvent.click(clearButton)
   
         userEvent.click(calculcatorButtons[4])
         userEvent.click(calculcatorButtons[8])
         userEvent.click(calculcatorButtons[12])
         expect(handlers.userInputValue).toBe('741')
         expect(inputField.value).toBe('741')
         expect(handlers.userExample).toBe('')
         expect(resultField.innerText).toBe('')
         userEvent.click(calculcatorButtons[7])
         expect(handlers.userInputValue).toBe('')
         expect(inputField.value).toBe('')
         expect(handlers.userExample).toBe('741 x ')
         expect(resultField.innerText).toBe('741 x ')
   
         userEvent.click(clearButton)
   
         userEvent.click(calculcatorButtons[4])
         userEvent.click(calculcatorButtons[18])
         userEvent.click(calculcatorButtons[5])
         expect(handlers.userInputValue).toBe('7,8')
         expect(inputField.value).toBe('7,8')
         expect(handlers.userExample).toBe('')
         expect(handlers.userExample).toBe('')
   
         userEvent.click(clearButton)
   
         userEvent.click(calculcatorButtons[12])
         userEvent.click(calculcatorButtons[16])
         userEvent.click(calculcatorButtons[1])
         expect(handlers.userInputValue).toBe('')
         expect(inputField.value).toBe('')
         expect(handlers.userExample).toBe('100 √ ')
      })
      
      test('updateExampleFieldAndData keyboard', ()=>{
         userEvent.type(inputField, '2567+/234*-2')
         expect(handlers.userInputValue).toBe('2')
         expect(inputField.value).toBe('2')
         expect(handlers.userExample).toBe('2567 / 234 - ')
         expect(resultField.innerText).toBe('2567 / 234 - ')

         userEvent.click(clearButton)

         userEvent.type(inputField, '256+(22/2)')
         userEvent.click(summaryButton)
         //expect(handlers.userInputValue).toBe('')
         expect(inputField.value).toBe('267')
         expect(handlers.userExample).toBe('')
         expect(resultField.innerText).toBe('256 + (22 / 2)')

      })
})