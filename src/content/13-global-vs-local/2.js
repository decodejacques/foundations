export let s139 = `let n = { name: 'bob' }
let gSetName = (newName) => {
    n.name = newName
}
let create = (name) => {
    let r = { name: name }
    return r
}
gSetName('eric')
n = create('betty')
`
export let s140 = [{"type":"addobject"},{"boxNumber":0,"boxColumn":"right","name":"name","type":"addrow"},{"boxNumber":0,"column":"right","primitive":"\"bob\"","row":0,"type":"primitive"},{"boxNumber":0,"boxColumn":"left","name":"n","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":2},{"boxNumber":0,"boxColumn":"left","name":"gSetName","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":5},{"boxNumber":0,"boxColumn":"left","name":"create","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"newName","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"\"eric\"","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":9},{"boxNumber":0,"column":"right","primitive":"\"eric\"","row":0,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"addframe"},{"boxNumber":1,"boxColumn":"left","name":"name","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"\"betty\"","row":0,"type":"primitive"},{"type":"pushcallstack","lineNumber":10},{"type":"addobject"},{"boxNumber":3,"boxColumn":"right","name":"name","type":"addrow"},{"boxNumber":3,"column":"right","primitive":"\"betty\"","row":0,"type":"primitive"},{"boxNumber":1,"boxColumn":"left","name":"r","type":"addrow"},{"originBox":1,"destinationBox":3,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"destroyframe"},{"type":"popcallstack"},{"originBox":0,"destinationBox":3,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"}]