
import './App.css';

function App() {
  let currentDate = new Date();
  let time = currentDate.getHours()%12 + ":" + currentDate.getMinutes();
  let timeOfDay;

  if(time < 12){
    timeOfDay = goodmorning()
  }
  else if(time > 12 && time <17) {
    timeOfDay = goodafternoon()
  }
  else{
    timeOfDay = goodnight()
  }


function goodmorning() {
  let goodmorningmessage;
  let message = Math.floor(Math.random()*5)
  if(message === 0){
    goodmorningmessage ="I never knew a man come to greatness or eminence who lay abed late in the morning."
  }
  else if( message === 1){
    goodmorningmessage = "Concentrate all your thoughts upon the work at hand. The suns rays do not burn until brought to a focus. "
  }
  else if( message === 2){
    goodmorningmessage = "We are what we repeatedly do. Excellence, then, is not an act but a habit."
  }
  else if( message === 3){
    goodmorningmessage = "Strive not to be a success, but rather to be of value."
  }
  else if( message === 4){
    goodmorningmessage ="Let not your mind run on what you lack as much as on what you have already"
  }
  else if( message === 5){
    goodmorningmessage = "Doing what you like is freedom, liking what you do is happiness."
  }
  return goodmorningmessage
}

function goodafternoon(){
  let goodafternoon_message;
  let afternon_message = Math.floor(Math.random()*5)
  if(afternon_message === 0){
    goodafternoon_message ="All our dreams can come true, if we have the courage to pursue them."
  }
  else if( afternon_message === 1){
    goodafternoon_message = "The secret of getting ahead is getting started."
  }
  else if( afternon_message === 2){
    goodafternoon_message = "Ive missed more than 9,000 shots in my career. Ive lost almost 300 games. 26 times Ive been trusted to take the game winning shot and missed. Ive failed over and over and over again in my life and that is why I succeed."
  }
  else if( afternon_message === 3){
    goodafternoon_message = "Dont limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."
  }
  else if( afternon_message === 4){
    goodafternoon_message ="The best time to plant a tree was 20 years ago. The second best time is now."
  }
  else if( afternon_message === 5){
    goodafternoon_message = "Its hard to beat a person who never gives up"
  }
  return goodafternoon_message
}

function goodnight(){
  let message;
  let goodnight_message = Math.floor(Math.random()*5)
  if(goodnight_message === 0){
    message ="All our dreams can come true, if we have the courage to pursue them."
  }
  else if( goodnight_message === 1){
    message = "The secret of getting ahead is getting started."
  }
  else if( goodnight_message === 2){
    message = "Ive missed more than 9,000 shots in my career. Ive lost almost 300 games. 26 times Ive been trusted to take the game winning shot and missed. Ive failed over and over and over again in my life and that is why I succeed."
  }
  else if( goodnight_message === 3){
    message = "Dont limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."
  }
  else if( goodnight_message === 4){
    message ="The best time to plant a tree was 20 years ago. The second best time is now."
  }
  else if( goodnight_message === 5){
    message = "Its hard to beat a person who never gives up"
  }
  return message
}

  return (
    <div className="App">
      <h1 className="welcome">Hello and welcome to the daily quote generater </h1>
      <h1 className="time">It is currently {time}</h1>
      <h1 className="Daily-quote">Daily quote:</h1>
      <h2 className=" quote">{timeOfDay}</h2>
    </div>
  );
}

export default App;
