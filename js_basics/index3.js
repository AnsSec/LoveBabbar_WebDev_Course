// function 

// function run(){
//     console.log('running')
// };

// function call or invoke
// run()

// function assignment
// let stand=function walk(){
//     console.log('walking')
// };

// sum using argument

// function sum(){
//     let total=0;
//     for(let value of arguments)
//         total=total+value;
//     return total
// }
// console.log(sum(1,2,3,4,5,6,7,8,9));

// rest operator
// function sum(num,value,...args)
// function sum(...args){
//     console.log(args)
// }
// sum(1,2,3,4,5,6,7,8,9);

// default parameters
// function interest(p,r,y){
//     return p*r*y/100;
// }

// console.log(interest(4,5,6));

// getter & setter
// let person={
//     fName:'Love',
//     lName:'Babbar',

//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value){
//         let parts = value.split(' ');
//         this.fName=parts[0];
//         this.lName=parts[1];
//     } 
// };
// person.fullName='anshul vishwakarma';
// console.log(person.fullName())
