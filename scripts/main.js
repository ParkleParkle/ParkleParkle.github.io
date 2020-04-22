var myImage = document.querySelector('img');

myImage.onclick = function() {

   var mySrc = myImage.getAttribute('src');
   if(mySrc === 'test-images/sun-pixels5-720x720.png') {
     myImage.setAttribute ('src','test-images/Bear-1(720x720).png');
   } else {
     myImage.setAttribute ('src','test-images/sun-pixels5-720x720.png');
   } 

}

/*
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
   var myName = prompt("Please enter your name.");
   localStorage.setItem('name', userName);
   myHeading.textContent = "Big-Bear greeting to you, " + userName + " !";
}

if(!localStorage.getItem('name')) {
   setUserName();
} else {
   var storedName = localStorage.getItem('name');
   myHeading.textContent = "Big-Bear greeting to you, " + storedName;
}

myButton.onclick = function() {
   setUserName();
}
*/