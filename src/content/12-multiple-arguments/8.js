export let s133 = `let f = (g, h) => {
    let x = g(3)
    let y = h(2)
    return x * y
}
let k = () => {
    let h = x => {
        return x - 2
    }
    return h
}
let i = () => {
    let h = x => {
        return x * 2
    }
    return h
}

let x = k()
let y = i()
let z = f(x, y)
`
export let s134 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"f","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":6},{"boxNumber":0,"boxColumn":"left","name":"k","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":12},{"boxNumber":0,"boxColumn":"left","name":"i","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":19},{"type":"addFunction","lineNumber":7},{"boxNumber":1,"boxColumn":"left","name":"h","type":"addrow"},{"originBox":1,"destinationBox":3,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"x","type":"addrow"},{"originBox":0,"destinationBox":3,"originRow":3,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":20},{"type":"addFunction","lineNumber":13},{"boxNumber":1,"boxColumn":"left","name":"h","type":"addrow"},{"originBox":1,"destinationBox":4,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"y","type":"addrow"},{"originBox":0,"destinationBox":4,"originRow":4,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"g","type":"addrow"},{"originBox":1,"destinationBox":3,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"boxNumber":1,"boxColumn":"left","name":"h","type":"addrow"},{"originBox":1,"destinationBox":4,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"pushcallstack","lineNumber":21},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"3","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":2},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"1","row":2,"type":"primitive"},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"2","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":3},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"4","row":3,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"z","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"4","row":5,"type":"primitive"}]