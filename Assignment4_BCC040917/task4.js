
 var email = prompt("Enter an email address");
 var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 if (email.match(emailformat))
  {
     alert('Valid Email');
     
  }
  else
    alert("You have entered an invalid email address!");
     

