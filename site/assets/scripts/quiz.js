const respostas = [
    document.querySelector('#quizform input[name="resposta1"][value="1"]'),
    document.querySelector('#quizform input[name="resposta2"][value="2"]'),
    document.querySelector('#quizform input[name="resposta3"][value="4"]'),
    document.querySelector('#quizform input[name="resposta4"][value="3"]'),
    document.querySelector('#quizform input[name="resposta5"][value="2"]')
];
const form = document.getElementById('quizform');
const maxTentativas = 3;
/**
 * Consulta
 * https://www.w3schools.com/js/js_string_templates.asp
 * https://www.w3schools.com/jsref/jsref_parseint.asp
 * https://stackoverflow.com/questions/7540397/convert-nan-to-0-in-javascript
 * https://www.w3schools.com/js/js_loop_forof.asp
 */

/** Guarda o numero de tentativas */
let tentativas = retornarDado('tentativas') || 1;
/** Mostra no formulario  */
document.getElementById('counter').innerHTML = `
    ${tentativas} de ${maxTentativas}
`;

form.onsubmit = function (event) {
    event.preventDefault();
    /** Guarda tentativas */
    gravarDado('tentativas', tentativas);

    /** Esconde todos os elementos que contêm inputs e desativa */
    var inputs = form.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].closest('.form-control').style.display = 'none';
        inputs[i].disabled = true;
    }

    /** Mostra as linhas de respostas */
    for (let element of respostas) {
        element.closest('.form-control').style.display = 'block';
    }

    /** Nas respostas do utilizador, mostra a verde corretas e a vermelhor erradas */
    let correct = 0;
    let userAnswers = document.querySelectorAll('#quizform input:checked');
    for (let element of userAnswers) {
        element.closest('.form-control').style.display = 'block';
        if (!respostas.includes(element)) {
            element.closest('.form-control').textContent = '🔥 ' + element.closest('.form-control').textContent;
        } else {
            element.closest('.form-control').textContent = '✅ ' + element.closest('.form-control').textContent;
            correct++;
        }
    }
    /** Nas respostas não escolhidas pelo utilizador, mas corretas, mostra a verde */
    let allAnswers = document.querySelectorAll('#quizform input:not(:checked)');
    for (let element of allAnswers) {
        if (respostas.includes(element)) {
            element.closest('.form-control').style.backgroundColor = 'green';
        }
    }

    /** Mostrar resultado caso o utilizador acerte em todas */
    document.querySelector('#resultados').style.display = 'block';
    if (correct == 5) {
        document.querySelector('#resultados').innerHTML = `
        <h1>✨✨✨✨✨</h1>
        <h1>Parabéns!</h1>
        <h1>✨✨✨✨✨</h1>
        <h2>Voçê acertou ${correct} de 5 perguntas</h2>  
        `;
        gravarDado('tentativas', 1);
        document.querySelector('#quizform button[type="submit"]').style.display = 'none';
        document.querySelector('#quizform #recomecarbtn').style.display = 'block';
        /** Termina */
        return;
    }

    /** Atingiu o numero máximo de tentativas */
    if (tentativas > maxTentativas) {
        /**
         * Mostrar resultado
         */
        document.querySelector('#resultados').style.backgroundColor = '#ff00005e';
        document.querySelector('#resultados').innerHTML = `
        <h1>🚨🚨🚨🚨🚨</h1>
        <h1>Errado!</h1>
        <h1>🚨🚨🚨🚨🚨</h1>
        <h2>Voçê acertou ${correct} de 5 perguntas</h2>  
        `;

        tentativas = 0;
        gravarDado('tentativas', tentativas);
        document.querySelector('#quizform button[type="submit"]').style.display = 'none';
        document.querySelector('#quizform #recomecarbtn').style.display = 'block';
        /** Termina */
        return;
    }
    /**
     * Continua
     * Caso nao acerte todas ou o numero maximo de tentativas nao foi atingido
     */
    document.querySelector('#resultados').innerHTML = `
        <h1>Tente novamente</h1>
        <h2>Voçê acertou ${correct} de 5 perguntas</h2>  
        `;
    document.querySelector('#quizform button[type="submit"]').style.display = 'none';
    document.querySelector('#quizform #recomecarbtn').style.display = 'block';
    window.scrollTo({top: 0, behavior: 'smooth'});

    /**
     * Aumenta numero de tentativas e guarda o valor
     */
    tentativas++;
    gravarDado('tentativas', tentativas);
};

/**
 * Recomeçar
 *
 * Ao recomeçar se o número maximo de tentativas foi atingido, volta a meter o valor a 1
 *
 * https://www.w3schools.com/jsref/met_loc_reload.asp
 */
document.querySelector('#recomecarbtn').onclick = function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
    if (tentativas > maxTentativas) {
        gravarDado('tentativas', 1);
    }

    location.reload();
};