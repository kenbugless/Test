let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]
//  어레이에 마지막 아이템 “Zebra” 제거하기
animals.pop()
// 주어진 어레이에 “Dog” 추가하기
animals.push("dog")
// 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
animals.push("Mosquito","Mouse","Mule")
// 해당 어레이에는 "Human"이 있는가?
animals.includes("Human")
// 해당 어레이에는 “Cat” 이 있는가?
animals.includes("Cat")

// "Red deer"을 "Deer"로 바꾸시오
animas[animals.indexOf("Red deer")]="Deer"

// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
animas.splice(animals.indexOf("Spider"),3)
//splice는 기존에 배열에서 제거한다. indexOf는 몇번째인지 확인이 가능하며, splice(시작번호,갯수) spider는 포함이 된다.

// "Tiger"이후의 값을 제거하시오
animals.splice(animals.indexOf("Tiger"))
//splice 값이 하나인 경우에는, tiger를 포함하며, 뒤에 내용은 모두 삭제하게 된다.

// "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
let newAnimals=animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)
console.log(newAnimals)