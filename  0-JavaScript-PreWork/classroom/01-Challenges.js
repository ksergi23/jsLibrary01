/* write a loop running the numebr between 0-100. 

Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/


for(let i =0; i<=100;i++){
    if(i % 3 ==0 && i % 5==0){
        console.log('FizzBuzz');
    } else if(i %5 ==0){
        console.log('Buzz')
    } else if( i % 3 ==0){
        console.log('Fizz')
    } else {
        console.log(i);
    }
}

for(let FB = 0; FB<=100;FB++){
    switch (true) {
      case (FB % 3 === 0 && FB % 5 === 0):
      console.log('Fizz Buzz');
      break;
      case (FB % 5 === 0):
      console.log('Buzz');
      break;
      case (FB % 3 === 0):
      console.log('Fizz');
      break; 
      default :
      console.log(FB); 
    }
    
  }