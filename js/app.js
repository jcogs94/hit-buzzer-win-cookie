const buttonElement = document.querySelector('#buzzer');
const headElement = document.querySelector('head');
const gameElement = document.querySelector('#game');

let buttonPushed = false;
let firstPressAfterCookie = true;

const buttonHandler = () => {
    if (!buttonPushed) {
        let cookieElement = document.createElement('img');
        cookieElement.setAttribute('id', 'cookie');
        cookieElement.setAttribute('src', 'https://www.thedailymeal.com/img/gallery/chocolate-chip-cookies-recipe/intro-1665769539.webp');
        cookieElement.setAttribute('alt', 'Picture of cookie');

        const winElement = document.createElement('h2');
        winElement.setAttribute('id', 'win-text');
        winElement.innerHTML = 'You won! Enjoy your cookie!';

        const cookieStyleElement = document.createElement('link');
        cookieStyleElement.setAttribute('rel', 'stylesheet');
        cookieStyleElement.setAttribute('href', 'css/cookie.css');

        gameElement.appendChild(cookieElement);
        gameElement.appendChild(winElement);
        headElement.appendChild(cookieStyleElement);

        buttonPushed = true;
    }
    else if (firstPressAfterCookie) {
        const greedElement = document.createElement('h4');
        greedElement.setAttribute('id', 'greed-warning');
        greedElement.innerHTML = "Push the button all you want, it's not going to give you another cookie.";
        buttonElement.insertAdjacentElement('afterend', greedElement);

        firstPressAfterCookie = false;
    }
}

buttonElement.addEventListener('click', buttonHandler);
