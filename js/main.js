function enviar() {
    var nome = myForm.getElementById("nomeid");
    var email = myForm.getElementById("emailid");
    var mensagem = myForm.getElementById("mensagemid");

    if (nome.value != "") {
        alert("nome inserido!");
        myForm.nome.focus();
        return false;

    }
    if (email.value != "") {
        alert("email inserido!");
        myForm.email.focus();
        return false;
    }
    if (mensagem != "" || mensagem < 10) {
        alert("digite sua msg!")
        myForm.mensagem.focus();
        return false;
    }

    alert("Sua mensagem foi enviada com sucesso!");
}