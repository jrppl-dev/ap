/**
 * Consulta
 * https://www.w3schools.com/js/js_input_examples.asp
 */
/**
 * Guardar informação do utilizador
 */
function gravarDados(form)
//this should set the UserName cookie to the proper value;
{
    setCookie("img", form.img.value);
    setCookie("username", form.username.value);
    setCookie("genero", form.genero.value);
    setCookie("idade", form.idade.value);
    setCookie("signo", form.signo.value);
    setCookie("r1", form.r1.checked);
    setCookie("r2", form.r2.checked);
    setCookie("r3", form.r3.checked);
}

/**
 * Mostrar dados do utilizador
 */
function preencherDados(form, actualizar)
//this should set the UserName cookie to the proper value;
{
    /**
     * Quando estamos na pagina area_reservada, mostra a imagem escolhida
     */
    if (actualizar) {
        form.querySelector('img').src = '../assets/img/profile/' + getCookie("img");
    }
    if (form.img) {
        form.img.value = getCookie("img");
    }

    form.username.value = getCookie("username");
    form.genero.value = getCookie("genero");
    form.idade.value = getCookie("idade");
    form.signo.value = getCookie("signo");
    form.r1.checked = false;
    form.r2.checked = false;
    form.r3.checked = false;
    /**
     * Se as respostas estiverem corretas, mostra a pagina ao utilizador como sugestão
     */
    if (getCookie("r1") == 'true') {
        form.r1.checked = true;
        if (form.r1.closest('.form-control').querySelector('.help')) {
            form.r1.closest('.form-control').querySelector('.help').style.display = 'block';
        }
    }
    if (getCookie("r2") == 'true') {
        form.r2.checked = true;
        if (form.r2.closest('.form-control').querySelector('.help')) {
            form.r2.closest('.form-control').querySelector('.help').style.display = 'block';
        }
    }
    if (getCookie("r3") == 'true') {
        form.r3.checked = true;
    }
}


