const quotes = [
    {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always  to try just one more time", 
    author:"Thomas Edison"
    },
    {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", 
    author:"Thomas Edison"
    },
    {
    quote: "What would life be if we had no courage to attempt anything?", 
    author:"Vincent Willem Van Gogh"
    },
    {
    quote: "It is hard to fail, but it is worse never to have tried to succeed", 
    author:"Theodore Roosevelt Jr."
    },
    {
    quote: "Success is the ability to go from failure without losing your enthusiasm", 
    author:"Winston Churchill"
    },
    {
    quote: "You are what you repeatedly do. Excellence is not an event it is a habit", 
    author:"Aristoteles"
    },
    {
    quote: "Wherever we look upon this earth, the opportumities take shape within the problems", 
    author:"Nelson Rockefeller"
    },
    {
    quote: "Pain is temporary, Quitting lasts forever", 
    author:"Lance Armstrong"
    },
    {
    quote: "Always do what you are afraid to do", 
    author:"Ralph Waldo Emerson"
    },
    {
    quote: "The road to success is always under construction", 
    author:"Arnold Palmer"
    },
]
const quote = document.querySelector("#quotes h3:first-child");
const author = document.querySelector("div#quotes h3:last-child");

// Math Module : 수학과 관련된 Javascript에서 기본적으로 제공해주는 module
// ex - Math.random() : 0이상 1미만의 값을 랜덤으로 반환

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;