const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //getHours는 umber라서, padStart(string에 적용되는)를 쓸수없다. 그래서 num을 str로 바꿔주는 작업이 필요하다. 
    //String()으로 감싸주기만 하면 된다.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getClock(); //load되자마자 바로 실행되도록 함수를 따로 호출해준다. 
setInterval(getClock, 1000); //1초마다 getClock 함수를 반복해서 불러온다.