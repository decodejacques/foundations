export let s109 = `let inc = (x) => {
    return x + 1
}
let inc2 = (y) => {
    inc(y)
}
let z = inc2(6)
`
export let s110 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"inc","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":4},{"boxNumber":0,"boxColumn":"left","name":"inc2","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"6","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":7},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"6","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":5},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"undefined","row":2,"type":"primitive"}]