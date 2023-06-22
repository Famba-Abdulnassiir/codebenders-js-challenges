
/* Pseudocode to number two question which is in the pdf file here attached.

- Prompt the user to enter their year of birthYear
- Store year in birthYear variable 
- Declare current year to help you check against year of birthYear
- Check if the year of Birth is below 18
- print out user is a Minor 
- if year of birth is between 18 and 36 
- print out the user is a youth
- otherwise he is an elder */


let birthYear = prompt("Enter Year of Birth");
let currentYear = new Date().getFullYear();

if(currentYear - birthYear <= 18) {
    console.log("You are still a Minor")
} 
else if (currentYear - birthYear  <= 36 ){
    console.log("You are a Youth")
}
else console.log("You are an elder")
