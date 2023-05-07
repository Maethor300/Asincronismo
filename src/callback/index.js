function suma(num1,num2){
   return num1 + num2;
}

function calc(num1,num2,callback){
    console.log (callback(num1,num2))
}
 
 
    setTimeout(calc,2000,2,2,suma)
  
 
    
 