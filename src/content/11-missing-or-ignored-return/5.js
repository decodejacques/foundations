export let s115 = `let setName = (x) => {
    x.name = "bob"
}
let y = {name: "sue"}
let z = y
setName(z)
let name = y.name
`
export let s116 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"setName","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addobject"},{"boxNumber":1,"boxColumn":"right","name":"name","type":"addrow"},{"boxNumber":1,"column":"right","primitive":"\"sue\"","row":0,"type":"primitive"},{"boxNumber":0,"boxColumn":"left","name":"y","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"boxNumber":0,"boxColumn":"left","name":"z","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"x","type":"addrow"},{"originBox":1,"destinationBox":1,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"pushcallstack","lineNumber":6},{"boxNumber":1,"column":"right","primitive":"\"bob\"","row":0,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"name","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"\"bob\"","row":3,"type":"primitive"}]