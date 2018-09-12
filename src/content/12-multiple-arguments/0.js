export let s117 = `let x = 1
let y = 2
let z = 3
let f = (a, b, c) => {
    return (a - b) + c
}
let g = (y, z, x) => {
    return (z - y) + x
}
let a = f(z, y, x)
let b = g(z, x, y)
`
export let s118 = [{"boxNumber":0,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"1","row":0,"type":"primitive"},{"boxNumber":0,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"2","row":1,"type":"primitive"},{"boxNumber":0,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"3","row":2,"type":"primitive"},{"type":"addFunction","lineNumber":4},{"boxNumber":0,"boxColumn":"left","name":"f","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":3,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":7},{"boxNumber":0,"boxColumn":"left","name":"g","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":4,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"a","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"3","row":0,"type":"primitive"},{"boxNumber":1,"boxColumn":"left","name":"b","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"2","row":1,"type":"primitive"},{"boxNumber":1,"boxColumn":"left","name":"c","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"1","row":2,"type":"primitive"},{"type":"pushcallstack","lineNumber":10},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"a","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"2","row":5,"type":"primitive"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"3","row":0,"type":"primitive"},{"boxNumber":1,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"1","row":1,"type":"primitive"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"2","row":2,"type":"primitive"},{"type":"pushcallstack","lineNumber":11},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"b","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"0","row":6,"type":"primitive"}]