const form = document.querySelector("#contactForm");
const nome = document.querySelector("#inputNome");
const email = document.querySelector("#inputEmail");
const assunto = document.querySelector("#inputAssunto");
const mensagem = document.querySelector("#inputMensagem");


form.addEventListener("submit", (e) =>{
  e.preventDefault();

  //verifica se o nome ta vazio
  if (nome.value === "") {
    alert("Digite seu nome");
    return;
  }

  //verifica se o email é valido
  if (email.value === "" || !isEmailValid(email.value)) {
    alert("Digite um email válido");
    return;
  }

  //verifica o assunto
  if (assunto.value === "") {
    alert("Cite um assunto");
    return;
  }
  // verifica a caixa de mensagem
  if (mensagem.value === "") {
    alert("Escreva sua mensagem");
    return;
  }
   form.submit();
   alert("memsagem enviada");
});
//função que valida e-mail
function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}
 


