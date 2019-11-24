var result = [];

for (var i = 1; i <= 15; i++) {
result.push(" " +i)
}
document.write("<b>Counting:</b> " + result + "<br>"); 

result = [];

for (var i = 1; i <= 10; i++) {    
    result.push(" " +i)
      
    }
    document.write("<b>Reverse counting:</b> " + result.reverse()+ "<br>"); 

    result = [];

for (var i = 0; i <= 20; i++) {
    if(i % 2 == 0){
        result.push(" " +i)
         }     
    }
    document.write("<b>Even:</b> " + result+ "<br>"); 

    result = [];

for (var i = 0; i <= 20; i++) {
    if(i % 2 != 0){
        result.push(" " +i)
         }     
    }
    document.write("<b>Odd:</b> " + result+ "<br>"); 

    result = [];

    for (var i = 1; i <= 20; i++) {
        if(i % 2 == 0){
            result.push(" " +i +"k")
             }     
        }
        document.write("<b>Series:</b> " + result); 