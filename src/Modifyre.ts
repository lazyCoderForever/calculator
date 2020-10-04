import { operatorsAndPriority } from './static/calcOperators'

export default class Modifyre {
   operationsStack: string[]
   outputStr: string[]

   constructor() {
      ;(this.operationsStack = []), (this.outputStr = [])
   }

   getPostfixExample(): string[] {
      return this.outputStr
   }

   closingBracketOperator(): void {
      let flagStopPoint = true
      while (flagStopPoint) {
         // while not find '(' or empty stack
         const OperationStacklength: number = this.operationsStack.length
         if (this.operationsStack[OperationStacklength - 1] === '(') {
            flagStopPoint = false
            this.operationsStack.pop()
         } else {
            // for prevention infinite cycle
            if (OperationStacklength > 0) {
               this.outputStr.push(this.operationsStack.pop() as string)
            } else {
               flagStopPoint = false
            }
         }
      }
   }

   defaultMathOperators(mathOperator: string): void {
      const operationsStackLastElement: number = this.operationsStack.length - 1
      //check operator priority in operationsStack
      if (
         operatorsAndPriority[
            this.operationsStack[operationsStackLastElement]
         ] >= operatorsAndPriority[mathOperator]
      ) {
         const operatorFromStack: string = this.operationsStack.pop() as string
         this.operationsStack.push(mathOperator)
         this.outputStr.push(operatorFromStack)
      } else {
         this.operationsStack.push(mathOperator)
      }
   }

   conversionFromInfix(inputExample: string): void {
      this.outputStr = []
      // =========== add whitespace and replace ','===========
      inputExample = inputExample.replace(/(\,)/g, '.')
      inputExample = inputExample.replace(/(\()/g, '( ')
      inputExample = inputExample.replace(/(\))/g, ' )')

      const splitInputExample: string[] = inputExample.split(' ')
      // ========== delete all whitespace
      const splitAndClearInputExample: string[] = splitInputExample.filter(
         (el: string) => {
            if (el !== '' && el !== ' ') {
               return el
            }
         }
      )
      splitAndClearInputExample.forEach((element: string, index: number) => {
         const elNumber: number = +element
         // ========== negative number ============
         if( (index === 0 && element === '-') || (this.operationsStack[this.operationsStack.length - 1] === '(') && element === '-'){
            this.operationsStack.push(element)
            this.outputStr.push('0')
            return 0
         }
         // ========== element number or '(' ============
         if (!isNaN(elNumber) || element === '(') {
            element === '('
               ? this.operationsStack.push(element)
               : this.outputStr.push(element)
            return 0
         }
         if (element === ')') {
            this.closingBracketOperator()
            return 0
         }
         // ========== /,*,+,-,% ============
         if (operatorsAndPriority.hasOwnProperty(element)) {
            this.defaultMathOperators(element)
         }
      })
      //clear from wrong '(', ')'
      this.operationsStack = this.operationsStack.filter((el: string) => {
         if (el !== '(' && el !== ')') {
            return el
         }
      })
      //push the remaining operation in outputStr
      for (const index = 0; index < this.operationsStack.length; ) {
         this.outputStr.push(this.operationsStack.pop() as string)
      }
      this.operationsStack = []
   }
}
