var soundButton = document.getElementById('baby-sound-btn')
var sound = document.getElementById('baby-sound')

soundButton.onclick = function () {
    if (this.classList.contains('is-clicked')) {
        this.classList.remove('is-clicked')
        this.querySelector('.icon.off').style.display = 'none';
        this.querySelector('.icon.on').style.display = 'block';
        sound.pause()
        sound.currentTime = 0
        return
    }

    this.classList.add('is-clicked')
    this.querySelector('.icon.off').style.display = 'block';
    this.querySelector('.icon.on').style.display = 'none';
    sound.play()
}