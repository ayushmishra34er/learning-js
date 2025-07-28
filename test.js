// console.log("hello world!")

// let numSq = function square(a, b) {
//     return a ** b;
// }

//   console.log(numSq(30,2));


// Recursion practice
// writing recursion for adding arrays


// function sumArray(arr) {
//     if (arr.length === 0) return 0;
//     return arr[0] + sumArray(arr.slice(1));

// };


// console.log(sumArray([10, 20]));

// making a word counter programm that counts the words entered


// function makeWordCounter() {
//     let totalWords = 0;
//     return function (text) {

//     };

// }
// const counter = makeWordCounter;
// counter("Hello world !")


// specialMultiply(3, 4);  // 12
// specialMultiply(3)(4);  // 12
// specialMultiply(3);     // returns a function
// If two parameters are passed, return their product immediately.

// If only one, return a function that takes the second and returns the product.

// Uses closure to remember the first value

//  specialMultiply(a, b) as a function (declaration or expression) that handles both invocation styles correctly.

// console.log(specialMultiply(3, 4)); // 12
// console.log(specialMultiply(3)(4)); // 12

// function specialMultiplier(a, b) {
//     return a * b;
//     if (b = undefined) {
//         function secondPar(b) {
//             return a * b;
//         };

//     };

// };
// console.log(specialMultiplier(3, 5)); //15

//  console.log(specialMultiplier(3)); //NaN

// that was wrong for a reason i didt knew about the argument.length

// function specialMultiply(a,b,c) {
//     if (arguments.length === 3 ) {
//         return a * b * c;
//     } else if (arguments.length === 2) {
//         return function (b2) {
//             return a * b2 * c;
//         }
//     } else  {
//             return function (c2) {
//                 return a * b2 * c2;
//             }
//     }
// };
// console.log(specialMultiply(3, 4)); // 12
// console.log(specialMultiply(3)(4)(5)); // 12


// I am starting out the dom from here to learn to interact with the html page




const textChanger = document.getElementById("textbtn")
textChanger.addEventListener("click", function () {

    alert("Button was clicked!")

    const changingH1 = document.querySelector("h1");
    changingH1.innerText = "Text is changed !"




});




const textColorChanger = document.getElementById("colorbtn");

textColorChanger.addEventListener("click", function () {
    alert("button was clicked!")
    const colorChanger = document.querySelector("h1");
    colorChanger.style.color = "red";
});

const bgColorChanger = document.getElementById("pbgbtn");

bgColorChanger.addEventListener("click", function () {

    alert("button was clicked!")
    const pBgChanger = document.getElementById("para1");
    pBgChanger.style.backgroundColor = "green";
    pBgChanger.style.color = "white";

});
