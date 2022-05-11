const isGameWon = false
const table = [
    true, true, true,
    true, true, true,
    true, true, true
]
const tableDim = 3

const checkWon = () => {
    const isWin = table.indexOf(true)
    if(isWin === -1) {
        isGameWon= true
    }
}

const makeToggle = (index) => {
    table[index] = !table[index]

    if(index < tableDim) {
        if(index === 0) {
            table[index + 1] = !table[index + 1]
            table[index + tableDim] = !table[index + tableDim]
        } else if(index === 2){
            table[index - 1] = !table[index - 1] 
            table[index + tableDim] = !table[index + tableDim]
        } else {
            table[index + 1] = !table[index + 1]
            table[index - 1] = !table[index - 1] 
            table[index + tableDim] = !table[index + tableDim]
        }
    } else if(index >= (tableDim - 1) * tableDim  && index < tableDim * tableDim){
        if(index === (tableDim - 1) * tableDim) {
            table[index + 1] = !table[index + 1]
            table[index - tableDim] = !table[index - tableDim]
        } else if(tableDim * tableDim - 1) {
            table[index - 1] = !table[index - 1] 
            table[index - tableDim] = !table[index - tableDim]
        } else {
            table[index + 1] = !table[index + 1]
            table[index - 1] = !table[index - 1] 
            table[index - tableDim] = !table[index - tableDim]
        }
    } else {
        if(index % tableDim === 0) {
            table[index + 1] = !table[index + 1]
            table[index - tableDim] = !table[index - tableDim]
            table[index + tableDim] = !table[index + tableDim]
        } else if(index % tableDim === tableDim - 1) {
            table[index - 1] = !table[index - 1]
            table[index - tableDim] = !table[index - tableDim]
            table[index + tableDim] = !table[index + tableDim]
        } else {
            table[index + 1] = !table[index + 1]
            table[index - 1] = !table[index - 1]
            table[index - tableDim] = !table[index - tableDim]
            table[index + tableDim] = !table[index + tableDim]
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