export let s77 = `let f = (g) => {
    let x = g(3)
    return x
}
let k = () => {
    let h = x => {
        return x - 2
    }
    return h
}
let x = k()
let y = f(x)
`
export let s78 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"f","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":5},{"boxNumber":0,"boxColumn":"left","name":"k","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":11},{"type":"addFunction","lineNumber":6},{"boxNumber":1,"boxColumn":"left","name":"h","type":"addrow"},{"originBox":1,"destinationBox":2,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"x","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"g","type":"addrow"},{"originBox":1,"destinationBox":2,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"pushcallstack","lineNumber":12},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"3","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":2},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"1","row":1,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"1","row":3,"type":"primitive"}]