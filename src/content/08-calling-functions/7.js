export let s63 = `let f = () => {
    let y = (c) => {
        return c * 2
    }
    return y
}

let z = f()
let k = z(4)
`
export let s64 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"f","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":8},{"type":"addFunction","lineNumber":2},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"originBox":1,"destinationBox":1,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"z","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"c","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"4","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":9},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"k","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"8","row":2,"type":"primitive"}]