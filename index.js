// Javascript file for INDEX.HTML

const message = [
    'I can do this all day!',
    'I am Iron Man!',
    'On your left.',
    'Bring me THANOS!',
    'Wakanda Forever!',
    'We\'re the guardians of the galaxy bitch!'
];

function randomNumberGen() {
    var number = Math.floor(Math.random() * 7);
    return number;

};

function messageGenerator() {
    var randomMessage = message[randomNumberGen()];
    console.log(randomMessage);
}