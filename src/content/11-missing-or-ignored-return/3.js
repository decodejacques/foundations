export let s111 = `let addOne = (x) => {
    x + 1
}
let square = (x) => {
    x * x
}
let y = addOne(2)
let z = square(4)
`
export let s112 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"addOne","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":4},{"boxNumber":0,"boxColumn":"left","name":"square","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"2","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":7},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"undefined","row":2,"type":"primitive"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"4","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":8},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"undefined","row":3,"type":"primitive"}]