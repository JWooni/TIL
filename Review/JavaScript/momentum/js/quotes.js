const quotes = [
  {
    quotes: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quotes: "Life is what happens when",
    author: "John Lennon",
  },
  {
    quotes: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quotes: "Life is what happens when",
    author: "John Lennon",
  },
  {
    quotes: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quotes: "Life is what happens when",
    author: "John Lennon",
  },
  {
    quotes: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quotes: "Life is what happens when",
    author: "John Lennon",
  },
  {
    quotes: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
  },
  {
    quotes: "Life is what happens when",
    author: "John Lennon",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
