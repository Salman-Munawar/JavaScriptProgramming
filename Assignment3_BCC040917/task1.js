var qualifications = [];
qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.write("<h3>Qualifications:</h3><br>");

for(var i = 0; i < qualifications.length; i++){

    document.write(i+1+") " + qualifications[i]+"<br>");
 
 }