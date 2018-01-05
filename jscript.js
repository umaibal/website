//use javascript for the sidebar to have
//reactions based on user interaction


//welcome the user with a greeting alert
//based on the time!

var time = new Date().getHours(); //var of type Date, hour property

if(time > 0 && time <= 12) {
  alert("Good Morning, welcome to my site :)");
} else if (time > 12 && <= 17) {
  alert("Good Afternoon, welcome to my site :)");
} else if (time > 17 && time <= 20) {
  alert("Good Evening, welcome to my site :)");
}
