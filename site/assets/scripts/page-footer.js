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
       <ul id="footer-links">
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
         <textarea cols="50" form="usrform" name="comment" rows="6" placeholder="Mensagem"></textarea>
         <input type="submit" value="Enviar">
       </form>
     </div>
   </div>
 </div>
    `;
}

function adicionarFooterLinks() {
    const links = document.querySelectorAll('#menu .dropdown-item:not(.dropdown-toggle)');
    const footerLinks = document.getElementById('footer-links')
    let html = '';
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.closest('li')) {
            html += footerLinks.innerHTML + '<li>' + link.closest('li').innerHTML + '</li>';
        }
    }
    footerLinks.innerHTML = html;
}

adicionarFooter();
adicionarFooterLinks();

