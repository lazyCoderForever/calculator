interface Operation {
   [key: string]: string
}
interface OperationPriority {
   [key: string]: number
}
const operators: Operation = {
   '*': 'x',
   x: 'x',
   х: 'x',
   '%': '%',
   '/': '/',
   '-': '-',
   '+': '+',
   '√': '√',
}

const operatorsAndPriority: OperationPriority = {
   x: 14,
   '%': 14,
   '/': 14,
   '-': 13,
   '+': 13,
   '√': 15,
}

export { operators, operatorsAndPriority }
