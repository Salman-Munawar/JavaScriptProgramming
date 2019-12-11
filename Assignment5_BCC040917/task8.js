
var date = new Date();

function calculateAge(birthdate){
   var age  = new Date(birthdate);
  
   var days =   date.getDate() - age.getDate();
   var month =  date.getMonth() - age.getMonth();    
   var years = date.getFullYear() - age.getFullYear() ;
   
   document.write("You are " + years + " years, " + month + " month(s) and " + days +" days old <br/>");
}

 calculateAge("Sep 01, 1979");
 calculateAge("Aug 09, 1986");

 