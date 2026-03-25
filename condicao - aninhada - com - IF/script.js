let renda = Number(prompt("digite sua renda"));
// ! Símbolo de negação 
// isNaN: Is not a number (verifica se NÃO é um número)
if(!isNaN(renda)){
    if (renda >= 3000) {
        let nomelimpo = prompt ("Nome limpo?(sim ou não)");
        if (nomelimpo === "sim") {
            alert ("Financiamento aprovado");
        } else {
            alert ("Nome negativado");
        }
    } else {
        alert("Renda insuficiente");
    }
}