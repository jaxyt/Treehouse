/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/* Create the quotes object array:
Each quote object has a `quote` and `source` property.
In addition, `citation` and `year` properties are given where known.
HTML line breaks are given for poetic quotes where necessary using  <br />.
console.log() logs the array of quotes to the console. 
*/


let quotes = [
  {quote: 'In ancient times having power meant having access to data. Today having power means knowing what to ignore.', source: 'Yuval Noah Harari', citation: 'Homo Deus', tags:'Power'},
  {quote: 'However beautiful a song may be, it is just a tune to those who do not understand its meaning.', source: 'Milarepa', tags:'Knowledge'},
  {quote: 'Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances, to choose one’s own way.', source: 'Viktor Frankl',tags:'Freedom'},
  {quote: 'After silence, that which comes nearest to expressing the inexpressible is music.', source: 'Aldous Huxley',  citation: 'Music at Night and Other Essays', tags:'Art'},
  {quote: 'Anyone who has the power to make you believe absurdities has the power to make you commit injustices.', source: 'Voltaire', tags:'Power'},
  {quote: 'There is no right and wrong, but right is right and wrong is wrong.', source: 'Suzuki Roshi', tags:'Knowledge'},
  {quote: "He who binds to himself a Joy,<br /> Does the winged life destroy;<br /> He who kisses the Joy as it flies,<br /> Lives in Eternity's sunrise.", source: 'William Blake', citation: 'Eternity', tags:'Freedom'},
  {quote: 'To learn how to die is to learn how to live.', source: 'Sogyal Rinpoche', citation: 'The Tibetan Book of Living and Dying', tags:'Freedom'},
  {quote: 'In the thick of the forest is where you will find your freedom.', source: 'Buddha', tags:'Freedom'},
  {quote: 'The real voyage of discovery consists not in seeing new landscapes but in having new eyes.', source: 'Marcel Proust', tags:'Discovery'},
  {quote: 'As the wheel follows the ox who draws the cart, speak or act with a clear mind and happiness will follow you.', source: 'Buddha', tags:'Freedom'},
  {quote: "Fear is the cheapest room in the house. I'd rather see you in better living conditions.", source: 'Hafiz', tags:'Fear'},
  {quote: 'Construction and destruction alike satisfy the will to power, but construction is more difficult as a rule, and therefore gives more satisfaction to the person who can achieve it.', source: 'Bertrand Russell',tags:'Satisfaction'},
  {quote: 'If you think something is ugly, look harder. Ugliness is just a failure of seeing.', source: 'Matt Haig', citation: 'The Humans', tags:'Discovery'},
  {quote: 'Happy the man, and happy he alone,<br /> He who can call today his own:<br /> He who, secure within, can say:<br /> "Tomorrow, do thy worst, for I have lived today."', source: 'Horace', year: '30 B.C.', tags:'Freedom'},
  {quote: 'Questions you cannot answer are usually far better for you than questions you cannot question.', source: 'Yuval Noah Harai', citation: '21 Lessons For The 21st Century', tags:'Discovery'},
  {quote: "As a bee takes the essence of a flower and pollen without destroying it's beauty or perfume, so the wise wander freely in this life, carrying only blessings.", source: 'Buddha', tags:'Discovery'},
  {quote: "Anger - with it's poisoned source and it's honeyed tip.", source: 'Buddha', tags:'Anger'},
];
console.log(quotes);


/* Create the random quote generator function:
- Function creates a random integer between 1 and the maximum index number of quotes object array (when supplied the argument 'quotes.length' in the call) and stores it in a variable
- The random number variable is called to `return` a random quote object from the `quotes` array. 
*/

function getRandomQuote(max) { 
  let randomNum = Math.floor(Math.random() * Math.floor(max));
  console.log(randomNum);
  let randomQuote = quotes[randomNum];
  return randomQuote;
};


/* Print Function
 - This uses a node to dynamically update the HTML within the page at the targeted id with two parameters:
  - 'message' - the created string to print to HTML
  - 'htmlID' - the HTML div id that we want to update
 */
function print(message, htmlID) {
  let outputDiv = document.getElementById(htmlID); /* Look at HTML and locate element by id argument */
  outputDiv.innerHTML = message; /* change HTML within the targetd id*/
}


/* Create the 'printQuote' function:
- Call the 'getRandomQuote' function, provide the quotes.length argument and assign returned quote array to a variable.
- Create an empty HTML string 
- Initialise an empty HTMl string
- Create the full HTML string from the quote properties:
  - 'quote' and 'source' properties of the quote object
  - if the 'citation' property exists add it to the HTML string
  - if the 'year' property exists add it to the HTML string
- Call the 'print' function and pass arguments: 
  - "HTML" to print the created HTML string 
  - "'quote-box'" to target the desired HTMl element by its assigned id

- Call the randombackgroundColour change function
*/

function  printQuote() {
  let randomQuote = getRandomQuote(quotes.length);
  let HTML = '';
  HTML = '<p class="quote">' + randomQuote.quote + '</p>' +
  '<p class="source">' + randomQuote.source ;
  if (randomQuote.hasOwnProperty('citation')) {
    HTML +='<span class="citation">' + randomQuote.citation + '</span>'
  };
  if (randomQuote.hasOwnProperty('year')) {
    HTML += '<span class="year">' + randomQuote.year + '</span>' 
  };
  if (randomQuote.hasOwnProperty('tags')) {
    HTML += '<span class="tags">' + randomQuote.tags + '</span>' 
  };
  HTML+= '</p>';
  print(HTML, 'quote-box');
  randomBackgroundColour();
};


/* Random Hex colour value function */
  /* random Hex generator is from https://www.paulirish.com/2009/random-hex-color-code-snippets/ */
  function randomColour(){
  let colour = '#'+Math.floor(Math.random()*16777215).toString(16);
  return colour;
}

/* Random BG colour functions */
/* Randomly change the background colour on button press */
function randomBackgroundColour() {
  let randColour = randomColour();
  document.body.style.backgroundColor = randColour;
}

/* Randomly change the background after 10 seconds if button not clicked in this time*/
  // Run from the start
let myTimer = setInterval(printQuote, 10000);

  // reset when button is clicked
function restartTimer() {
  clearInterval(myTimer);
  myTimer = setInterval(printQuote, 10000);
};




/* 
When the "Show another quote" button is clicked, the event listener 
below will be triggered, calling the `printQuote` function and the randomBackgroundColour change. 
*/

let myButton = document.getElementById('loadQuote');
myButton.addEventListener("click", printQuote, false);
myButton.addEventListener("click", randomBackgroundColour, false);
myButton.addEventListener("click", restartTimer, false);