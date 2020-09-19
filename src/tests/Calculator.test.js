import Calculator from '../Calculator.ts'

describe('Class Calculator', () => {
   let calculator

   beforeEach(() => {
      calculator = new Calculator()
   })

   test('conversionFromInfix Method', () => {
      calculator.conversionFromInfix('23 + 42 - 2 x 4')
      expect(calculator.outputStr).toStrictEqual([
         '23',
         '42',
         '+',
         '2',
         '4',
         'x',
         '-',
      ])

      calculator.conversionFromInfix('16,28 + (42 - 2) / 32')
      expect(calculator.outputStr).toStrictEqual([
         '16.28',
         '42',
         '2',
         '-',
         '32',
         '/',
         '+',
      ])

      calculator.conversionFromInfix('194 x (4 + (32 - 92)) - 2')
      expect(calculator.outputStr).toStrictEqual([
         '194',
         '4',
         '32',
         '92',
         '-',
         '+',
         'x',
         '2',
         '-',
      ])

      calculator.conversionFromInfix('36 + 12)')
      expect(calculator.outputStr).toStrictEqual(['36', '12', '+'])

      calculator.conversionFromInfix('(122 + (164')
      expect(calculator.outputStr).toStrictEqual(['122', '164', '+'])

      calculator.conversionFromInfix('(122 + (164 x 84)')
      expect(calculator.outputStr).toStrictEqual(['122', '164', '84', 'x', '+'])
   })

   test('mathOperation Method', () => {
      expect(calculator.mathOperation('x', [25, 36])).toBe(900)
      expect(calculator.mathOperation('x', [13.65, 32])).toBe(436.8)
      expect(calculator.mathOperation('/', [21769, 36])).toBe(604.694)
      expect(calculator.mathOperation('/', [52.7, 12])).toBe(4.392)
      expect(calculator.mathOperation('%', [5400, 25])).toBe(1350)
      expect(calculator.mathOperation('%', [1678.742, 50])).toBe(839.371)
      expect(calculator.mathOperation('√', [2600])).toBe(50.99)
      expect(calculator.mathOperation('√', [654.574])).toBe(25.585)
      expect(calculator.mathOperation('+', [4654, 5678])).toBe(10332)
      expect(calculator.mathOperation('+', [654.574, 18.542])).toBe(673.116)
      expect(calculator.mathOperation('-', [18235, 2038])).toBe(16197)
      expect(calculator.mathOperation('-', [50.574, 64.542])).toBe(-13.968)
   })

   test('calculateResultValue Method', () => {
    calculator.outputStr =  ['253', '32', '-', '53', '12', 'x', '2', '/', '+']
    expect(calculator.calculateResultValue()).toBe(539)

    calculator.outputStr =  ['546', '12', '2', 'x', '+', '5', '%', '+']
    expect(calculator.calculateResultValue()).toBe(598.5)

    calculator.outputStr =  ['756.76', '23', '/', '2', 'x', '12', '/', '13', '-']
    expect(calculator.calculateResultValue()).toBe(-7.516)

    calculator.outputStr =  ['36', '√', '126', 'x', '256', '√', '+']
    expect(calculator.calculateResultValue()).toBe(772)

    calculator.outputStr =  ['256.347', '25.36', '/', '2', 'x', '774', '√', '+']
    expect(calculator.calculateResultValue()).toBe(48.037)
})
})
