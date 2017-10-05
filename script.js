// 1

/* For loop from Lilli */

for (var i=0; i<=a; i++)

/*

Prompt the user for a number. Write a for loop that will add all of the numbers leading up to that number,
and inclusive of that number together and log the result to the console. (ex: A user enters 5, and the output
would be the result of 1 + 2 + 3 + 4 + 5.)
Prompt: ‘Enter A Number!’ > 5 Output: 15

*/

// 2

/* While loop */

/*

Write a do..while loop that builds a string with multiple inputs from a user. Start by prompting the user if
they want to play. When the user answers yes, prompt the user to enter a word. After the user enters a word,
prompt the user if they would like to play again. If no, console log their word. If yes, prompt the user for
another word and add that word to the original string, then prompt if they want to play again. Continue to add
words to the string every time the user answers yes and enters a word until the user indicates that he or she
does not want to play anymore.
Prompt: ‘Do you want to play?’ > 'yes' > Prompt: ‘Enter a word.’ > 'dog' > Prompt: ‘Do you want to play again?’
> 'yes' > Prompt: ‘Enter a word.' > 'cat' > Prompt: ‘Do you want to play again?’ > 'no' Output: 'dog cat'

*/

// 3

/*

Write a while loop that will prompt the user if they would like to print their name. If the answer is yes,
log their name to the console then prompt them if they would like to print their name again. If yes, log their
name to the console again but this time add an exclamation point at the end of the string. Continue to add an
exclamation point for every time the user agrees to wanting to print his or her name.
Prompt: ‘Would you like to print your name?’ > 'yes' Output: 'Hello. My name is Adam' Prompt: ‘Would you like to
print this again?’ > 'yes' Output: ‘Hello. My name is Adam!' Prompt: ‘Would you like to print this again?’ >
'yes' Output: 'Hello. My name is Adam!!' Prompt: ‘Would you like to print this again?’ > 'no'

*/

     var yesorno = prompt("Would you like to print your name?");
if (yesorno != "yes") {
    console.log("Have a lovely day.");
}
if (yesorno === "yes") {
    var name = prompt("Enter your name.");
    console.log(name);
    var again = prompt("Would you like to print your name again?")
    while (again === "yes") {
        var name = (name + "!");
        console.log(name);
        var again = prompt("Would you like to print your name again?")
    }
    if (again != "yes") {
        console.log("Thanks for playing!");
    }
}

// 4

var time = prompt("What time of day is it?");
while (time != "morning" || time != "noon" || time != "evening") {
  var time = prompt("What time of day is it?");
  if (time === "morning" || time=== "noon" || time=== "evening") {
    break;
  }
}
if (time=== "morning") {
  console.log("Since it's morning, you should be eating breakfast. We suggest eggs and toast.");
}
else if (time === "noon") {
  console.log("Since it's noon, you should be eating lunch. We suggest a salad.");
}
else if (time === "evening") {
  console.log("Since it's evening, you should be eating dinner. We suggest chicken and rice.");
}