const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/TaffyGenshin.png") {
    myImage.setAttribute("src", "images/TaffySmoke.png");
  } else {
    myImage.setAttribute("src", "images/TaffyGenshin.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");



if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}  

myButton.onclick = () => {
    setUserName();
};


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
