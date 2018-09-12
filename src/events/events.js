let addrow = (boxNumber, boxColumn, name) => {
    return {
        boxNumber,
        boxColumn,
        name,
        type: "addrow"
    }
}

let addframe = () => ({ type: 'addframe' })
let destroyframe = () => ({ type: 'destroyframe' })
let addobject = () => ({ type: 'addobject' })
let addFunction = (lineNumber) => ({ type: 'addFunction', lineNumber })
let pushcallstack = (lineNumber) => ({ type: 'pushcallstack', lineNumber })
let popcallstack = () => ({ type: 'popcallstack' })
let reference = (originBox,
    destinationBox,
    originRow,
    originCol,
    destinationCol) => {
    return {
        originBox,
        destinationBox,
        originRow,
        originCol,
        destinationCol,
        type: 'reference'
    }
}

let primitive = (boxNumber, column, primitive, row) => {
    return {
        boxNumber,
        column,
        primitive,
        row,
        type: 'primitive'
    }
}

module.exports = {
    addrow,
    addframe,
    destroyframe,
    addobject,
    addFunction,
    pushcallstack,
    popcallstack,
    reference,
    primitive
}