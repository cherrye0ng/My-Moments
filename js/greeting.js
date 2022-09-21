const loginform = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"





function onLoginSubmit(event) {
    event.preventDefault(); // 기본동작은 실행되지 않게 하는 함수  _ 기본동작 : submit 후 새로고침되는 동작
    loginform.classList.add(HIDDEN_CLASSNAME); //hidden이라는 class name을 더해줘서 form을 숨김 
    const username = loginInput.value; //loginInput에 작성한 값을 username 으로 저장 
    localStorage.setItem(USERNAME_KEY, username); //key와 value값을 지정 (미니데이터베이스 느낌)
    painGreeting(username); //apingreeting 함수 호출 
}


function painGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1로부터 Hidden 시킴 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit", onLoginSubmit);

} else {
    painGreeting(savedUsername);
}