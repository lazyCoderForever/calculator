import Handlers from '../Handlers.ts';
jest.mock('../Handlers.ts');





// beforeEach(() => {
   
//     Handlers.mockClear();
// });

// test('Add listeners for input field ', ()=>{
//     const testInputField = document.createElement('input')
//     testInputField.classList.add('field_input-value')
//     const handlers = new Handlers();
//     handlers.getInputExample({data:'2'})
//     expect(testInputField.innerHTML).toBe('2');
//     //expect(handlers.updateExampleFieldAndData()).toHaveBeenCalledTimes(1);
//     //expect(testInputField.value).toBe('4')
    
// })