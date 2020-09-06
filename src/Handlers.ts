import operators from './calcOperators'

export default class Handlers {
  userExample: string
  userInputValue: string

  constructor() {
    ;(this.userExample = ''), (this.userInputValue = '')
  }

  updateExampleField(): void {
    const resultExample = document.querySelector(
      '.result_example'
    ) as HTMLElement
    resultExample.innerText = `${this.userExample}`
  }

  updateInputField(): void {
    const inputValue = document.querySelector(
      '.field_input-value'
    ) as HTMLElement
    inputValue.value = `${this.userInputValue}`
  }

  getInputExample(el: InputEvent): number | undefined {
    const targetData: string | null = el.data
    const inputField = document.querySelector(
      '.field_input-value'
    ) as HTMLInputElement
    if (targetData === null) {
      this.userInputValue = this.userInputValue.slice(
        0,
        this.userInputValue.length - 1
      )
      return 0
    }
    if (!/(\d|\W)/.test(targetData)) {
      inputField.value = this.userInputValue
      console.log(false)
    } else if (operators.hasOwnProperty(targetData)) {
      this.userExample += `${this.userInputValue} ${targetData} `
      this.userInputValue = ''
      this.updateExampleField()
      inputField.value = ''
    } else {
      this.userInputValue += targetData
    }
  }

  getInputButton(e: MouseEvent) {
      const eventTarget = e.target as HTMLElement
      const targetValueAttribute = eventTarget.getAttribute('data-value') as string

      if(/\d/.test(targetValueAttribute)){
        this.userInputValue += targetValueAttribute
        this.updateInputField()
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
    const inputField = document.querySelector(
      '.field_input-value'
    ) as HTMLElement
    inputField.addEventListener('input', (e: any) => this.getInputExample(e))
  }
}
