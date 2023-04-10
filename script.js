const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

 function getPassword(){
     
     let passwordLength = 15
     let password = ""
     
     for(let i = 0; i < passwordLength; i++){
         let randomIndex = Math.floor(Math.random() * characters.length)
         password += characters[randomIndex]
     }
     
     return password
 }


   function renderPasswords(){
       let password1 = getPassword()
       let password2 = getPassword()
       
       document.getElementById("input-el1").textContent = password1
       document.getElementById("input-el2").textContent = password2
       
   }
