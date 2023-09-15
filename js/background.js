const images = ["0.jpeg","1.jpeg","2.jpeg"];
const back = document.getElementById("background-div");

// document.createElement : HTML Element를 자바스크립트에서 생성, 아직 HTML파일에 속해있진 않음
// .appendChild() : 생성한 Element를 HTML파일 마지막 요소 뒤에 넣어주는 역할

const chosenImage = images[Math.floor(Math.random() * images.length)];

back.style.backgroundImage=`url(img/${chosenImage})`;
back.style.backgroundSize="cover";
back.style.backgroundRepeat="no-repeat";

