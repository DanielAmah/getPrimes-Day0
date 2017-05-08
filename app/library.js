'use strict'

 const getPrimes = (num)=>{
 
	 let checkPrime=(num) =>{
		 
		for(let i = 2; i<=num; i++){
			if(num%i===0 && num !==i)
			{
				return false;
			}
		}

		return true;
	 }
	 let primeArray = [];
	 
	 if (num < 0) 
	 {
		return "negative integers can not be prime";
	 }
	 else if (num === 1) 
	 {
		return '1 is not a prime number';  
	 }
	 else if (num === 2) 
	 {
		return [2];
	 }
	  else if (num ===0) 
	 {
		return [];
	 }
	 else 
	 {
	  
		 for(let i = 2; i<=num; i++)
		 {
			if(checkPrime(i)===true)
			{
				primeArray.push(i);
			}		
		 }
		return primeArray;
	  }
 }
 
module.exports = getPrimes;
