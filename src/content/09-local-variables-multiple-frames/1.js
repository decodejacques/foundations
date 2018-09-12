export let s87 = `let studyHard = () => {
    return 0
}
let gotoDecode = () => {
    let r = studyHard()
    return r + 1

}
let getJob = () => {
    let r = gotoDecode() 
    return r + 1
}
let job = getJob()
`
export let s88 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"studyHard","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":4},{"boxNumber":0,"boxColumn":"left","name":"gotoDecode","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":9},{"boxNumber":0,"boxColumn":"left","name":"getJob","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":13},{"type":"addframe"},{"type":"pushcallstack","lineNumber":10},{"type":"addframe"},{"type":"pushcallstack","lineNumber":5},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":2,"boxColumn":"left","name":"r","type":"addrow"},{"boxNumber":2,"column":"left","primitive":"0","row":0,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":1,"boxColumn":"left","name":"r","type":"addrow"},{"boxNumber":1,"column":"left","primitive":"1","row":0,"type":"primitive"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"job","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"2","row":3,"type":"primitive"}]