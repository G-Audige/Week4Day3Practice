//++++++++++++++++++++++++++++++//
//           Easy Going         //
//++++++++++++++++++++++++++++++//
// Write a for loop that will log the numbers 1 through 20.
for(let i = 1; i <= 20; i++) {
    console.log(i)
}


//++++++++++++++++++++++++++++++//
//            Get Even          //
//++++++++++++++++++++++++++++++//
// Write a for loop that will log only the even numbers in 0 through 200.
for(let i = 0; i <= 200; i += 2) {
    console.log(i)
}


//++++++++++++++++++++++++++++++//
//           Fizz Bizz          //
//++++++++++++++++++++++++++++++//
// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
for(let i = 1;i <= 100; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if(i % 3 === 0) {
        console.log("Fizz")
    }
    else if(i % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}


//++++++++++++++++++++++++++++++//
//         Wild Wild West       //
//++++++++++++++++++++++++++++++//
// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// 3. Give D'Art a second hometown by adding "Hawkins"
// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
plantee[2] = 5001
wolfy[3] = "Gotham City"
dart.push("Hawkins")
wolfy.splice(0,1,"Gameboy")
console.log(plantee)
console.log(wolfy)
console.log(dart)


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
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
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
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
//Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1,1)
console.log(whereIsWaldo)
// Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One"
// Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1])


//++++++++++++++++++++++++++++++//
//        Excited Kitten        //
//++++++++++++++++++++++++++++++//
// 1. Write code that logs "Love me, pet me! HISSSSSS!" 20 times.
// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", c, or "...why does the red dot always get away..." at random.
const questions = ["0 ...human...why you taking pictures of me?...", "1 ...the catnip made me do it...", "2 ...why does the red dot always get away..."]
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log("Love me, pet me! HISSSSSS!")
    }
    else {
        console.log(questions[Math.floor(Math.random() * 3)])
    }
}


//++++++++++++++++++++++++++++++//
//        Find the Median       //
//++++++++++++++++++++++++++++++//
// Find the median number in the following numsarray, then console.log that number.
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
console.log(nums.sort())
console.log(nums[Math.floor(nums.length / 2)])


//////////////////////////////////
//++++++++++++++++++++++++++++++//
//        Hungry for More       //
//++++++++++++++++++++++++++++++//
//////////////////////////////////
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// Alien Attire
// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
const kristynsShoe = kristynsCloset.splice(0,1)
console.log(kristynsShoe)
thomsCloset[2].push(kristynsShoe)

// Dress Us Up
// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
console.log(`Tom will be wearing a ${thomsCloset[0][Math.floor(Math.random() * thomsCloset[0].length)]}, ${thomsCloset[1][Math.floor(Math.random() * thomsCloset[1].length)]}, and ${thomsCloset[2][Math.floor(Math.random() * thomsCloset[2].length)]}.`)

// Dirty Laundry
// Continue looking at the closet arrays:
// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
for(let x of kristynsCloset) {
    console.log(`WHIRR: Now washing ${x}.`)
}

// Inventory
// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
console.log(thomsCloset[0],thomsCloset[1],thomsCloset[2])