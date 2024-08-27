document.addEventListener("DOMContentLoaded", () => {
    const scrambleElement = document.querySelector('.js-text-scramble');
    const originalText = scrambleElement.textContent;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let isScrambling = false;
    let interval;

    function getRandomCharacter() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function scrambleText(text) {
        let scrambled = '';
        for (let i = 0; i < text.length; i++) {
            scrambled += getRandomCharacter();
        }
        return scrambled;
    }

    function startScrambling() {
        if (!isScrambling) {
            isScrambling = true;
            interval = setInterval(() => {
                scrambleElement.textContent = scrambleText(originalText);
            }, 50); // Adjust the speed of scrambling here
        }
    }

    function stopScrambling() {
        if (isScrambling) {
            clearInterval(interval);
            scrambleElement.textContent = originalText;
            isScrambling = false;
        }
    }

    function cycleScrambling() {
        startScrambling();
        setTimeout(stopScrambling, 2000); // Scramble for 2 seconds
        setTimeout(cycleScrambling, 4000); // Wait 2 seconds before starting again
    }

    cycleScrambling();
});
