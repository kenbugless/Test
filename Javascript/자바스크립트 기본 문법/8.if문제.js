// 문제 1. 유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오

let num =4
if (num%2==0) {
    console.log("양성")
}else if(num%2 !=0) {
    console.log("음성입니다.")
}else {
    console.log("0입니다.")
}
// 나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오
// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F

// let test = 97;
// let grade="";

// if (90<=test && 100>=test) {
//     grade = "A"
// }else if (80 <=test && 89>=test) {
//     grade = "B"
// }else if (70<=test && 79>=test) {
//     grade = "C"
// }else if(60<=test && 69>=test) {
//     grade = "D"
// }else {
//     grade = "F"
// }
// console.log(grade)

let test = 97;

if (90<=test && 100>=test) {
    console.log("A")
}else if (80 <=test && 89>=test) {
    console.log("B")
}else if (70<=test && 79>=test) {
    console.log("C")
}else if(60<=test && 69>=test) {
    console.log("D")
}else {
    console.log("F")
}

//    한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
// let skills = ["HTML","CSS","Javascript","React"]
// Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

// input : let skills = ["HTML","CSS","Javascript","React"]
// output: 합격 

// input:let skills = ["HTML","CSS","Javascript"] 
// output: 예비 

// input:let skills = ["HTML","CSS"] 
// output: 탈락
// let skills =["HTML","CSS","JAVASCRIPT","REACT"]

// if(skills[2]==true && skills[3]==true) {
//     console.log("합격")
// }else if(skills[2]==true || skills[3]==true) {
//     console.log("예비")
// }else {
//     console.log("탈락!")
// }

 let skills = ["HTML","CSS","Javascript","React"]
if(skills.includes("Javascript") && skills.includes("React")){
  console.log("합격!")
}else if(skills.includes("Javascript") || skills.includes("React")){
  console.log("예비")
}else {
  console.log("탈락!")
}