export let s79 = `let double = (x) => {
    return x * 2
}
let y = 5
let d = double(y)
let z = {the: {number: 3}}
let e = double(z.the.number)
`
export let s80 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"double","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"boxNumber":0,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"5","row":1,"type":"primitive"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"5","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":5},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"d","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"10","row":2,"type":"primitive"},{"type":"addobject"},{"boxNumber":1,"boxColumn":"right","name":"number","type":"addrow"},{"boxNumber":1,"column":"right","primitive":"3","row":0,"type":"primitive"},{"type":"addobject"},{"boxNumber":2,"boxColumn":"right","name":"the","type":"addrow"},{"originBox":2,"destinationBox":1,"originRow":0,"originCol":"right","destinationCol":"right","type":"reference"},{"boxNumber":0,"boxColumn":"left","name":"z","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":3,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"3","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":7},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"e","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"6","row":4,"type":"primitive"}]