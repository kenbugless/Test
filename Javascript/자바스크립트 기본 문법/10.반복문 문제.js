// 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.

let sum =""
for(let i =0;i<=100;i++) {
    sum=i+i;
}
console.log(sum)


// 1부터 100까지 홀수만 출력하자.

for(let i=1;i<=100;i++) {
    if(i%2!=0) {
        console.log(i)
    }
}

// 1부터 50까지 369결과를 프린트하자.

for(let i =1;i<=50;i++) {
    console.log(i)
    }


// 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
// 숫자가 소수이다. 1과 본인 숫자 두 개만 나온다. 

let n =11
primeNum=true;

if(n==1) {
    primeNum=false
}
for (let i=2;i<=n;i++) {
    if(n%i==0) {
        primeNum=true;
    }
}
console.log(primeNum)