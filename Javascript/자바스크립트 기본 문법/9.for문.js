for(let i=0;i<10;i++) {
    if(i&2==0)
    console.log("누나!!",i)
}

// 0,2,4,6,8,10이 나오게 된다.
// for(let i=0;i<=10;i++) {
//     if(i%2==0) {
//         console.log("누나!!",i)
//     }
// }

// for(let i=0;i<=10;i+=2) {
//     console.log("누나",i)
// }

// 이중 for loop 만드는 방법 -구구단
// for(i=2;i<=9;i++) {
//     for(j=1;j<=9;j++) {
//             console.log(i+'*'+j+'='+i*j)
//         }
//     }

// let i=2
// while(i<10) {
//     console.log("while문 실행",i)
//     i++;
// }

let fruit=["banana","appel","grape","mango"]

for(let i =0;i<fruit.length;i++) {
    console.log(fruit[i])
}
