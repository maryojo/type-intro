import * as _ from 'lodash';

async function hello(){
  return 'hello';
}

//variable
let lucky:any = 'lucky';

lucky = 23;

type Style = 'bold' | 'italic' | 'underline';

let font:Style;
font = 'bold';


//objects
interface Person{
  name:string;
  age:number;
  [key: string]: any

}

let user1:Person = {
  name: 'jack',
  age: 18
}

//functions
function add(a:number, b:number):number{
  return a + b;
}

//returning type is number which is usually after the closing bracket



let add2 = (a:number, b:number):number => a + b;

// for functions that don't return a value, we use 'void' as return type

//Arrays
const arr:number[] = [];

arr.push(1);
// arr.push('2');


//An array of objects uses the previously formed interface
const arr2:Person[] = [];


//New DS- Tuple: a fixed length array where each element has it's own type

type MyList = [number?, string?, boolean?];

const arr3:MyList = []


//Typescript generics
class Observable<T>{
  constructor(public value:T){}
}

let x:Observable<number>;
let y:Observable<Person>;
let z = new Observable(23);


