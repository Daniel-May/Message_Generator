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
            superHero.fadeIn(3000);
            break;

        case 'I am Iron Man!':
            superHero.src = 'images/stark.jpg';
            superHero.fadeIn(3000);
            break;

        case 'On your left.':
            superHero.src = 'images/rogers.jpg';
            superHero.fadeIn(3000);
            break;

        case 'Bring me THANOS!':
            superHero.src = 'images/thor.jpg';
            superHero.fadeIn(3000);
            break;
        
        case 'Wakanda Forever!':
            superHero.src = 'images/panther.jpg';
            superHero.fadeIn(3000);
            break;

        case 'We\'re the guardians of the galaxy bitch!':
            superHero.src = 'images/guardians.jpg';
            superHero.fadeIn(3000);
            break;

        default: console.log('Marvel');
    };

 
};

