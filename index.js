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

    switch (randomMessage) {
        case 'I can do this all day!':
            console.log('Rogers');
            break;

        case 'I am Iron Man!':
            console.log('Stark');
            break;

        case 'On your left.':
            console.log('Rogers');
            break;

        case 'Bring me THANOS!':
            console.log('Thor');
            break;
        
        case 'Wakanda Forever!':
            console.log('Black Panther');
            break;

        case 'We\'re the guardians of the galaxy bitch!':
            console.log('Guardians');
            break;

        default: console.log('Marvel');
    }
}

