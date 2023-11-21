document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const numSheepInput = document.querySelector('input[name="numSheep"]');
  const startingBank = document.querySelector('#startingBank ul');
  const targetBank = document.querySelector('#targetBank ul');
  const river = document.querySelector('.river');

  let startingSheepCount = 0;
  let targetSheepCount = 0;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const numSheep = parseInt(numSheepInput.value);

    if (!isNaN(numSheep) && numSheep >= 0) {
      startingSheepCount += numSheep;
      renderSheep(startingBank, numSheep);
    }

    numSheepInput.value = ''; // Clear the input field
  });

  function renderSheep(container, numSheep) {
    for (let i = 0; i < numSheep; i++) {
      const sheep = document.createElement('li');
      sheep.textContent = '🐑';
      sheep.addEventListener('click', function () {
        moveSheep(sheep);
      });
      container.appendChild(sheep);
    }
  }

  function moveSheep(sheep) {
    if (sheep.parentNode === startingBank) {
      startingBank.removeChild(sheep);
      targetBank.appendChild(sheep);
      startingSheepCount--;
      targetSheepCount++;
    } else if (sheep.parentNode === targetBank) {
      targetBank.removeChild(sheep);
      startingBank.appendChild(sheep);
      startingSheepCount++;
      targetSheepCount--;
    }

    checkWinCondition();
  }

  function checkWinCondition() {
    if (targetSheepCount === startingSheepCount && startingSheepCount > 0) {
      alert('Congratulations! All sheep have crossed the river.');
    }
  }
});
