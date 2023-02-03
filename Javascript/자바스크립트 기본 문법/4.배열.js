// let fruit = "banana"
// let fruit2 = "apple"
// let fruit3 = "grape"
// let fruit4 = "mango"

// let fruit =["banana","apple","grape","mango"]


let fruit =["banana","apple","grape","mango"]
console.log(fruit)
console.log(fruit[0])
console.log(fruit[3])

fruit[0]='cherry'
console.log(fruit)
fruit[2]='tomato'
console.log(fruit)


console.log(fruit.pop())
fruit.push('pineapple')
console.log(fruit)


console.log(fruit.includes('apple'))

console.log(fruit.indexOf('apple'))

fruit
console.log(fruit.slice(2)) //2를 포함하고 앞에 있는 것들을 다 잘라버림
console.log(fruit.slice(1))
console.log(fruit.slice(1,3)) //1 포함하고, 3은 포함하지 않는 식으로 저장됨

fruit
console.log(fruit.splice(2,1)) //1에 의미는 몇개에 아이템을 제거할지..2는 시작점
console.log(fruit.splice(0,2))
// slice- 기존에 배열을 건드리지 않고, 똑 때서 만들고
// splice - 기존에 오리지널 파일이 잘리 게 된다.

