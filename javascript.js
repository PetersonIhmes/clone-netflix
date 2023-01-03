let botao = document.getElementById("button-pergunta")
    let menu = document.getElementById("pergunta")
    let imagem = document.getElementById("imagem-pergunta")


    function resposta() {
        if (menu.style.display == "none") {
            menu.style.display = "block"
            imagem.id= "imagem-pergunta-girar"
        } else {
            menu.style.display = "none"
            imagem.id = "imagem-pergunta"
        }
    }
    botao.addEventListener("click", resposta)