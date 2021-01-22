function rand10(min,max) {
    min = Math.ceil(1);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

console.log(rand10());

//The function returns a random integer between a minimum value (included) and a maximum value (included).
//I choose Math.random() method because if I used Math.round(), I would have a not uniform distribution.
/**function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
} **/

/**Warning ! Math.random() does not provide random numbers for secure cryptography. 
The results of this method should not be used in security-related applications.
Instead, it is preferable to use the Crypto Web API and more precisely the method window.crypto.getRandomValues().**/