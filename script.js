// javascript function button


function btnClick(){



    // prompt input number of characters type to use. 

    var length = prompt('Please choose number of characters in password from 8-18.');
    var upper = confirm('Would you like uppercase letters?. Please click (OK) for Yes or (Cancel) for No.');
    var lower = confirm('Would you like lowercase letters?  Please click (OK) for Yes or (Cancel) for No.');
    var number = confirm('Would you like any numbers?  Please click (OK) for Yes or (Cancel) for No.');
    var special = confirm('Would you like any special characters? Please click (OK) for Yes or (Cancel) for No.');
    var typecount = 0;
    var letters = [];
    var charType = [];   
     

    
    

    // type counts

    if (upper === true) {
        (typecount++);
    }
    if (lower === true){          
        typecount++;
    }
    if (number === true) {        
      typecount++;
    }
    if (special === true) {          
      typecount++;
    }




    // create a for loop 

    for (l = 0; l < length; l++) { 
        console.log(length)

        // Character Generator Functions
        function getRandomUpper(){
          return String.fromCharCode(Math.floor(Math.random()*26)+65);
        }
        function getRandomLower(){
          return String.fromCharCode(Math.floor(Math.random()*26)+97);
        }
        function getRandomNumber(){
          return String.fromCharCode(Math.floor(Math.random()*10)+48);
        }

        function getRandomSpecial(){

          const special = '!@#$%^&*()_+-=<>[]{}|/?><,.';

          return special[Math.floor(Math.random() * special.length)]

        }

        // Characters that will be used 


        if (upper === true) {
            charType.push(getRandomUpper());
        }
        if (lower === true){
            charType.push(getRandomLower());
        }    
        if (number === true) {
          charType.push(getRandomNumber());     
        }
        if (special === true) {  
          charType.push(getRandomSpecial());      
        } 

        console.log(charType)


      // Random charTypes

      for (var i =0; i < length; i++){

          charType[i] = charType[Math.floor(Math.random() * charType.length)]

          console.log(charType)

      }    

  }   

//  print page with no commas.

var pwd = charType.splice(0,length).join('')

console.log(charType.splice(0,length).join(''))


document.getElementById("generate").innerHTML = pwd;

}
document.getElementById("generate").addEventListener("click", btnClick);










