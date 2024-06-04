function login_abschicken(){
    let user = document.getElementById('login_window_input_benutzername').value;
    let password = document.getElementById('login_window_input_passwort').value;
    
    if (user == 'Manfred Mustermann' && password == 'TopSecret123') {
        window.location.href = 'Startseite.html';
    } else {
        alert("Falsches Passwort oder falscher Benutzername");
    }
}
