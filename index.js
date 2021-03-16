// Javascript file for INDEX.HTML

const message = [
    'I can do this all day!',
    'I am Iron Man!',
    'On your left.',
    'Bring me THANOS!',
    'Wakanda Forever!',
    'We\'re the guardians of the galaxy!'
];


document.getElementById('generate_button').onclick = function() {
    messageGenerator();

};


function randomNumberGen() {
    var number = Math.floor(Math.random() * 6);
    return number;

};

function messageGenerator() {
    var randomMessage = message[randomNumberGen()];
    document.getElementById('message').innerHTML = randomMessage;

    var superHero = document.getElementById('super');
  
    switch (randomMessage) {
        case 'I can do this all day!':
            superHero.src = 'images/rogers.jpg';
            break;

        case 'I am Iron Man!':
            superHero.src = 'images/stark.jpg';
            break;

        case 'On your left.':
            superHero.src = 'images/rogers.jpg';
            break;

        case 'Bring me THANOS!':
            superHero.src = 'images/thor.jpg';
            break;
        
        case 'Wakanda Forever!':
            superHero.src = 'images/panther.jpg';
            break;

        case 'We\'re the guardians of the galaxy!':
            superHero.src = 'images/guardians.jpg';
            break;

        default: console.log('Marvel');
    };

 
};

$('h1').fadeIn(20000);

