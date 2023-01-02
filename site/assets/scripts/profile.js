/**
 * Consulta
 * https://www.w3schools.com/js/js_input_examples.asp
 */
/**
 * Guardar informação do utilizador
 */
function gravarDados(form)
{
    gravarDado("img", form.img.value);
    gravarDado("name", form.name.value);
    gravarDado("genero", form.genero.value);
    gravarDado("idade", form.idade.value);
    gravarDado("signo", form.signo.value);
    gravarDado("r1", form.r1.checked);
    gravarDado("r2", form.r2.checked);
    gravarDado("r3", form.r3.checked);
}

/**
 * Mostrar dados do utilizador
 */
function preencherDados(form, actualizar)
{
    /**
     * Quando estamos na pagina area_reservada, mostra a imagem escolhida
     */
    if (actualizar) {
        form.querySelector('img').src = '../assets/img/profile/' + retornarDado("img");
    }
    if (form.img) {
        form.img.value = retornarDado("img");
    }

    form.name.value = retornarDado("name");
    form.genero.value = retornarDado("genero");
    form.idade.value = retornarDado("idade");
    form.signo.value = retornarDado("signo");
    form.r1.checked = false;
    form.r2.checked = false;
    form.r3.checked = false;
    /**
     * Se as respostas estiverem corretas, mostra a pagina ao utilizador como sugestão
     */
    if (retornarDado("r1") == 'true') {
        form.r1.checked = true;
        if (form.r1.closest('.form-control').querySelector('.help')) {
            form.r1.closest('.form-control').querySelector('.help').style.display = 'block';
        }
    }
    if (retornarDado("r2") == 'true') {
        form.r2.checked = true;
        if (form.r2.closest('.form-control').querySelector('.help')) {
            form.r2.closest('.form-control').querySelector('.help').style.display = 'block';
        }
    }
    if (retornarDado("r3") == 'true') {
        form.r3.checked = true;
    }
}

