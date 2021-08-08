const quotes = [
    {
        quote: "Destiny is not a matter of chance; it is a matter of choice. It is not a thing to be waited for, it is a thing to be achieved.",
        author: "William Jennings Bryan",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D.Roosevelt",
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        author: "Helen Keller",
    },
    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank",
    }
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;