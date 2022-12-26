var loginForm = document.querySelector("#loginModal form")
var password = '123'

loginForm.onsubmit = function (e) {
    e.preventDefault();
    if (
        this.querySelector('#loginModal form input[name=username]').value === 'user123' && this.querySelector('#loginModal form input[name=password]').value === password
    ) {
        window.location.href = 'pages/area_reservada.html';
    }
}