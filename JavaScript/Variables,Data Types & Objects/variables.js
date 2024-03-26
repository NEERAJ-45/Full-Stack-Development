/* 
  ?  var Scope:

  ? Variables declared with var can be accessed throughout the whole function,regardless of where they're declared inside that function. If declared inside a block like an if statement, they're hoisted to the top of the function or global scope, but their value stays undefined until declared. Variables   declared with var outside of any function have a global scope.*/

function myFunction()
{

    if (true) {

        var x = 20;
      }
      console.log(x);
    }
    myFunction()
    
    /* 
    ? let Scope:
    
    ? Variables declared with let are block-scoped, meaning they are accessible only within the block in which they are declared. Unlike var, they are not hoisted to the top of the function or global scope. Instead, they remain confined within their block and are only accessible after their declaration. Variables declared with let outside of any function have global scope, but they are not attached to the global object. Using let provides more predictable scoping behavior and aids in writing cleaner and more maintainable code.
    
    */
   
   function myFunction2()
   {
     
     if (true) {
       
       let x = 10; 
       console.log(x);
    }
   //! console.log(x); Uncaught ReferenceError: x is not defined

}
myFunction2()


/* 
?const Scope:

Variables declared with const are block-scoped and cannot be re-assigned once initialized. While the value of a const variable remains constant, properties of objects or elements of arrays assigned to const can still be modified. Like let, const variables are not hoisted and are only accessible after declaration. They provide a way to define values that should remain constant throughout the program.




*/




function myFunction3() {

  if (true) {
      const x = 123;
     //. x = 1  TypeError : Assignment to constant variable
    }
   //! console.log(x); Uncaught ReferenceError: x is not defined
}
myFunction3()