const tela = document.getElementById("tela")
const body = document.querySelector("body")
const botoes = document.querySelectorAll("button")
const style = document.getElementById("btnStyle")
botoes.forEach(botao=>{
    botao.addEventListener("click",()=>{
        if(botao.dataset.valor){
            tela.value+= botao.dataset.valor
        } else if(botao.dataset.operacao){
            tela.value += botao.dataset.operacao
        }else if (botao.id === "calcular"){
            try{ 
                tela.value = eval(tela.value)
            } catch{
                tela.value = "ERROR"
            }
        }else if(botao.id === "excluir"){
            tela.value = tela.value.slice(0,-1)
        } else if(botao.id === "apagarTd"){
            tela.value =""
        }
    })
})

style.addEventListener("click",()=>{
    if(body.dataset.style==="white"){
        body.style.backgroundColor ="#332e2e"
        botoes.forEach(botao=>{
            botao.style.backgroundColor = "#21c21b"
            botao.style.color = "#dfe2e4"
        })
        tela.style.backgroundColor ="#332e2e"
        tela.style.color = "#dfe2e4"
        tela.style.borderColor = "#21c21b"
        body.dataset.style = "dark"

    }else{
        body.style.backgroundColor ="#dfe2e4"
        botoes.forEach(botao=>{
            botao.style.backgroundColor = "#dfe2e4"
            botao.style.color = "#332e2e"
        })
        tela.style.backgroundColor ="#dfe2e4"
        tela.style.color = "#332e2e"
        tela.style.borderColor = "#332e2e"
        body.dataset.style = "white"
    }
})