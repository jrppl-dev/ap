var soundButton = document.getElementById('baby-sound-btn')
var som = document.getElementById('baby-sound')

soundButton.onclick = function () {
    if (this.classList.contains('is-clicked')) {
        this.classList.remove('is-clicked')
        this.querySelector('.icon.off').style.display = 'none';
        this.querySelector('.icon.on').style.display = 'block';
        som.pause()
        som.currentTime = 0
        return
    }

    this.classList.add('is-clicked')
    this.querySelector('.icon.off').style.display = 'block';
    this.querySelector('.icon.on').style.display = 'none';
    som.play()
}