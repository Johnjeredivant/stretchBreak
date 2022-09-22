console.log('Stretch Break! - Content Script is Running');

/*
We want to enforce stretch breaks. 
We are going to change all the text to "go stretch!" and change the images to a funny stretching gif.
*/

const arrayOfGifs = [
  'https://i.imgur.com/5ocRuPi.gif',
  'https://i.imgur.com/qd7JaDf.gif',
  'https://i.imgur.com/nU1VYc4.gif',
  'https://i.imgur.com/5jOl57g.gif',
  'https://i.imgur.com/dPRK2LU.gif',
  'https://i.imgur.com/H0iSodz.gif',
  'https://i.imgur.com/7tiR1kz.gif',
]

let randomIndex = Math.floor(Math.random() * arrayOfGifs.length);

function stretchBreak (){
  //change all the images
  const images = document.getElementsByTagName('img');
  for(const eachImage of images){
    eachImage.src = arrayOfGifs[randomIndex];
  }
  //change all the text.
  const texts = document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7, h8, p, button, figcaption, li, td, pation, span, a');
  for(const eachOne of texts){
    eachOne.innerHTML = 'Go Stretch or touch some grass NOW!!';
  }
}

const timeInSeconds = 10
const timeInMilliSeconds = timeInSeconds * 1000;
setTimeout(stretchBreak, timeInMilliSeconds);
setTimeout(function(){window.location.reload();}, timeInMilliSeconds + 10000);

// eachImage.src = Math.floor(Math.random() * arrayOfGifs.length);