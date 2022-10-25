let valuta=new Map([
    ["USD","Amerika"],
    ["UZS","O'zbekiston"],
    ["RUB","Rossiya"]
])

valuta.forEach((val,key)=>{
    console.log(`Valuta: ${key} - ${val}`)
})


let mySet=new Set(["EUR","USD","EUR","EUR","USD","EUR","UZS"])

mySet.forEach((val,key)=>{
    console.log(val)
})

let dollar=[1,2,3,4,5]
let dollarToUzs=11000;
let uzs=dollar.map((val,index)=>{
    return val*dollarToUzs
})
console.log(uzs)


let sonlar=[100,200,300,10000,10,2000,120]
let kattaSonlar=sonlar.filter((val)=>{
    return val>200
})

console.log(kattaSonlar)

let arr=[1,2,3,100,4,5,6,7,8,9];
let yigindi=arr.reduce((yig,val)=>{
    return yig+val
},10)
console.log(yigindi)


let engKatta=arr.reduce((katta,val)=>{
    if(katta<val) return val;
    else return katta
},arr[0])
console.log(engKatta)

let array=[
    {
        firstName:"Jalol",
        age:21
    },
    {
        firstName:"Mijji",
        age:19
    },
    {
        firstName:"Joni",
        age:22
    },
    {
        firstName:"Komol",
        age:19
    }
]

let topibOl=array.find((val)=>{
    return val.firstName==="Joni"
})

console.log(topibOl)