export let s137 = `let x = 1
let y = 2
let f = () => {
    x = x + 3
    y = y + 4
}
let g = (x) => {
    x = x + 1
    y = y + 4
}
let h = (x) => {
    let y = 7
    f()
}
f()
g(5)
h(3)
`
export let s138 = [{"boxNumber":0,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"1","row":0,"type":"primitive"},{"boxNumber":0,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"2","row":1,"type":"primitive"},{"type":"addFunction","lineNumber":3},{"boxNumber":0,"boxColumn":"left","name":"f","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":7},{"boxNumber":0,"boxColumn":"left","name":"g","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":3,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":11},{"boxNumber":0,"boxColumn":"left","name":"h","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":4,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":15},{"boxNumber":0,"column":"left","primitive":"4","row":0,"type":"primitive"},{"boxNumber":0,"column":"left","primitive":"6","row":1,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"5","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":16},{"boxNumber":1,"column":"left","primitive":"6","row":0,"type":"primitive"},{"boxNumber":0,"column":"left","primitive":"10","row":1,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"3","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":17},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"7","row":1,"type":"primitive"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":13},{"boxNumber":0,"column":"left","primitive":"7","row":0,"type":"primitive"},{"boxNumber":0,"column":"left","primitive":"14","row":1,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"destroyframe"},{"type":"popcallstack"}]