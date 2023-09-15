const clock = document.querySelector("h2#clock-text");

// setInterval : 특정 시간 간격으로 함수를 반복하여 실행시킬 때 사용
// setinterval(function, time in ms)


// setTimeout : 특정 시간이 지난 후에 함수를 실행시키고 싶을 때 사용
// setTimeout(function, time in ms)

// Date Object : 현재 시간 정보에 대해 가지고 있는 객체, getHours 등의 날짜 및 시간정보에 대한 다양한 getter를 가지고 있음

//String.padStart(maxLength, fillText) :  maxLength보다 작은 문자열일 경우 maxLength에 만족하도록 fillText로 채워준다.

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

// 함수를 바로 실행
getClock();
// 1초 후 1초 간격으로 함수 실행
setInterval(getClock, 1000);
