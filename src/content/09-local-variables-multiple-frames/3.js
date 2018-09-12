export let s91 = `let a = 12
let g = (y) => {
    let z = 10
    y = y + z + a
    return 0
}
let f = (z) => {
    let x = 15
    z = x + 1
    x = z + 1
    g(x + 5)
    return 0
}
f(1)
`
export let s92 = [{"boxNumber":0,"boxColumn":"left","name":"a","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"12","row":0,"type":"primitive"},{"type":"addFunction","lineNumber":2},{"boxNumber":0,"boxColumn":"left","name":"g","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":7},{"boxNumber":0,"boxColumn":"left","name":"f","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"1","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":14},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"15","row":1,"type":"primitive"},{"boxNumber":1,"column":"left","primitive":"16","row":0,"type":"primitive"},{"boxNumber":1,"column":"left","primitive":"17","row":1,"type":"primitive"},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"22","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":11},{"boxNumber":2,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"10","row":1,"type":"primitive"},{"boxNumber":2,"column":"left","primitive":"44","row":0,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"destroyframe"},{"type":"popcallstack"}]