function clearAll(){
  const memeContainer = document.querySelector('.meme-content');
  const jokeContainer = document.querySelector('.joke-content');
  const quoteContainer = document.querySelector('.quote-content');
  const riddleContainer = document.querySelector('.riddle-content');
  memeContainer.innerHTML = '';
  jokeContainer.innerHTML = '';
  quoteContainer.innerHTML = '';
  riddleContainer.innerHTML = '';
}

function showMeme(){
  const randomMemeUrl = getRandomData('memes');
  const container = document.querySelector('.meme-content');
  const newImg = document.createElement('img');
  newImg.setAttribute('src',randomMemeUrl);
  clearAll();
  container.appendChild(newImg);
  
}
function showQuote(){
  const randomQuoteText= getRandomData('quotes');
  const containerQ = document.querySelector('.quote-content');
  const quote = document.createElement('p');
  const author = document.createElement('p');
  quote.textContent=randomQuoteText.quote;
  author.textContent = '- ' + randomQuoteText.author;
  clearAll();
  containerQ.appendChild(quote);
  containerQ.appendChild(author);
}
function showJoke()
{
  const randomJokeText= getRandomData('jokes');
    const containerP = document.querySelector('.joke-content');
  const newP = document.createElement('p');
  newP.textContent = randomJokeText;
  clearAll();
  containerP.appendChild(newP);
}
function showRiddle(){
  const randomRiddles = getRandomData('riddles');
  const {question , answer} = randomRiddles;
  const questionElem = document.createElement('p');
  questionElem.textContent = question;
  
  const answerElem = document.createElement('p');
  answerElem.textContent ='The Answer is : ' + answer;
  answerElem.setAttribute('id' , 'riddle-answer');
  answerElem.hidden = true;
  
  clearAll();
  
  const containerR = document.querySelector('.riddle-content');
  containerR.appendChild(questionElem);
  containerR.appendChild(answerElem);
}
function revealAnswers(){
  const riddleAnswer = document.querySelector('.riddle-content');
  const riddle = riddleAnswer.querySelector('p');
  const answer = document.querySelector('#riddle-answer');
  
  if (riddle && answer.hidden){
  answer.hidden = false;
}
else{
  alert('The answer is already revealed');
}
}

function getRandomData(type){
  return data[type][rn(data[type].length)];
}

const memes =['https://i.redd.it/k43ydokwob1b1.jpg','https://i.redd.it/the-real-power-v0-vp10kdnzc31b1.jpg?s=a12676942d070a0f61269487a3527bd86f70729f','https://i.redd.it/reality-is-not-so-cool-v0-zvehhrrg011b1.jpg?s=bd522c956098dca06cca045daa1760cc808deb3f','https://i.redd.it/programming-memes-vs-programming-v0-cczub1j49x0b1.jpg?s=311755fbaacbe88a18ad4244dffbf013e58a4c58'];

const quotes =[{quote : 'The greatest glory in living lies not in never falling, but in rising every time we fall.' , author : 'Nelson Mandela' },{quote : 'The way to get started is to quit talking and begin doing.' , author : 'Walt Disney' },{quote : 'If you set your goals ridiculously high and it is a failure, you will fail above everyone else success.', author : 'James Cameron'},{quote :'Life is what happens when you are busy making other plans.',author : 'John Lennon'}];

const jokes =['I just got my doctors test results and I am really upset. Turns out, I am not gonna be a doctor.','My boss told me to have a good day, so I went home.','My elderly relatives liked to tease me at weddings, saying, “You’ll be next!” They soon stopped though, once I started doing the same to them at funerals.','My girlfriend’s dog died, so I tried to cheer her up by getting her an identical one. It just made her more upset. She screamed at me and said, “What am I supposed to do with two dead dogs?”'];

const riddles =[
  {question: 'What has to be broken before you can use it?', answer: 'An egg'},
  { question: 'I’m tall when I’m young, and I’m short when I’m old. What am I?', answer: 'A candle'},
  {question: 'What is always in front of you but can’t be seen?', answer: 'The future'}
];

function rn(len){
  return Math.floor(Math.random()*len);
}

const data ={memes,quotes,jokes,riddles};