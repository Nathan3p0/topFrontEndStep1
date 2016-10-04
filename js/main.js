// Image Rotator

var myImage = document.querySelector('img');
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/top.png') {
    myImage.setAttribute ('src','images/fcc.png');
  }
    else {
      myImage.setAttribute ('src', 'images/top.png');
    }
  }

// Site Welcome message

  var myButton = document.querySelector('button');
  var myHeading = document.querySelector('h1');

  function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Learning the Front End with ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Learning the Front End with ' + storedName;
  }


myButton.onclick = function() {
  setUserName();
}
