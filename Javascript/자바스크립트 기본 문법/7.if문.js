// if(조건문이 true라면//true라고 때려 박아도 됨) {
//     조건문이 충족하면 할일들
// }

// if(true) {
//     console.log("조건문이 참입니다.")
// }else {
//     console.log("거짓입니다.")
// }

// let age =21
// if(age>20) {
//     console.log("운전이 가능합니다.") //운전이 가능합니다라고 나옴
// }else {
//     console.log("운전이 불가능합니다.")
// }

// let age =18
// if(age>20) {
//     console.log("운전이 가능합니다.") 
// }else {
//     console.log("운전이 불가능합니다.") //운전이 불가능합니다라고 나옴
// }

// let age =18
// if(age>20) {
//     console.log("운전이 가능합니다.") 
// }else if(age>=18) {
//     console.log("오토바이 운전이 가능합니다")   //오토바이 운전이 가능합니다라고 나옴
// }
// //if는 필수, else if, else는 반드시 필요하지는 않다. 


// let age =15
// if(age>20) {
//     console.log("운전이 가능합니다.") 
// }else if(age>=18) {
//     console.log("오토바이 운전이 가능합니다")   
// }else {
//     console.log("운전이 불가능합니다.") //운전이 불가능합니다라고 나옴
// }

// let age = 21
// if(age>=18 ) { //18<=age && age>20 이런 식으로 적어줘야 함!
//     console.log("오토바이 운전만 가능합니다.")
// }else if(age>20) {
//     console.log("운전이 가능합니다.")
// }else {
//     console.log("운전 불가능합니다.")
// }
//범위를 작은 것부터, 큰 것 순으로 두는 것이 중요하다. 조건문 안에 여러개 사용도 가능하다.


let age = 21;
let license=false;

if(age>20 ) {  //1번 조건이 참이라고 하면, if 안으로 다시 들어감 => 따라서 면허를 따세요라고 나옴, 만약에 let age= 10이라고 하면, age부터 false이기 때문에, 운전 불가능합니다라고 나옴! 
    if(license==true) {
        console.log("운전이 가능합니다.")
    }else { 
        console.log("면허를 따세요.")
    }
}else {
    console.log("운전 불가능합니다.")
}
    
