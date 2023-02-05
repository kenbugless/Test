console.log("빵두기");
console.log("상추두기");
console.log("고기패티두기");
console.log("뚜겅덥기");

console.log("감튀박스선택");
console.log("감튀 담기");

console.log("콜라통 선택");
console.log("얼음 담기");
console.log("콜라담기");

function makeBurger(type,size,num) {
  console.log("빵두기");
  console.log("상추두기");

  if(type=="불고기") {
  console.log("고기패티두기");
  } else if(type=="새우") {
    console.log("새우패티두기")
  }
  console.log("뚜겅덥기");
  console.log(type,"버거",size,"사이즈",num,"개 준비완료")

  return "완료되었습니다."
}

function serveCoke() {
  console.log("콜라통 선택");
  console.log("얼음 담기");
  console.log("콜라담기");
}

function serveFrenchFries() {
  console.log("감튀박스선택");
  console.log("감튀 담기");
}
let result=makeBurger("새우","L",3)

console.log("버거 프로세스 결과",result)
// serveCoke()
// serveFrenchFries()