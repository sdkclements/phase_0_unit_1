// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.
//  2.


// 1. "YOU SIGNED... WHO?!"

function Client(name, age, quote){
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!")
  
var kristinBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?")

var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");

// var jim = new Client ()
//   name:"Jim Carrey",
//   age:52,
//   quote:"...So you're telling me there's a chance? YEAH!"
// }
var clientArray = [adamSandler, kristinBell, jimCarrey, shooterMcGavin]



// 2. "Here they Come!"

// for loop, go over each element, print relevent info

  
for (clientArray i = 0; i < clientArray.length; i++) {
    console.log("Our Clients are " + clientArray.name + "this client is" + clientArray.age + "their quote is" clientArray.quote);
}



// 3. "TIME IS MONEY!"

//YOUR CODE HERE!



var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

console.log()

//var newClient = function newClient (Name, Age, Quote)

// function Client(name, age, quote){
//   this.name = name;
//   this.age = age;
//   this.quote = quote;
// }

// console.log



// 4. "SHOW 'EM OFF!"
function Client(name, age, quote){
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!")
  
var kristinBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?")

var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");

var clientArray = [adamSandler, kristinBell, jimCarrey, shooterMcGavin]

for (n = 0; n < clientArray.length; n++  )

{
    console.log("Our Client's name is " + clientArray[n].name + ", is age " + clientArray[n].age + ", and their quote is " + clientArray[n].quote);
}


// end
function showQuote(name, age, quote){
	return = Client.quote;
}

console.log (showQuote)

	console.log (clientArray[0].quote);
 



// ** BONUS **


//  Your Reflection:
IT worked well in general working 
// 4. "SHOW 'EM OFF!"




// ** BONUS **


//  Your Reflection: