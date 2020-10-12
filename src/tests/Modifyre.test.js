import Modifyre from '../Modifyre.ts'

describe('Class Modifyre', () => {
   let modifyre

   beforeEach(() => {
      modifyre = new Modifyre()
   })

   test('conversionFromInfix Method', () => {
      modifyre.conversionFromInfix('25 + 32')
      expect(modifyre.outputStr).toStrictEqual(['25','32','+'])

      modifyre.conversionFromInfix('25 + 32 - 52 x 12,8')
      expect(modifyre.outputStr).toStrictEqual(['25','32','+','52','12.8','x','-'])

      modifyre.conversionFromInfix('13 + (2 + 42 x 15) - 2')
      expect(modifyre.outputStr).toStrictEqual(['13','2','42','15','x','+','+','2','-'])

      modifyre.conversionFromInfix('13 + (2 + (42 x 15 - 5)) - 2')
      expect(modifyre.outputStr).toStrictEqual(['13','2','42','15','x','5','-','+','+','2','-'])

      modifyre.conversionFromInfix('- 2 / 32')
      expect(modifyre.outputStr).toStrictEqual(['0','2','32','/','-'])

      modifyre.conversionFromInfix('245,7 - 123 x 5')
      expect(modifyre.outputStr).toStrictEqual(['245.7','123','5','x','-'])
   })


})