export let s81 = `let sub = (x) => {
    return x - 1
}
let a = 5
let inc = (y) => {
    return y + 1
}
let b = inc(a)
let c = sub(b)
let d = inc(b)
let e = inc(c)
`
export let s82 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"sub","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"boxNumber":0,"boxColumn":"left","name":"a","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"5","row":1,"type":"primitive"},{"type":"addFunction","lineNumber":5},{"boxNumber":0,"boxColumn":"left","name":"inc","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"5","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":8},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"b","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"6","row":3,"type":"primitive"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"6","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":9},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"c","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"5","row":4,"type":"primitive"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"6","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":10},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"d","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"7","row":5,"type":"primitive"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"5","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":11},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"e","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"6","row":6,"type":"primitive"}]