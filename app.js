const homeDisplay = document.querySelector('.home')
const homeNavBar = document.querySelector('.home-nav')
const storyDisplay = document.querySelector('.story')

function homeClickOff() {
    homeDisplay.classList.add('close')
    storyDisplay.classList.add('flex')
}
function homeClickOn() {
    homeDisplay.classList.remove('close')
    storyDisplay.classList.remove('flex')
}
homeDisplay.addEventListener('click', homeClickOff)
homeNavBar.addEventListener('click', homeClickOn)