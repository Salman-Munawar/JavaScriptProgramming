
function addWeek(numWeeks){
 var   date = new Date();
 date.setDate(date.getDate() + numWeeks * 7); 
 document.write(date.getDate() +" "+ date.toLocaleString('default', { month: 'long' }) + " "+ date.getFullYear() + "<br/>");   
}

addWeek(3);
addWeek(10);