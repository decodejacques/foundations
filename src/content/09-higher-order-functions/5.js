export let s79 = `let f = (g) => {
    let x = g(4)
    return x
}
let y = f(z => {
    return z + 1
})
`
export let s80 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"f","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":5},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"g","type":"addrow"},{"originBox":1,"destinationBox":1,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"pushcallstack","lineNumber":5},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"4","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":2},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"5","row":1,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"5","row":1,"type":"primitive"}]