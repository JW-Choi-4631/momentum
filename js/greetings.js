const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 담는 변수는 UPPER_CASE로 작성
// 반복 사용되는 사용자 정의 string 값은 변수로 사용해서 오류를 막도록 하자! 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
// event : JavaScript가 eventFunction을 실행시킬 때 전달해주는 현재 발생한 event정보 
// event정보는 항상 eventFunction의 첫 번째 argument로 전달해줌 
function onLoginSubmit(event) {
    // preventDefault() : 브라우저의 기본동작을 하지 않도록 설정하는 함수
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}