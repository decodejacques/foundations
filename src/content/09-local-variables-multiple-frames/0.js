export let s85 = `let a = 1
let g = z => {
    let x = z + 1
    let a = 3
    a = a + 1
    return z + x + a
}
let someFunc = x => {
    let y = 5
    let z = g(y)
    a = a + 1
    return y + x + a
}
let z = someFunc(5)
`
export let s86 = [{"boxNumber":0,"boxColumn":"left","name":"a","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"1","row":0,"type":"primitive"},{"type":"addFunction","lineNumber":2},{"boxNumber":0,"boxColumn":"left","name":"g","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":8},{"boxNumber":0,"boxColumn":"left","name":"someFunc","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"5","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":14},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"5","row":1,"type":"primitive"},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"5","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":10},{"boxNumber":2,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"6","row":1,"type":"primitive"},{"boxNumber":2,"boxColumn":"left","name":"a","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"3","row":2,"type":"primitive"},{"boxNumber":2,"column":"left","primitive":"4","row":2,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"15","row":2,"type":"primitive"},{"boxNumber":0,"column":"left","primitive":"2","row":0,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"12","row":3,"type":"primitive"}]