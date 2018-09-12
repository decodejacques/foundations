export let s103 = `let x = (g) => {
    let r = g(1)
    return r
}
let y = () => {
    let r = (x) => {
        let z = x * 2
        return z
    }
    return r
}
let a = y()
let b = x(a)
let c = a(b)
`
export let s104 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"x","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":5},{"boxNumber":0,"boxColumn":"left","name":"y","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":12},{"type":"addFunction","lineNumber":6},{"boxNumber":1,"boxColumn":"left","name":"r","type":"addrow"},{"originBox":1,"destinationBox":2,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"a","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"g","type":"addrow"},{"originBox":1,"destinationBox":2,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"pushcallstack","lineNumber":13},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"1","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":2},{"boxNumber":2,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"2","row":1,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"r","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"2","row":1,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"b","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"2","row":3,"type":"primitive"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"2","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":14},{"boxNumber":1,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"4","row":1,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"c","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"4","row":4,"type":"primitive"}]