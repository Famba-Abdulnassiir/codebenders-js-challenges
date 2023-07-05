/*Pseudocode to number three of set one questions.

    -define the function named "twoSum" that takes in an array of numbers called "nums" and a target number called "target".
    -create an empty map called "nump".
    -initialize a loop with avariable i starting from 0, running until it reaches the length of the "nums" array.
    -inside the loop, calculate the complement by subtracting the current element of "nums" at index i from the target.
    -using the "has" method check if the complement exists in "nump".
    -if it does, it means we have found a pair that adds upto the target.
    -return an array containing indices of the complement and the current element.
    -if complement does not exist in the map, add current element of "nums" and its index to "nump" map using "set method".
    -if the loop completes without finding a pair, return an empty array indicating that no two numbers in "nums" add upto the target.*/


    function twoSum(nums, target){
        const mump = new Map();
        {
            const complement = target-nums[i];
            if(nump.has(complement))
            {
                return[nump.get(complement),i];
            }
            nump.set(nums[i],i);
                return[];
        }
    }