 

function isWeekend(WeekendDate)
{  
     
    if(WeekendDate.getDay() == 6 || WeekendDate.getDay() == 0)
       {
         document.write("Its Weekend<br/><br/>");
        
        } 
        else{
             
          var currentDay = new Date();
          var days =  currentDay.getDay() - WeekendDate.getDay();
          
            document.write("Sorry! wait for " + days + " more day(s)");
        }
}

  
 isWeekend(new Date('Oct 12, 2019'));

 isWeekend(new Date('Oct 09, 2019'));