/*
Ticket Pricing: Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

Children (age <= 12): $10
Teenagers (age 13-17): $15
Adults (age >= 18): $20
*/

let childrenAge = 12;
let adultsAge = 18;
let userInput = parseInt(prompt("enter your age"));
const childrenPrice = 10;
const teenagersPrice = 15;
const adultsPrice = 20;


function ticketPricing(){
    if(userInput <= childrenAge){
        console.log(`The ticket price for age ${childrenAge} is $${childrenPrice}`);
    }else if(userInput >= adultsAge){
       console.log(`The ticket price for age ${adultsAge} is $${adultsPrice}`);
    }else if(userInput >= 13 && userInput <= 17 ){
        console.log(`The ticket price for teenagers is $${teenagersPrice}`);
    }else{
        console.log("Input the right age.");
    }
}
ticketPricing();



const temperature = parseInt(prompt("Enter your temperature (in °C). "));
const isRaining = prompt("Is it Raining? (yes/no)").toLowerCase();




function weatherClothingAdviser(){
    // if(isNaN (temperature)){
    //     console.log("Invalid temperature, please type the correct temperature.");
    //     return;
    // }

    // if(isRaining !== "yes" && isRaining !== "no"){
    //     console.log("Invalid input, kindly answer 'yes' or 'no'.")
    // }



    if(temperature > 30){
        if(isRaining === "yes"){
            console.log("It's hot and raining, wear a light cloth and use an umbrella or put on a raincoat.")
        }else{
            console.log("It's hot, wear a light cloth, like shorts and a T-shirts.")
        }
    }else if(temperature >=20 && temperature <= 25){
        if(isRaining === "yes"){
            console.log("It's mild and raining, wear a light cloth and an umbrella.")
        }else{
            console.log("it's mild, wear a comfortable cloth.")
        }
    }else if(temperature < 15){
        if(isRaining === "yes"){
            console.log("It's very cold and raining, wear a thick clot, a jacket and use your umbrella.")
        }else{
            console.log("It's cold, wear a warm clothing.")
        }
    }

}

weatherClothingAdviser();




function fibonacci(n){
    if(n === 0){
        return 0;
    }else if (n === 1){
       return 1;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(10));





function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Check if the cleaned string is the same forwards and backwards
    return cleanStr === cleanStr.split("").reverse().join("");
}

const input = prompt("Enter a string to check if it's a palindrome:");
if (isPalindrome(input)) {
    console.log(`"${input}" is a palindrome.`);
} else {
    console.log(`"${input}" is not a palindrome.`);
}

