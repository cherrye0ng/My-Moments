const quotes = [{
    quote: '"누구를 위해 누군가 기도하고 있나봐 숨죽여 쓴 사랑시가 낮게 들리는 듯해"',
    title: "Love Poem",
}, {
    quote: '"누구나 조금씩은 틀려 완벽한 사람은 없어 실수투성이고 외로운 나를 봐"',
    title: "비밀의 화원",
}, {
    quote: '"대답하지 않으셔도 돼요 다만 꺼지지 않는 작은 불빛이 여기 반짝 살아있어요"',
    title: "마음",
}, {
    quote: '"그대 있는 곳에 돌아갈 수 있는 지름길이 있다면 좋겠어"',
    title: "무릎",
}, {
    quote: '"나의 일기장 안에 모든 말을다 꺼내어 줄 순 없지만 사랑한다는 말"',
    title: "밤편지",
}, {
    quote: '"이 하루 이 지금 우리 눈부셔 아름다워 이 불꽃놀이는 끝나지않을거야 Whatever"',
    title: "이 지금",
}, {
    quote: '"수없이 잃었던 춥고 모진날 사이로 조용히 잊혀진 네 이름을 알아 멈추지않을게"',
    title: "이름에게",
}, {
    quote: '"너의 긴 밤이 끝나는 그날 고개를 들어 바라본 그곳에 내가 있을게"',
    title: "Love Poem",
}, {
    quote: '"내 운명을 고르자면 눈을 감고 걸어도 맞는 길을 고르지"',
    title: "분홍신",
}, ]

const quote = document.querySelector("#quote span:first-child");
const title = document.querySelector("#quote span:last-child");
const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);
// 배열의 개수를 매번 셀 수 없기 때문에 숫자가 아닌 element의 길이로 표현하기 위해서 quotes.length로 표현해준다.

quote.innerText = todaysQuote.quote;
title.innerText = todaysQuote.title;