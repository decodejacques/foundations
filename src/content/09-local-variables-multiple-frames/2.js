export let s89 = `let square = (x) => {
    return x * x
}
let incSquared = (x) => {
    let xSquared = square(x)
    return xSquared + 1
}

let z = incSquared(2)
`
export let s90 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"square","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":4},{"boxNumber":0,"boxColumn":"left","name":"incSquared","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"2","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":9},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"2","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":5},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"xSquared","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"4","row":1,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"5","row":2,"type":"primitive"}]