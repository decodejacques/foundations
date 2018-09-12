export let s135 = `let x = 1
let y = 2
let f = () => {
    x = x + 3
}
let g = (x) => {
    x = x + 1
}
let h = (x) => {
    f()
}
f()
g(5)
h(3)
`
export let s136 = [{"boxNumber":0,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"1","row":0,"type":"primitive"},{"boxNumber":0,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"2","row":1,"type":"primitive"},{"type":"addFunction","lineNumber":3},{"boxNumber":0,"boxColumn":"left","name":"f","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":6},{"boxNumber":0,"boxColumn":"left","name":"g","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":3,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":9},{"boxNumber":0,"boxColumn":"left","name":"h","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":4,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":12},{"boxNumber":0,"column":"left","primitive":"4","row":0,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"5","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":13},{"boxNumber":1,"column":"left","primitive":"6","row":0,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"3","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":14},{"type":"addframe"},{"type":"pushcallstack","lineNumber":10},{"boxNumber":0,"column":"left","primitive":"7","row":0,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"destroyframe"},{"type":"popcallstack"}]