const form = document.getElementById("loginForm");
const usuarioInput = document.getElementById("usuario");
const senhaInput = document.getElementById("senha");
const mensagem = document.getElementById("loginMensagem");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value.trim();

    if (usuario === "admin" && senha === "123456") {
        window.location.href = "home.html";
        return;
    }

    mensagem.textContent = "Usuário ou senha inválidos.";
    mensagem.style.color = "red";
    mensagem.style.marginTop = "10px";
});