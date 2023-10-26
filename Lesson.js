//++++++++++++++++++++++++++++++//
//           Easy Going         //
//++++++++++++++++++++++++++++++//
// Write a for loop that will log the numbers 1 through 20.
// for(let i = 1; i <= 20; i++) {
//     console.log(i)
// }

//++++++++++++++++++++++++++++++//
//            Get Even          //
//++++++++++++++++++++++++++++++//
// Write a for loop that will log only the even numbers in 0 through 200.
// for(let i = 0; i <= 200; i += 2) {
//     console.log(i)
// }

//++++++++++++++++++++++++++++++//
//           Fizz Bizz          //
//++++++++++++++++++++++++++++++//
// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
// for(let i = 1;i <= 100; i++) {
//     if(i % 3 === 0 || i % 5 === 0) {
//         console.log("FizzBuzz")
//     }
//     else if(i % 3 === 0) {
//         console.log("Fizz")
//     }
//     else if(i % 5 === 0) {
//         console.log("Buzz")
//     }
//     else {
//         console.log(i)
//     }
// }

//++++++++++++++++++++++++++++++//
//         Wild Wild West       //
//++++++++++++++++++++++++++++++//
// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// 3. Give D'Art a second hometown by adding "Hawkins"
// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 5001
// wolfy[3] = "Gotham City"
// dart.push("Hawkins")
// wolfy.splice(0,1,"Gameboy")
// console.log(plantee)
// console.log(wolfy)
// console.log(dart)

//++++++++++++++++++++++++++++++//
//   Yell at the Ninja Turtles  //
//++++++++++++++++++++++++++++++//
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// 2. Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase() on each of them and print out the result.
const ninTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for(let cap of ninTurtles) {
    console.log(cap.toUpperCase())
}

//++++++++++++++++++++++++++++++//
//       Methods, Revisited     //
//++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++//
//         Where is Waldo       //
//++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++//
//        Excited Kitten        //
//++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++//
//        Find the Median       //
//++++++++++++++++++++++++++++++//