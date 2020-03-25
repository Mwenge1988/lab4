const say = require('say');

function sorryDave(){
    say.speak("I'm sorry, Dave", 'Alex', 1)
    console.log('yes');
}

setTimeout(sorryDave, 2000)