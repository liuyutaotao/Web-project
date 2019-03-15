let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/1.jpg') {
      myImage.setAttribute('src', 'image/80-1.png');
    } else {
      myImage.setAttribute('src', 'image/1.jpg');
    }
}
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '你好，' + name + '！';
  }
  
  function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = setUserName;