document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    const villain = document.querySelector('.villain');
    const startButton = document.getElementById('start-button');

    let gameStarted = false;

    startButton.addEventListener('click', () => {
        if (!gameStarted) {
            gameStarted = true;
            startButton.textContent = 'Game Started';
            moveVillain();
        }
    });

    function moveVillain() {
        const maxX = 350;
        const maxY = 350;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        villain.style.left = randomX + 'px';
        villain.style.top = randomY + 'px';

        villain.addEventListener('click', () => {
            alert('You caught the villain! Game Over.');
            gameStarted = false;
            startButton.textContent = 'Start Game';
        });
    }
});
