export let s131 = `let app = (f, x) => {
    let y = f(x)
    return y
}
let d = 6
let z = app(z => {
    return z + 1
}, d)
`
export let s132 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"app","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"boxNumber":0,"boxColumn":"left","name":"d","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"6","row":1,"type":"primitive"},{"type":"addFunction","lineNumber":6},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"f","type":"addrow"},{"originBox":1,"destinationBox":1,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"6","row":1,"type":"primitive"},{"type":"pushcallstack","lineNumber":6},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"6","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":2},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"7","row":2,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"7","row":2,"type":"primitive"}]