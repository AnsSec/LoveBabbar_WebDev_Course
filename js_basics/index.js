
// object create

// let rectangle={
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log("drawing rectangle");
//     }
// };

// factory function

// function createRectangle(length,breadth){
//     return rectangle={
//         length,
//         breadth,
    
//         draw(){
//             console.log(length+breadth);
//         }
//     };
// }

// let obj1 = createRectangle(4,5); 
                          
// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log('drawing');
//     }

// }

// let rectangleObj1=new Rectangle(4,6); 

// console.log(obj1);


// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// let a={value:10};
// let b=a;
// a.value++
// console.log(a.value);
// console.log(b.value);


let rectangle={
    length:2,
    breadth:3
};

// for-in loop


// for(let key in rectangle){
//     console.log(key,rectangle[key])

// };

// for-of loop

// for(let key of Object.entries(rectangle)) { 
//     console.log(key);
// };

// if('color' in rectangle){
//     console.log('Present');
// }

// else{
//     console.log('Absent');
// }

// object cloning

let src={
    value:10,
    a:30,
    b:20
}


// for(let key in src){
//     dest[key]=src[key];
// };

// using assign operator

// let dest=Object.assign({},src);

// using spread 

let dest={...src};

console.log(dest)