import { operatorsAndPriority } from './static/calcOperators'

export default class Calculator {
   operationsStack: string[]
   outputStr: string[]
   calculatedResult: number

   constructor() {
      (this.operationsStack = []),
         (this.outputStr = []),
         (this.calculatedResult = 0)
   }

   mathOperation(operator: string, vault: number[]): number | undefined {
      let resultOperation = 0
      switch (operator) {
         case 'x':
            resultOperation = +(
               vault[vault.length - 1] * vault[vault.length - 2]
            ).toFixed(3)
            vault.pop()
            vault.pop()
            return resultOperation
         case '/':
            resultOperation = +(
               vault[vault.length - 2] / vault[vault.length - 1]
            ).toFixed(3)
            vault.pop()
            vault.pop()
            return resultOperation
         case '%':
            resultOperation = +(
               (vault[vault.length - 1] * vault[vault.length - 2]) /
               100
            ).toFixed(3)
            vault.pop()
            return resultOperation
         case '√':
            resultOperation = +(Math.sqrt(vault[vault.length - 1])).toFixed(3)
            vault.pop()
            return resultOperation
         case '+':
            resultOperation = +(
               vault[vault.length - 1] + vault[vault.length - 2]
            ).toFixed(3)
            vault.pop()
            vault.pop()
            return resultOperation
         case '-':
            resultOperation = +(
               vault[vault.length - 2] - vault[vault.length - 1]
            ).toFixed(3)
            vault.pop()
            vault.pop()
            return resultOperation
      }
   }

   calculateResultValue(): number {
      const vaultForOperands: number[] = []
      this.calculatedResult = 0

      this.outputStr.forEach((el: string) => {
         const elNumber: number = +el

         if (!isNaN(elNumber)) {
            vaultForOperands.push(elNumber)
         } else {
            this.calculatedResult = this.mathOperation(
               el,
               vaultForOperands
            ) as number
            vaultForOperands.push(this.calculatedResult)
         }
      })
      return this.calculatedResult
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

      splitAndClearInputExample.forEach((element: string) => {
         const elNumber: number = +element
         // ========== element number or '(' ============
         if (!isNaN(elNumber) || element === '(') {
            element === '('
               ? this.operationsStack.push(element)
               : this.outputStr.push(element)
            return 0
         }
         // ========== /,*,+,-,% ============
         if (operatorsAndPriority.hasOwnProperty(element)) {
            const operationsStackLastElement: number =
               this.operationsStack.length - 1
            if (
               operatorsAndPriority[
                  this.operationsStack[operationsStackLastElement]
               ] >= operatorsAndPriority[element]
            ) {
               const operatorFromStack: string = this.operationsStack.pop() as string
               this.operationsStack.push(element)
               this.outputStr.push(operatorFromStack)
               return 0
            } else {
               this.operationsStack.push(element)
               return 0
            }
         }
         // ========= ) =========
         if (element === ')') {
            let flagStopPoint: boolean = true
            while (flagStopPoint ) {
               // while not find '(' or empty stack
               const OperationStacklength: number = this.operationsStack.length
               if (this.operationsStack[OperationStacklength - 1] === '(') {
                  flagStopPoint = false
                  this.operationsStack.pop()
               } else {
                  if (OperationStacklength > 0){
                     this.outputStr.push(this.operationsStack.pop() as string)
                  } else {
                     flagStopPoint = false
                  }
               }
            }
            return 0
         }
      })

      for (const index = 0; index < this.operationsStack.length; ) {
         this.outputStr.push(this.operationsStack.pop() as string)
      }
      this.operationsStack = []
   }
}
