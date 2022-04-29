const bulb = document.querySelector('#bulb');
const body = document.querySelector('body');
const switchBorder = document.querySelector('#switch');
const switchContainer = document.querySelector('#switch-container');
const switchPositionOff = document.querySelector('.switch-position-off');
const switchPositionOn = document.querySelector('.switch-position-on');

function turnLightOn() {
    bulb.style.background = "url('images/lighton.png') no-repeat center";
    switchPositionOff.style.background = '#f4f1de';
    switchPositionOn.style.background = '#000814';
    body.style.background = '#f4f1de';
    switchBorder.style.border = '12px solid #000814';
    switchContainer.style.color = '#000814';
}

function turnLightOff() {
    bulb.style.background = "url('images/lightoff.png') no-repeat center";
    switchPositionOn.style.background = '#000814';
    switchPositionOff.style.background = '#f4f1de';
    body.style.background = '#000814';
    switchBorder.style.border = '12px solid #f4f1de';
    switchContainer.style.color = '#f4f1de';

}

switchPositionOff.addEventListener('click', turnLightOn);
switchPositionOn.addEventListener('click', turnLightOff);