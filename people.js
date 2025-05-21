import nameLastname from "./names.js";
import myHobbies from "./hobbies.js";

const obj = () => {
     return {
     fullName : nameLastname("Fernando", "Salicandro"),
     hobbies :   myHobbies("Moto", "UFC", "gdt")
    
}  
   }

export {obj}
