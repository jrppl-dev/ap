/**
 * Consulta:
 * Powerpoint
 */
/**
 * Gravar dado de utilizador
 */
function gravarDado(nome, valor) {
    localStorage.setItem(nome, valor)
}

/**
 * Buscar dado de utilizador
 */
function retornarDado(nome) {
    return localStorage.getItem(nome) ?? '';
}


