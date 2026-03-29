/**
 * Romantic Reveal Logic for Vaness Marie Dela Calzada
 * 
 * This script handles the 3-second delay before revealing the main message,
 * allowing the birds, butterflies, and petals to "hook her eyes" first.
 */

document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    
    // 3-Second Delay before revealing the message
    setTimeout(() => {
        if (cardContainer) {
            cardContainer.classList.add('reveal');
            console.log("Message revealed after 3 seconds of beauty.");
        }
    }, 3000);
});
