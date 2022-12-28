const formulario = document.querySelector("#login-formulario");
/**
 * Ao submeter o formulário de login
 */
formulario.onsubmit = function (e) {
    /**
     * Desativar o comportamento por defeito
     */
    e.preventDefault();
    if (
        this.querySelector('input[name=username]').value === 'user123' && this.querySelector('input[name=password]').value === '123'
    ) {
        /**
         *  Mostra input boxes a verde em caso de correcto
         */
        this.querySelector('input[name=username]').style.border = 'thin solid green';
        this.querySelector('input[name=password]').style.border = 'thin solid green';
        window.location.href = 'site/pages/area_reservada.html';
    } else {
        /**
         *  Mostra input boxes a vermelho
         */
        this.querySelector('input[name=username]').style.border = 'thin solid red';
        this.querySelector('input[name=password]').style.border = 'thin solid red';
        /**
         *  Limpar campos
         */
        this.querySelector('input[name=username]').value = '';
        this.querySelector('input[name=password]').value = '';
    }
};