// ==UserScript==
// @name         Github Badges Anim
// @namespace    https://github.com/PatoFlamejanteTV
// @version      1.0
// @description  Makes an goofy animation on Github badges.
// @license      MIT
// @match        *://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // YOU CAN EDIT THIS VALUES:


    // Set the base animation parameters
    const amplitude = 10;       // Height of the sine wave movement in pixels
    const frequency = 0.005;    // Speed of the animation
    const delayIncrement = 100; // Delay increment in milliseconds for each element


    // ACTUAL CODE:


    const elements = document.querySelectorAll('.d-flex.flex-wrap a');

    elements.forEach((element, index) => {
        const delay = index * delayIncrement;
        let startTime;
        function animate(time) {
            if (!startTime) startTime = time;
            // Calculate elapsed time for sine wave movement
            const elapsed = time - startTime + delay;
            const y = amplitude * Math.sin(frequency * elapsed);
            // Apply
            element.style.transform = `translateY(${y}px)`;
            // Animation
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    });
})();
