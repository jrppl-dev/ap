var dropdownToggle = document.getElementsByClassName("dropdown-toggle");
var dropdownMenu = document.getElementsByClassName("dropdown-menu");
var linkable = document.getElementsByClassName('linkable')
var menu = document.getElementById('menu')
var breadcrumbs = document.querySelector('.breadcrumb')

/**
 * Para cada link, esconde todas as subpaginas e mostra a que foi seleccionada
 */
for (var i = 0; i < linkable.length; i++) {
    linkable[i].addEventListener('click', function () {
        var content = this.getAttribute('href').replace('#', '')
        var subPages = document.getElementsByClassName("content")
        for (var j = 0; j < subPages.length; j++) {
            subPages[j].style.display = 'none'
        }

        if (document.querySelector(".content." + content)) {
            document.querySelector(".content." + content).style.display = 'block'
        }

        // Navigation bar
        if (menu.contains(this) && breadcrumbs) {
            breadcrumbs.innerHTML = this.outerHTML
        }
        for (var a = 0; a < linkable.length; a++) {
            linkable[a].classList.remove('active')
        }
        this.classList.add('active')
    })
}

/**
 * Cursor ao entrar no elemento mostra submenus
 */
Array.prototype.forEach.call(dropdownToggle, function (el) {
    el.addEventListener("mouseenter", function () {
        this.closest('.dropdown').querySelector(".dropdown-menu").style.display = 'block'
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

/**
 * Relogio
 */
document.getElementById("date").innerHTML = (new Date()).toLocaleString();
setInterval(function () {
    document.getElementById("date").innerHTML = (new Date()).toLocaleString();
}, 1000)

/**
 * Personalizar a página com os dados do utilizador
 */
function personalizar() {
    if (document.getElementById('username')) {
        document.getElementById('username').innerHTML = getCookie('username')
    }
    if (document.getElementById('img')) {
        document.getElementById('img').src = document.getElementById('img').src + 'assets/img/profile/' + getCookie('img')
    }

    if (getCookie('genero')) {
        document.querySelector('body').classList.add('normal')
        if (getCookie('genero') == 'f') {
            document.querySelector('body').classList.remove('normal')
            document.querySelector('body').classList.add('girl')
        }
    }
}

/**
 * Adicionar html do footer pelo javascript
 * https://www.w3schools.com/js/tryit.asp?filename=tryjs_templates_multiline
 */
function adicionarFooter() {
    document.querySelector('.footer').innerHTML = `
 <div class="container">
   <div class="row">
     <div class="footer-col">
       <h4>Manipulação da Fertilidade</h4>
       <ul>
         <li>
           <a href="historia.html">História</a>
         </li>
         <li>
           <a href="o_que.html">O que é?</a>
         </li>
         <li>
           <a href="tecnicas.html">Tecnicas de Reprodução Humanamente Assistidas</a>
         </li>
         <li>
           <a href="fatores/fatoresF.html">Fatores de Infertilidade Femininos</a>
         </li>
         <li>
           <a href="fatores/fatoresM.html">Fatores de Infertilidade Masculinos</a>
         </li>
         <li>
           <a href="conselhos.html">Conselhos</a>
         </li>
       </ul>
     </div>
     <div class="footer-col">
       <h4>Links Úteis</h4>
       <ul>
         <li>
           <a href="https://www.lusiadas.pt/hospitais-clinicas/hospital-lusiadas-lisboa/servicos/procriacao-medicamente-assistida">Lusíadas</a>
         </li>
         <li>
           <a href="https://www.medicalport.org/pt/procedimentos-medicos-turismo/procriacao-medicamente-assistida/procriacao-medicamente-assistida">MedicalPort</a>
         </li>
         <li>
           <a href="https://dre.pt/dre/legislacao-consolidada/lei/2006-34529775">Legislação Portuguesa</a>
         </li>
         <li>
           <a href="https://ceti.pt">CETI</a>
         </li>
       </ul>
     </div>
     <div class="footer-col">
       <h4>Realizado por:</h4>
       <ul>
         <li>
           <a href="mailto:marianabarata727@gmail.com">Mariana Barata (727)</a>
         </li>
         <li>
           <a href="mailto:leonorbras2005@gmail.com">Leonor Brás (579)</a>
         </li>
         <li>
           <a href="mailto:laurabras2005@gmail.com">Laura Brás (578)</a>
         </li>
       </ul>
     </div>
     <div class="footer-col">
       <h4>Comentário:</h4>
       <form>
         <label for="Comentário"></label>
         <textarea cols="50" form="usrform" name="comment" rows="6"> Mensagem </textarea>
         <input type="submit" value="Enviar">
       </form>
     </div>
   </div>
 </div>
    `;
}

/**
 * Abrir pagina com base na url
 * https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_loc_hash_set
 */
function abrirPagina() {
    var content = location.hash.replace('#', '')

    if (document.querySelector(".content")) {
        document.querySelector(".content").style.display = 'none';
    }
    if (document.querySelector(".content." + content)) {
        document.querySelector(".content." + content).style.display = 'block'
    }

}

abrirPagina();
adicionarFooter()
personalizar()