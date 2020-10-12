import { operators } from './static/calcOperators'
import codes from './static/forbiddenKeyboardCode'
import Calculator from './Calculator'
import Modifyre from './Modifyre'

const calculator = new Calculator()
const modifyre = new Modifyre()
export default class Handlers {
   userExample: string
   userInputValue: string
   resultField: HTMLElement
   inputField: HTMLInputElement
   newOperator: boolean

   constructor() {
      ;(this.userExample = ''),
         (this.userInputValue = ''),
         (this.newOperator = true),
         (this.resultField = document.querySelector(
            '.result_example'
         ) as HTMLElement),
         (this.inputField = document.querySelector(
            '.field_input-value'
         ) as HTMLInputElement)
   }

   clearData(size: boolean){
      if(size){
         this.userExample = ''
         this.userInputValue = ''
         this.resultField.innerText = ''
         this.inputField.value = ''
      } else{
         this.userInputValue = ''
         this.inputField.value = ''
      }
   }

   updateExampleFieldAndData(targetData: string): number | undefined {
      if (targetData !== '') {
         if (targetData === '=') {
            this.userExample += `${this.userInputValue}`
            this.resultField.innerText = `${this.userExample}`
            this.clearData(false)
            return 0
         } else if (this.newOperator === true){    
            this.userExample += `${this.userInputValue} ${operators[targetData]} `
            this.resultField.innerText = `${this.userExample}`
            this.clearData(false)
            this.newOperator = false
            return 0
         } else {
            this.userExample = this.userExample.slice(0, -3) + ` ${operators[targetData]} `
            this.resultField.innerText = `${this.userExample}`
            this.clearData(false)
            return 0
         }
      }
      this.clearData(true)
   }

   displayCalculatedValue(example: string): number {
      modifyre.conversionFromInfix(example)
      this.userExample = ''
      this.userInputValue = '' + calculator.calculateResultValue(modifyre.getPostfixExample())
      this.userInputValue = this.userInputValue.replace('.', ',')
      this.updateInputField()
      return 0
   }

   updateInputField(): void {
      this.inputField.value = `${this.userInputValue}`
   }

   //From keyboard
   getInputSymbol(el: InputEvent): number | undefined {
      const targetData: string | null = el.data
      // null - "backspace" on keyboard
      if (targetData === null) {
         this.userInputValue = this.userInputValue.slice(
            0,
            this.userInputValue.length - 1
         )
         return 0
      }
      if (/\d|\(|\)/.test(targetData)) {
         this.userInputValue += targetData
         this.newOperator = true
      } else if (operators.hasOwnProperty(targetData)) {
         this.updateExampleFieldAndData(targetData)
      } else if (targetData === '.' || targetData === ',') {
         this.userInputValue += targetData === '.' ? ',' : targetData
         this.updateInputField()
      } else {
         this.updateInputField()
      }
   }
   //From interface
   getPressedButton(e: MouseEvent): number | undefined {
      const eventTarget = e.target as HTMLElement
      const targetValueAttribute = eventTarget.getAttribute(
         'data-value'
      ) as string

      if (/\d/.test(targetValueAttribute)) {
         this.userInputValue += targetValueAttribute
         this.newOperator = true
         this.updateInputField()
         return 0
      }
      if (targetValueAttribute === ',') {
         this.userInputValue += targetValueAttribute
         this.updateInputField()
         return 0
      }
      switch (targetValueAttribute) {
         case 'C':
            this.updateExampleFieldAndData('')
            break
         case '=':
            this.updateExampleFieldAndData('=')
            this.displayCalculatedValue(this.userExample)
            break
         default:
            this.updateExampleFieldAndData(targetValueAttribute)
            break
      }
   }

   addButtonListener(): void {
      const buttonsInterface: NodeListOf<HTMLElement> = document.querySelectorAll(
         '.button'
      )
      buttonsInterface.forEach((btn: HTMLElement) => {
         btn.addEventListener('click', (e: MouseEvent) =>
            this.getPressedButton(e)
         )
      })
   }

   addInputListener(): void {
      this.inputField.addEventListener('input', (ev: any) =>
         this.getInputSymbol(ev)
      )
      this.inputField.addEventListener('keydown', (e: KeyboardEvent) => {
         if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            this.updateExampleFieldAndData('=')
            this.displayCalculatedValue(this.userExample)
            return 0
         }
         if (e.code === 'Delete') {
            this.updateExampleFieldAndData('')
            return 0
         }
         if (e.code in codes) {
            e.preventDefault()
         }
      })
   }
}
