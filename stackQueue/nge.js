//Daily temperature / mextGreater element I II

//Approach for these kind of problem is we keep st and we loop from end of given array
//main thing to find is which is the next greater element from current index so what we do is intinialize the last value of answer to always -1 or 0 acc to requirement because we don't have next greater element for last value
//and push that value in stack
// now from second last element till 0 and check till your st has some value inside it
//we will check if curr[i] < top if top element in stack is bigger then we have found the next greater for prev value so we will update ans acc to that index and break from loop and push the element in stack
//if the above value fail means top < curr[i] we will pop value from stack and check for the next value in stack while doing that if our stack becomes empty means
//No value do not have next greater element then store the value as -1 or 0 and push that element into stack for the other remaining values
