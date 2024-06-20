const buttonConselho = document.querySelector(".advice-update")
console.log(buttonConselho);
const idConselho = document.querySelector(".advice-id")
console.log(idConselho);
const textoConselho = document.querySelector(".advice-description")
console.log(textoConselho);

async function conselhos() {
    try {
        const responsavel = await fetch("https://api.adviceslip.com/advice")//busca a api para ser utilizada 
        if(!responsavel.ok){
            throw new Error("deu erro na API");
        }
        const conselhoConst = await responsavel.json()
        const idCon = `advice #${conselhoConst.slip.id}`// adiciona o numero do conselho do advice
        const textoCon = ` "${conselhoConst.slip.advice}"`//adiciona o conselho na classe advice-description

        idConselho.innerText = idCon //adiciona o id do conselho/numero
        textoConselho.innerText = textoCon //adiciona o tetxo do conselho 
    }catch(erro){
        console.error("erro API",erro)//referencia de erro
    }
}
buttonConselho.addEventListener("click", conselhos)
conselhos()