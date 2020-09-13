import { operatorsAndPriority as mathOperation } from './calcOperators'

export default class Calculator {
  operationsStack: string[]
  outputStr: string[]
  calculatedResult: string

  constructor() {
    ;(this.operationsStack = []),
      (this.outputStr = []),
      (this.calculatedResult = '')
  }

  mathOperation(operator: string, vault: number[]): number | undefined {
    let resultOperation = 0
    switch (operator) {
      case 'x':
        resultOperation = vault[vault.length - 1] * vault[vault.length - 2]
        vault.pop()
        vault.pop()
        return resultOperation
      case '/':
        resultOperation = vault[vault.length - 1] / vault[vault.length - 2]
        vault.pop()
        vault.pop()
        return resultOperation
      case '%':
        resultOperation = vault[vault.length - 1] % vault[vault.length - 2]
        vault.pop()
        vault.pop()
        return resultOperation
      case '√':
        resultOperation = Math.sqrt(vault[vault.length - 1])
        vault.pop()
        vault.pop()
        return resultOperation
      case '+':
        resultOperation = vault[vault.length - 1] + vault[vault.length - 2]
        vault.pop()
        vault.pop()
        return resultOperation
      case '-':
        resultOperation = vault[vault.length - 1] - vault[vault.length - 2]
        vault.pop()
        vault.pop()
        return resultOperation
    }
  }

  calculateResultValue() {
    const vaultForOperands: number[] = []
    let tempResult: number = 0

    this.outputStr.forEach((el: string) => {
      const elNumber: number = +el

      if (!isNaN(elNumber)) {
        vaultForOperands.push(elNumber)
      } else {
        tempResult = this.mathOperation(el, vaultForOperands) as number
        vaultForOperands.push(tempResult)
      }
    })
  }

  conversionFromInfix(inputExample: string): void {
    // =========== add whitespace and replace ','===========
    inputExample.replace(',', '.')
    inputExample.replace('(', '( ')
    inputExample.replace(')', ' )')

    const splitInputExample: string[] = inputExample.split(' ')
    splitInputExample.forEach((element: string) => {
      const elNumber: number = +element
      // ========== element number or '(' ============
      if (!isNaN(elNumber) || element === '(') {
        element === '('
          ? this.operationsStack.push(element)
          : this.outputStr.push(element)
        return 0
      }
      // ========== /,*,+,-,% ============
      if (mathOperation.hasOwnProperty(element)) {
        const operationsStackLastElement: number = this.operationsStack.length - 1
        if (
          mathOperation[this.operationsStack[operationsStackLastElement]] >=
          mathOperation[element]
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
        while (flagStopPoint) {
          // while not find '(' or empty stack
          // !!!!!!!!!!!!!!!!!!!!!!!!!!1Проверка на пустоту массива, если пусть - то ошибка
          const OperationStacklength: number = this.operationsStack.length
          if (this.operationsStack[OperationStacklength - 1] === '(') {
            flagStopPoint = false
            this.operationsStack.pop()
          } else {
            this.outputStr.push(this.operationsStack.pop() as string)
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
