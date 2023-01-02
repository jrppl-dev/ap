/**
 * Consulta
 * https://www.w3schools.com/howto/howto_css_breadcrumbs.asp
 * https://www.w3schools.com/js/js_htmldom_eventlistener.asp
 */
const dropdownToggle = document.getElementsByClassName("dropdown-toggle");
const dropdownMenu = document.getElementsByClassName("dropdown-menu");
const links = document.getElementsByClassName('link');
const menu = document.getElementById('menu');
const breadcrumbs = document.querySelector('.breadcrumb');

/**
 * Menu
 */
function iniciarMenu() {
    /**
     * Para cada link, esconde todas as subpaginas e mostra a que foi seleccionada
     */
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            const content = this.getAttribute('href').replace('#', '');
            let subPages = document.getElementsByClassName("content");
            for (let j = 0; j < subPages.length; j++) {
                subPages[j].style.display = 'none';
            }

            if (content && document.querySelector(".content." + content)) {
                document.querySelector(".content." + content).style.display = 'block';
            }

            // Navigation bar
            if (menu.contains(this) && breadcrumbs) {
                breadcrumbs.innerHTML = this.outerHTML;
            }
            for (let a = 0; a < links.length; a++) {
                links[a].classList.remove('active');
            }
            this.classList.add('active');
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    /**
     * Cursor ao entrar no elemento mostra submenus
     */
    Array.prototype.forEach.call(dropdownToggle, function (el) {
        el.addEventListener("mouseenter", function () {
            this.closest('.dropdown').querySelector(".dropdown-menu").style.display = 'block';
        });
    });

    /**
     * Cursor ao sair do submenu, esconde os submenus filhos, se existirem e ele proprio
     */
    Array.prototype.forEach.call(dropdownMenu, function (el) {
        el.addEventListener("mouseleave", function () {
            if (this.querySelector(".dropdown-menu")) {
                this.querySelector(".dropdown-menu").style.display = 'none';
            }

            this.style.display = 'none';
        });
    });

    /**
     * Ao clickar fora do menu, esconde submenus
     */
    document.addEventListener("click", function () {
        Array.prototype.forEach.call(dropdownMenu, function (el) {
            el.style.display = 'none';
        });
    });
}

/**
 * Relogio
 */
function iniciarRelogio() {
    /** Adicionar data hora e corrente */
    document.getElementById("date").innerHTML = (new Date()).toLocaleString();
    setInterval(function () {
        /** Actualizar data e hora corrente */
        document.getElementById("date").innerHTML = (new Date()).toLocaleString();
    }, 1000);
}

/**
 * Personalizar a página com os dados do utilizador
 */
function personalizarPagina() {
    if (!retornarDado('img') || !retornarDado('img').toString().includes('.png')) {
        gravarDado('img', 'img1.png');
    }
    if (!retornarDado('name')) {
        gravarDado('name', 'Utilizador 1');
    }
    /** Actualizar nome utilizador */
    if (document.getElementById('username')) {
        document.getElementById('username').innerHTML = retornarDado('name');
    }
    /** Atualizar imagem thumbnail utilizador */
    if (document.getElementById('img')) {
        document.getElementById('img').src = document.getElementById('img').src + 'assets/img/profile/' + retornarDado('img');
    }

    /** Personalizar página com base no género */
    if (retornarDado('genero')) {
        document.querySelector('body').classList.add('normal');
        if (retornarDado('genero') == 'f') {
            document.querySelector('body').classList.remove('normal');
            document.querySelector('body').classList.add('girl');
        }
    }
}

/**
 * Abrir pagina com base na url
 * https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_loc_hash_set
 * https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3
 */
function abrirPagina() {
    var content = location.hash.replace('#', '');
    if (content) {
        if (document.querySelector(".content")) {
            document.querySelector(".content").style.display = 'none';
        }
        if (content && document.querySelector(".content." + content)) {
            document.querySelector(".content." + content).style.display = 'block';
        }
    }
}

function adicionarFormularioComentarios(){
    const commentsFooter = document.getElementById('commentsFooter')
    if(commentsFooter){
        commentsFooter.innerHTML = `
            <h4>Comentário:</h4>
            <form id="formularioComentar">
                <label for="Comentário"></label>
                <div class="form-control">
                    <textarea cols="30" name="texto" placeholder="Mensagem" rows="6"></textarea>
                </div>
                <input type="submit" value="Enviar">
            </form>
        `
        /**
         * Gravar comentarios
         * https://www.w3schools.com/jsref/jsref_isarray.asp
         * https://www.grepper.com/tpc/store+data+in+local+storage
         */
        const formularioComentar = document.getElementById('formularioComentar')
        if(formularioComentar){
            formularioComentar.onsubmit = function(event){
                event.preventDefault()

                let comentarios = retornarDado('comentarios');
                if (!comentarios){
                    comentarios = [];
                }else{
                    comentarios = JSON.parse(comentarios);
                }

                const mensagem = formularioComentar.querySelector('textarea[name=texto]');
                comentarios.push(mensagem.value);
                gravarDado('comentarios', JSON.stringify(comentarios));
                mensagem.value = ''

                if (typeof mostrarComentariosLista !== "undefined"){
                    mostrarComentariosLista()
                }
            }

        }
    }
}

iniciarMenu();
iniciarRelogio();
personalizarPagina();

abrirPagina();
adicionarFormularioComentarios();
