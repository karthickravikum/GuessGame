var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 10;
var boxCount = 0;

document.getElementById('btn').addEventListener('click', function () {
    var guess = parseInt(document.getElementById('guessInput').value);

    for (let i = attempts; i > 0; i--) {
        if (guess === randomNumber) {
            boxCount++;
            document.querySelector('img').src = 'Unlock-removebg-preview.png';
            display("Congratulations! You guessed the number in " + (11 - i) + " attempts.");

            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 10;

            setTimeout(() => {
                document.querySelector('img').src = 'lock-removebg-preview.png';
                display('Guess the number to open Box ' + (boxCount + 1) + '.');
                document.getElementById('guessInput').value = '';
            }, 3000);

            if (boxCount === 6) {
                display("Congratulations! You won the game!");
                setTimeout(() => {
                    display("Thank You for playing!");
                    setTimeout(() => {
                        resetGame();  
                    }, 2000); 
                }, 4000); 
            }


            break;
        } else if (guess < randomNumber) {
            display('Number is too low.');
        } else {
            display('Number is too high.');
        }

        attempts--;
        break;
    }

    if (attempts === 0 && guess !== randomNumber) {
        display('Game Over! Try again.');
    }
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; 
    attempts = 10;
    boxCount = 0; 
    document.getElementById('guessInput').value = ''; 
    document.querySelector('img').src = 'lock-removebg-preview.png'; 
    display('Guess the number to open Box 1.'); 
}
