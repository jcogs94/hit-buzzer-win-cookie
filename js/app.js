const buttonElement = document.querySelector('#buzzer');
let buttonPushed = false;

const buttonHandler = () => {
    if (!buttonPushed)
        console.log('do the thing');
    else
        console.log('stop pushing the button! nooo more cookies!');

    buttonPushed = true;
}

buttonElement.addEventListener('click', buttonHandler);
