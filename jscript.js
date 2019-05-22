//use javascript for the sidebar to have
//reactions based on user interaction


//welcome the user with a greeting alert
//based on the time!

  let today = new Date();//date variable

  let hour = today.getHours(); //store hour property

//alert with appropriate greeting using if block
  if(hour > 0 && hour <= 12) {
    alert("Good Morning, welcome to my site :)");
  } else if (hour > 12 && hour<= 17) {
    alert("Good Afternoon, welcome to my site :)");
  } else if (hour > 17 && hour <= 20) {
    alert("Good Evening, welcome to my site :)");
  }
