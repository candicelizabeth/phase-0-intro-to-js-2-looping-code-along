// Code your solutions in this file
// for (let age = 30; age < 40; age++) ---> example
// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   } 

let writeCards = function(array, event){
   let new_array = []
for(let i = 0; i < array.length ;i++){
     new_array.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
}
return new_array
}

// while ([condition]) {
//     [loop body]
//   } 

let countDown = function(num){
let i = 0
// while num is greater than or equal to zero
    while(i <= num ){
        console.log(num)
        num --
    }
}

// function countDown( startingNumber ) {
//     while ( startingNumber > 0 ) {
//       console.log( startingNumber );
//       startingNumber -= 1;
//     }
//     console.log( startingNumber );
//   }

