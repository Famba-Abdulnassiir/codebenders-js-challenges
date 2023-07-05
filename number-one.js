/*Set 1. 

number 1.
1. Create a function fizzBuzz.

2. Give the function two parameters which are strings 

3. Give the sum of the two string's lenght a variable 

4.Introduce the conditional statement 

  When the combined length of strings is divisible by both 3 and 5, it returns fizzBuzz. 

  When the combined lenght is divisble by 3, it returns Fizz. 

  When the combined lenght is divisible by 5 , it returns Buzz. 
  
  When the combined length of the strings is not divible by 3 and 5 respectively or not divisible by both 3 and 5, then it does not return anything.*/


function fizzBuzz(s1, s2)
{
    const par = s1.length + s2.length;
    if (par % 3 === 0 && par % 5 === 0)
    {
      return 'FizzBuzz';
    }
    else if (par % 3 === 0)
    {
        return 'Fizz';
    }
    else if (par % 5 === 0)
    {
        return 'Buzz'
    }
    else {
        return ''
    }
}

Set one 
 number five

 function categorizeArray(arr)
 {
  const result = {
    evens:[],
    odds:[],
    chars:[]
  };
  for(let element of arr)
  {
    if (typeof element === 'number')
    {
      if (element % 2 === 0)
      {
        result.evens.push(element);
      } else {
        result.odds.push(element);
      }
    } else if (typeof element === 'string' && element.length === 1)
    {
      result.chars.push(element);
    }
  }

  result.evens.sort((a,b) => a - b);
  result.odds.sort((a,b) => a - b);
  result.chars.sort();
  
  return result;
 }