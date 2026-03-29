
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');

    setTimeout(() => {
        if (cardContainer) {
            cardContainer.classList.add('reveal');
            console.log("Message revealed after 3 seconds of beauty.");
        }
    }, 3000);
});
