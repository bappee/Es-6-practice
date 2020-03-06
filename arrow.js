


const doubleit =num=> num*2;

const result = doubleit(25);
console.log(result);


const add = (x,y)=> x+y;
const result2=add(52,48);
console.log(result2);

const none =() => 5;
const result3=none();
console.log(result3);

const multi = (x,y)=>{
    const sum= x+y;
    const diff=x-y;
    const total =sum*diff;
    return total;
}
const total=multi(5,3);
console.log(total);