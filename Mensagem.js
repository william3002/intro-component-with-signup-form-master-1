function Mensagem() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let rNome = document.getElementById("resNome");
    let rSobrenome = document.getElementById("resSobrenome");
    let rEmail = document.getElementById("resEmail");
    let rSenha = document.getElementById("resSenha");

    if (nome === "") {
        rNome.innerText = "First name cannot be empty";
        rNome.style.color = "red";
        document.getElementById("nome").style.border = "2px solid red";
    } else {
        rNome.innerText = "";
        rNome.style.color = "";
        document.getElementById("nome").style.border = "";
    }

    if (sobrenome === "") {
        rSobrenome.innerText = "Last name cannot be empty";
        rSobrenome.style.color = "red";
        document.getElementById("sobrenome").style.border = "2px solid red";
    } else {
        rSobrenome.innerText = "";
        rSobrenome.style.color = "";
        document.getElementById("sobrenome").style.border = "";
    }

    if (email === "") {
        rEmail.innerText = "Looks like this is not an email";
        rEmail.style.color = "red";
        document.getElementById("email").style.border = "2px solid red";
    } else {
        rEmail.innerText = "";
        rEmail.style.color = "";
        document.getElementById("email").style.border = "";
    }

    if (senha === "") {
        rSenha.innerText = "Password cannot be empty";
        rSenha.style.color = "red";
        document.getElementById("senha").style.border = "2px solid red";
    } else {
        rSenha.innerText = "";
        rSenha.style.color = "";
        document.getElementById("senha").style.border = "";
    }
}