export default class Calculator {
   calculatedResult: number

   constructor() {
      this.calculatedResult = 0
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
            resultOperation = +Math.sqrt(vault[vault.length - 1]).toFixed(3)
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

   calculateResultValue(postfixExample: string[]): number {
      const vaultForOperands: number[] = []
      this.calculatedResult = 0
      postfixExample.forEach((el: string) => {
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
}
