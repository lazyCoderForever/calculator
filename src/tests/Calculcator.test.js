import Calculator from '../Calculator.ts'

describe('Class Calculator', () => {
   let calculator

   beforeEach(() => {
      calculator = new Calculator()
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
    expect(calculator.calculateResultValue(['253', '32', '-', '53', '12', 'x', '2', '/', '+'])).toBe(539)
    expect(calculator.calculateResultValue(['546', '12', '2', 'x', '+', '5', '%', '+'])).toBe(598.5)
    expect(calculator.calculateResultValue(['756.76', '23', '/', '2', 'x', '12', '/', '13', '-'])).toBe(-7.516)
    expect(calculator.calculateResultValue(['36', '√', '126', 'x', '256', '√', '+'])).toBe(772)
    expect(calculator.calculateResultValue(['256.347', '25.36', '/', '2', 'x', '774', '√', '+'])).toBe(48.037)
   })
})