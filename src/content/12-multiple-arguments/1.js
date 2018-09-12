export let s119 = `let square = (x) => {
    return x * x
}
let sumSquares = (x,y) => {
    let xSquared = square(x)
    let ySquared = square(y)
    return xSquared + ySquared
}
let twelve = sumSquares(2,3)
`
export let s120 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"square","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":4},{"boxNumber":0,"boxColumn":"left","name":"sumSquares","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"2","row":0,"type":"primitive"},{"boxNumber":1,"boxColumn":"left","name":"y","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"3","row":1,"type":"primitive"},{"type":"pushcallstack","lineNumber":9},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"2","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":5},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"xSquared","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"4","row":2,"type":"primitive"},{"type":"addframe"},{"boxNumber":2,"boxColumn":"left","name":"x","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"3","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":6},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"ySquared","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"9","row":3,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"twelve","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"13","row":2,"type":"primitive"}]