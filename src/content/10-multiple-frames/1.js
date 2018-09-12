export let s83 = `let studyHard = () => {
    return "done"
}
let gotoDecode = () => {
    return studyHard()

}
let getJob = () => {
    return gotoDecode()
}
let job = getJob()
`
export let s84 = [{"type":"addFunction","lineNumber":1},{"boxNumber":0,"boxColumn":"left","name":"studyHard","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":4},{"boxNumber":0,"boxColumn":"left","name":"gotoDecode","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addFunction","lineNumber":8},{"boxNumber":0,"boxColumn":"left","name":"getJob","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addframe"},{"type":"pushcallstack","lineNumber":11},{"type":"addframe"},{"type":"pushcallstack","lineNumber":9},{"type":"destroyframe"},{"type":"popcallstack"},{"type":"destroyframe"},{"type":"popcallstack"},{"boxNumber":0,"boxColumn":"left","name":"job","type":"addrow"},{"boxNumber":0,"column":"left","primitive":"undefined","row":3,"type":"primitive"}]