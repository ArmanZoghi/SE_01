const isGameWon = false
const table = [
    'r', 'r', 'r', 'r', 'r',
    'r', 'r', 'r', 'r', 'r',
    'r', 'r', 'r', 'r', 'r',
    'r', 'r', 'r', 'r', 'r',
    'r', 'r', 'r', 'r', 'r'
]
const tableDim = Math.sqrt(table.length)
const colors = ['r', 'g', 'b', 'off']

const bringNextColor = (index) => {
    const currentColor = table[index]
    const currentIndex = colors.indexOf(currentColor)
    const nextIndex = (currentIndex + 1) % 4
    return colors[nextIndex]
}

const checkWon = () => {
    const isR = table.indexOf('r')
    const isG = table.indexOf('g')
    const isB = table.indexOf('b')
    if(isR === -1 && isG === -1 && isB === -1) {
        isGameWon= true
    }
}

const makeToggle = (index) => {
    table[index] = bringNextColor(index)

    if(index < tableDim) {
        if(index === 0) {
            table[index + 1] = bringNextColor(index + 1)
            table[index + tableDim] = bringNextColor(index + tableDim)
        } else if(index === tableDim - 1){
            table[index - 1] = bringNextColor(index - 1)
            table[index + tableDim] = bringNextColor(index + tableDim)
        } else {
            table[index + 1] = bringNextColor(index + 1)
            table[index - 1] = bringNextColor(index - 1)
            table[index + tableDim] = bringNextColor(index + tableDim)
        }
    } else if(index >= (tableDim - 1) * tableDim  && index < tableDim * tableDim){
        if(index === (tableDim - 1) * tableDim) {
            table[index + 1] = bringNextColor(index + 1)
            table[index - tableDim] = bringNextColor(index - tableDim)
        } else if(tableDim * tableDim - 1) {
            table[index - 1] = bringNextColor(index - 1)
            table[index - tableDim] = bringNextColor(index - tableDim)
        } else {
            table[index + 1] = bringNextColor(index + 1)
            table[index - 1] = bringNextColor(index - 1)
            table[index - tableDim] = bringNextColor(index - tableDim)
        }
    } else {
        if(index % tableDim === 0) {
            table[index + 1] = bringNextColor(index + 1)
            table[index - tableDim] = bringNextColor(index - tableDim)
            table[index + tableDim] = bringNextColor(index + tableDim)
        } else if(index % tableDim === tableDim - 1) {
            table[index - 1] = bringNextColor(index - 1)
            table[index - tableDim] = bringNextColor(index - tableDim)
            table[index + tableDim] = bringNextColor(index + tableDim)
        } else {
            table[index + 1] = bringNextColor(index + 1)
            table[index - 1] = bringNextColor(index - 1)
            table[index - tableDim] = bringNextColor(index - tableDim)
            table[index + tableDim] = bringNextColor(index + tableDim)
        }
    }
}

const toggle = () => {
    console.log(table)
    let toggleIndex = prompt('index')
    makeToggle(parseInt(toggleIndex))
    alert(table)
    checkWon()
}
do {
    toggle()
}
while(!isGameWon)

if(isGameWon) {
    console.log('You won')
}