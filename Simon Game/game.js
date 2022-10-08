const buttonColours = ['red', 'blue', 'green', 'yellow'];

let userClickedPattern = [];

let gamePattern = [];

let level = 0;

let started = false;

// start the game. 

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// handlers for button click.

$('.btn').click(function () {
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

//  Tracks the game sequence.

function nextSequence() {

    userClickedPattern = [];

    level++;
    $('#level-title').text('Level ' + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    console.log(randomChosenColour)

}

// function to play particular sound for each color.

function playSound(name) {
    let sound = new Audio('sounds/' + name + '.mp3');
    sound.play();
}

// Function to animate the button press.

function animatePress(currentColour) {
    $('.' + currentColour).addClass('pressed');
    setTimeout(() => {
        document.querySelector('.' + currentColour).classList.remove('pressed')
    }, 100);
}

// Function to check the user's answer against the game Sequence.

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log('success');

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(() => {
                nextSequence();
            }, 1000);
        }

    } else {
        console.log('failed')
        $('body').addClass('game-over')
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);

        playSound('wrong');

        $('#level-title').text('Game Over, Press Any Key to Restart');

        startOver();
    }
}

// function to restart the game.

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
