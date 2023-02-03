let patient = {
    name: "jimin",
    age: 17,
    disease : "cold"
}

// patient["name"]="jk"
// patient.name="RM"
// console.log(patient["age"])
// console.log(patient["name"])


patient.age // 17이 나오게 된다.
console.log(patient["age"]) //17이라고 나온다. 배열이랑 비슷하게 나온다. 
patient.name="V"

let patientList =[{name:"jimin",age:13,},{name:"rm",age:24},{name:"jhope",age:22}]

console.log(patientList)
console.log(patientList[0]) 
///////////////////////////////////////////
console.log(patientList[0]["age"])
console.log(patientList[0].age) 
//둘다 가능하다.

console.log(patientList[0].name)