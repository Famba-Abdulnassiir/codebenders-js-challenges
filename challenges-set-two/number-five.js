/*Psuedo code for number 5
- Declare function and give it an appropriate name which takes a string array of parameters.
- Get the first element in our array and store it in prefix.
- Iterate throug the elements from position one and check them against the prefix
- check using a while what they have in common as long as there are common indexes continue iterating
- when the common letters are done on the second word move to the next one untill all are covered.
- if the words dont have any prefix in common 
- Return an empty array of string ""
*/


function longestCommonPrefix(strs){

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length -1);

            if(prefix === ""){
                return "";
            }
     
        }
    }
    return prefix;

}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));