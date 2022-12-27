var correcta1 = document.querySelector('#quizform input[name="resposta1"][value="1"]')
var correcta2 = document.querySelector('#quizform input[name="resposta2"][value="1"]')
var correcta3 = document.querySelector('#quizform input[name="resposta3"][value="4"]')
var correcta4 = document.querySelector('#quizform input[name="resposta4"][value="3"]')
var correcta5 = document.querySelector('#quizform input[name="resposta5"][value="2"]')
var form = document.getElementById('quizform')

form.onsubmit = function (event) {
    event.preventDefault()
    var inputs = form.getElementsByTagName('input')
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].closest('.form-control').style.display = 'none'
    }
    correcta1.closest('.form-control').style.display = 'block'
    correcta2.closest('.form-control').style.display = 'block'
    correcta3.closest('.form-control').style.display = 'block'
    correcta4.closest('.form-control').style.display = 'block'
    correcta5.closest('.form-control').style.display = 'block'

    correcta1.closest('.form-control').style.backgroundColor = 'green'
    correcta2.closest('.form-control').style.backgroundColor = 'green'
    correcta3.closest('.form-control').style.backgroundColor = 'green'
    correcta4.closest('.form-control').style.backgroundColor = 'green'
    correcta5.closest('.form-control').style.backgroundColor = 'green'

    document.querySelector('#quizform input[name="resposta1"]:checked').closest('.form-control').style.display = 'block'
    document.querySelector('#quizform input[name="resposta2"]:checked').closest('.form-control').style.display = 'block'
    document.querySelector('#quizform input[name="resposta3"]:checked').closest('.form-control').style.display = 'block'
    document.querySelector('#quizform input[name="resposta4"]:checked').closest('.form-control').style.display = 'block'
    document.querySelector('#quizform input[name="resposta5"]:checked').closest('.form-control').style.display = 'block'
    document.querySelector('#quizform button[type="submit"]').style.display = 'none'
    document.querySelector('#quizform #recomecarbtn').style.display = 'block'
}

/**
 * https://www.w3schools.com/jsref/met_loc_reload.asp
 */
document.querySelector('#recomecarbtn').onclick = function () {
    location.reload();

}