
var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!")
  
var kristinBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?")

var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");

var clientArray = [adamSandler, kristinBell, jimCarrey, shooterMcGavin]

function Client(name, age, quote)
{
  this.name = name; 
  this.age = age;
  this.quote = quote;
}


  
for (n = 0; n < clientArray.length; n++  ) 
{
     console.log("Our Client's name is " + clientArray[n].Name);
     console.log("They are ages" clientArray[n].Age);
     console.log("and their quote is" + clientArray[n].Quote);
}
