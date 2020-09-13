import {operators} from './calcOperators'

export default class Handlers {
  userExample: string
  userInputValue: string
  resultField: HTMLElement
  inputField: HTMLInputElement

  constructor() {
    this.userExample = '',
    this.userInputValue = '',
    this.resultField = document.querySelector(
      '.result_example'
    ) as HTMLElement,
    this.inputField = document.querySelector(
      '.field_input-value '
    ) as HTMLInputElement
  }

  getUserExample(): string{
    return this.userExample 
  }

  updateExampleFieldAndData(targetData: string): number | undefined {
    if (targetData !== '') {
      this.userExample += `${this.userInputValue} ${operators[targetData]} `
      this.resultField.innerText = `${this.userExample}`
      this.userInputValue = ''
      this.inputField.value = ''
      return 0
    }
    this.userExample = ''
    this.userInputValue = ''
    this.resultField.innerText = ''
    this.inputField.value = ''
  }

  updateInputField(): void {
    this.inputField.value = `${this.userInputValue}`
  }

  getInputExample(el: InputEvent): number | undefined {
    const targetData: string | null = el.data

    if (targetData === null) {
      this.userInputValue = this.userInputValue.slice(
        0,
        this.userInputValue.length - 1
      )
      return 0
    }
    if (!/(\d|\W|)/.test(targetData)) {
      this.inputField.value = this.userInputValue
    } else if (operators.hasOwnProperty(targetData)) {
      this.updateExampleFieldAndData(targetData)
    } else {
      this.userInputValue += targetData === '.' ? ',' : targetData
      this.updateInputField()
    }
  }

  getInputButton(e: MouseEvent): number | undefined {
    const eventTarget = e.target as HTMLElement
    const targetValueAttribute = eventTarget.getAttribute(
      'data-value'
    ) as string

    if (/\d/.test(targetValueAttribute)) {
      this.userInputValue += targetValueAttribute
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
      case '√':
        this.updateExampleFieldAndData('√')
        break
      case '%':
        this.updateExampleFieldAndData('%')
        break

      case '=':
        //this.updateExampleFieldAndData('=')
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
      btn.addEventListener('click', (e: any) => this.getInputButton(e))
    })
  }

  addInputListener(): void {
    this.inputField.addEventListener('input', (e: any) =>
      this.getInputExample(e)
    )
    this.inputField.addEventListener('keydown', (e: any) => {
      if (
        e.code === 'ArrowUp' ||
        e.code === 'ArrowDown' ||
        e.code === 'ArrowLeft' ||
        e.code === 'ArrowRight'
      ) {
        e.preventDefault()
      }
    })
  }
}
