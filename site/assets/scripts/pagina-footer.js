/**
 * Adicionar html do footer pelo javascript
 * https://www.w3schools.com/js/tryit.asp?filename=tryjs_templates_multiline
 */
function adicionarFooter() {
    if (!document.querySelector('.footer')) {
        return;
    }
    var pasta = document.currentScript.getAttribute('data-pasta');
    document.querySelector('.footer').innerHTML = `
    `;
}

adicionarFooter();

