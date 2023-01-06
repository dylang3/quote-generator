/*
//// Notes /////

* User shouldn't be able to add a new empty quote
* It would be nice to randomly select a quote without replacement until all quotes have been selected
* Add page to view entire quotes array -- view/add/remove functionality on this page
**  Should this replace the existing add quote page? It would be a bit redundant to have both, but the current
**  add quote page is simple, clean, and easy to use. Hmm.. 

*/


// Variables
const newQuoteBtn = document.querySelector("#new-quote-btn");
const addQuoteBtn = document.querySelector("#add-quote-btn");
const addQuoteDiv = document.querySelector(".add-quote-btn");
const addQuoteArea = document.querySelector(".add-quote-area");
const submitQuoteBtn = document.querySelector("#submit-quote-btn");
const newQuoteInput = document.querySelector("#new-quote-input");
const newPersonInput = document.querySelector("#new-person-input");
const closePageBtn = document.querySelector("#close-page-btn");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

// Default quotes
const quotes = [{
    quote: `"I do the very best I know how - the very best I can; and I mean to keep on doing so until the end."`,
    person: `Abraham Lincoln`
},
{
    quote: `"The best way to find yourself is to lose yourself in service of others"`,
    person: "Mahatma Gandhi"
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: `Benjamin Franklin`
},
{
    quote: `"Politics is war without bloodshed while war is politics with bloodshed"`,
    person: `Mao Zedong`
}, {
    quote: `"Our lives begin to end the day we become silent about the things that matter"`,
    person: `Martin Luther King Jr.`
},
{
    quote: `"No one is useless in this world who lightens the burdens of another"`,
    person: `Charles Dickens`
}];

// TODO: add functionality allowing user to add new quotes to the quotes array. This should save to local storage (although a DB option would be needed to scale)
// Maybe also add a menu that allows users to add new quotes but also to view the full quotes list
// Think about putting the menu in a hamburger menu instead of a physical menu button beneath the new quote button
// Maybe even just do a plus sign for now to add a quote (use a modal for input?)

// New Random Quote
newQuoteBtn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});

// Open Add Quote Functionality
addQuoteBtn.addEventListener("click", function() {
    quote.classList.add("hidden");
    person.classList.add("hidden");
    newQuoteBtn.classList.add("hidden");
    addQuoteBtn.classList.add("hidden");
    addQuoteDiv.classList.add("hidden");
    addQuoteDiv.classList.remove("add-quote-btn");
    closePageBtn.classList.remove("hidden");
    addQuoteArea.classList.remove("hidden");
});

// Close Page
closePageBtn.addEventListener("click", function() {
    quote.classList.remove("hidden");
    person.classList.remove("hidden");
    newQuoteBtn.classList.remove("hidden");
    addQuoteBtn.classList.remove("hidden");
    addQuoteDiv.classList.remove("hidden");
    addQuoteDiv.classList.add("add-quote-btn");
    closePageBtn.classList.add("hidden");
    addQuoteArea.classList.add("hidden");
});

// Submit New Quote
submitQuoteBtn.addEventListener("click", function() {
    let newQuote = {quote: `"${newQuoteInput.value}"`, person: newPersonInput.value};
    quotes.push(newQuote);
    newQuoteInput.value = "";
    newPersonInput.value = "";
})


