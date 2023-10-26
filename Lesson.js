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
// const ninTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for(let cap of ninTurtles) {
//     console.log(cap.toUpperCase())
// }

//++++++++++++++++++++++++++++++//
//       Methods, Revisited     //
//++++++++++++++++++++++++++++++//
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// 1. use the .sort method 
favMovies.sort()
    //Thought question: what did this do to the array? 
        // The .sort method sorts the elements of an array and returns them to the same array
    //Did it permanently alter it?
        // Yes
// 2. Use the method pop
favMovies.pop()
// 3. push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")
// 4. Reverse the array
favMovies.reverse()
// 5. Use the shift method
favMovies.shift()
// 6. unshift-
console.log(favMovies.unshift()) 
    // what does it return?
        // It returns the length property of the array
// 7. splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) 
    // Thought question: did this permanently alter our array?
        // Yes
console.log(favMovies.findIndex(find => {
    return find === "Django Unchained"
}))
favMovies.splice(14,1,"Avatar")
// 8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - 
    // Thought question: did this permanently alter our array?
        // No
favMovies.slice(Math.floor(favMovies.length / 2), favMovies.length)
// 9. store the value of your slice in a variable, console.log it - 
    // Thought question: what is going on here?
const halfFavMovies = favMovies.slice(Math.floor(favMovies.length / 2), favMovies.length)
console.log(halfFavMovies)
// 10. console.log your final results
console.log(favMovies)
// 11. After running the above tasks, console.log the index of "Fast and Furious" 
    //-We removed it from the array, what value do we get when we look for the index of something that is not in the array?
        // Fast and Furious was never removed from the array
console.log(favMovies.findIndex(find => {
    return find === "Fast and Furious"
}))
// 12. Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?
    // Using const or let gives the same results for what was done with this array

//++++++++++++++++++++++++++++++//
//         Where is Waldo       //
//++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++//
//        Excited Kitten        //
//++++++++++++++++++++++++++++++//

//++++++++++++++++++++++++++++++//
//        Find the Median       //
//++++++++++++++++++++++++++++++//