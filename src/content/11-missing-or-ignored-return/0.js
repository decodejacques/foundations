export let s105 = `let inc = (x) => {
    x + 1
}
let double = y => {
    return y * 2
}
let a = inc(6)
double(4)
`
export let s106 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"inc","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":4},{"boxNumber":0,"boxColumn":"left","name":"double","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"6","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":7},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"a","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"undefined","row":2,"type":"primitive"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"4","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":8},{"type":"destroyframe"},{"type":"popcallstack"}]