export let s55 = `let POTUS = {name: "obama"}
let abe = {name: "abe"}
let USA = {pres: POTUS, capital: "washington"}
let japan= {sushi: true, pres: abe}
let McD = {hq: USA}
McD.hq.pres.name = "trump"
McD.hq = japan
McD.hq.pres.name = "suzuki"
USA.capital = "ottawa"
`
export let s56 = [{"type":"addobject"},{"boxNumber":0,"boxColumn":"right","name":"name","type":"addrow"},{"boxNumber":0,"column":"right","primitive":"\"obama\"","row":0,"type":"primitive"},{"boxNumber":0,"boxColumn":"left","name":"POTUS","type":"addrow"},{"originBox":0,"destinationBox":0,"originRow":0,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addobject"},{"boxNumber":1,"boxColumn":"right","name":"name","type":"addrow"},{"boxNumber":1,"column":"right","primitive":"\"abe\"","row":0,"type":"primitive"},{"boxNumber":0,"boxColumn":"left","name":"abe","type":"addrow"},{"originBox":0,"destinationBox":1,"originRow":1,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addobject"},{"boxNumber":2,"boxColumn":"right","name":"pres","type":"addrow"},{"originBox":2,"destinationBox":0,"originRow":0,"originCol":"right","destinationCol":"right","type":"reference"},{"boxNumber":2,"boxColumn":"right","name":"capital","type":"addrow"},{"boxNumber":2,"column":"right","primitive":"\"washington\"","row":1,"type":"primitive"},{"boxNumber":0,"boxColumn":"left","name":"USA","type":"addrow"},{"originBox":0,"destinationBox":2,"originRow":2,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addobject"},{"boxNumber":3,"boxColumn":"right","name":"sushi","type":"addrow"},{"boxNumber":3,"column":"right","primitive":"true","row":0,"type":"primitive"},{"boxNumber":3,"boxColumn":"right","name":"pres","type":"addrow"},{"originBox":3,"destinationBox":1,"originRow":1,"originCol":"right","destinationCol":"right","type":"reference"},{"boxNumber":0,"boxColumn":"left","name":"japan","type":"addrow"},{"originBox":0,"destinationBox":3,"originRow":3,"originCol":"left","destinationCol":"right","type":"reference"},{"type":"addobject"},{"boxNumber":4,"boxColumn":"right","name":"hq","type":"addrow"},{"originBox":4,"destinationBox":2,"originRow":0,"originCol":"right","destinationCol":"right","type":"reference"},{"boxNumber":0,"boxColumn":"left","name":"McD","type":"addrow"},{"originBox":0,"destinationBox":4,"originRow":4,"originCol":"left","destinationCol":"right","type":"reference"},{"boxNumber":0,"column":"right","primitive":"\"trump\"","row":0,"type":"primitive"},{"originBox":4,"destinationBox":3,"originRow":0,"originCol":"right","destinationCol":"right","type":"reference"},{"boxNumber":1,"column":"right","primitive":"\"suzuki\"","row":0,"type":"primitive"},{"boxNumber":2,"column":"right","primitive":"\"ottawa\"","row":1,"type":"primitive"}]