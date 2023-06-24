/*Pseudocode for number 3 set 2 questions.

    -define a function "addDigits" that takes a parameter "num".
    -start a loop that continues as long as "num"is greater than or equal to 10.
    -initialise a variable "sum" to 0.
    -start an inner loop that continues as long as "num" is greater than 0.
    -calculate the remainder of "num" divided by 10 and add it to "sum".
    -divide "num" by 10, discarding any decimal parent, to remove the last digit 
    -update "num" with the value "sum".
    -once the outer loop ends, return the value of "num".*/


    function addDigits(num){
        while(num>=10)
        {
            let sum=0;
            while(num>0)
            {
                sum+=num%10;
                num=Math,floor(num/10);
            }
            num=sum;
        }
            return num;
    }