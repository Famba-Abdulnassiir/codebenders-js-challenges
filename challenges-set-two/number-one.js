/*
Pseudo code of number 1.
- Declare Function addDigits that will take our num as its parameter
- create a variable named sum in whic we shall store our digital root
    intialize it to zero.
- while loop for iterating through our numbers when sum is greater than 10
- Add modulus of 10 to sum.
- Divide num by 10
- if sum is less than 10
     * Add sum to num
     * Set sum to zero.

"Mine for further revision the Idea is delived from math area called digital root
https://en.wikipedia.org/wiki/Digital_root"

*/

function addDigits(num){

    let sum = 0;

    while (num >= 10){
        sum += num%10;
        num = Math.floor(num/10);

        if(num < 10){
            num += sum;
            sum = 0;
        }
    }
    return num;

};

addDigits(38);
