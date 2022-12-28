var botao = document.getElementById('baby-sound-btn');
var som = document.getElementById('baby-sound');
/**
 * Ao carregar no botão, começa ou pára o som
 */
botao.onclick = function () {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        this.querySelector('.icon.off').style.display = 'none';
        this.querySelector('.icon.on').style.display = 'block';
        som.pause();
        som.currentTime = 0;
        return;
    }

    this.classList.add('active');
    this.querySelector('.icon.off').style.display = 'block';
    this.querySelector('.icon.on').style.display = 'none';
    som.play();
};