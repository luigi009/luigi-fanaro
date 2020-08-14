const quotes = [
    {
        name:'Luigi Fanaro',
        quote:'I never dreamed I would be super cool gamer but I am killing it'
    },
    {
        name:'Luigi Fanaro',
        quote:'Eat, sleep, game and repeat'
    },
    {
        name:'Luigi Fanaro',
        quote:'True gamers do not die. They always respawn'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote () {
    let number = Math.floor(Math.random()*quotes.length);
    
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}