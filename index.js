// Javascript file for INDEX.HTML

const message = [
    'I can do this all day!',
    'I am Iron Man!',
    'On your left.',
    'Bring me THANOS!',
    'Wakanda Forever!',
    'We\'re the guardians of the galaxy bitch!'
];


document.getElementById('generate_button').onclick = function() {
    messageGenerator();
}


function randomNumberGen() {
    var number = Math.floor(Math.random() * 6);
    return number;

};

function messageGenerator() {
    var randomMessage = message[randomNumberGen()];
    document.getElementById('message').innerHTML = randomMessage;
}

