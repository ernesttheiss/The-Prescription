//Trying to figure out how to get a video to work and play
const playButton = document.getElementById('playButton');
const videoContainer = document.getElementById('videoContainer');
let ifram = null;


function playVideo() {
if (iframe === null) {
    iframe = document.createElemebt('iframe');
    iframe.width= '560';
    iframe.height= '315';
    iframe.src= 'https://youtu.be/qjxof3MM7l4?si=FzYIZvheWFKHaWCB?autoplay=1';
    iframe.allowFullscreen= true;
    videoContainer.appendChild(iframe);
    playButton.style.display='none';
    }
}

playButton.addEventListener('click', playVideo);
//Playing with buttons to see if I can get the answers to display
const guessForms = document.querySelectorAll('.guessForm');

guessForms.forEach((form, index) => {
    const guessInput = form.querySelector('.guessInput');
    const checkButton = form.querySelector('.checkButton');
    const result = form.nextElementSibling;

    // I am defining the correct answers for the questions
    const correctAnswers = ['10', '40', '39'];

    checkButton.addEventListener('click', function () {
        const userGuess = guessInput.value;

        if (userGuess === correctAnswers[index]) {
            result.textContent = 'Correct! You guessed it!';
        } else {
            result.textContent = 'Incorrect. Try again.';
        }

        guessInput.value = "";
    });
});
const showSuccessButton = document.getElementById('showSuccessButton');
showSuccessButton.addEventListener('click' , function(){
    alert('You have correctly guessed the combination: 10-40-39');
});