export let s79 = `let f = () => {
    return 5
}
let g = () => {
    f()
    f()
}
let h = () => {
    f()
    g()
}
h()
`
export let s80 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"f","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":4},{"boxNumber":0,"boxColumn":"left","name":"g","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":8},{"boxNumber":0,"boxColumn":"left","name":"h","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":12},{"type":"addframe"},{"type":"pushcallstack","lineNumber":9},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":10},{"type":"addframe"},{"type":"pushcallstack","lineNumber":5},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":6},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"destroyframe"},{"type":"popcallstack"}]