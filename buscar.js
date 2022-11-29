
//carregar opções 

function ExibirLista() {

    let divTela_lista = document.getElementById('jogospossiveis');
    let texto = '';
    let jogos = ListaRAWG()
    let cont = 0;


    for (i = 0; i < 19; i++) {


        texto += `<option value=${jogos["results"][cont]["slug"]}>`

        cont++;
    }

    divTela_lista.innerHTML = texto;

}

function Enviarresp() {
    jogos = ListaRAWG()
    let opc = 40
    for (let i = 0; i < 20; i++){
        if (document.getElementById('buscar').value == jogos["results"][i]["slug"]) {
            opc = i;
        }
    }
    let link = `detalhes.html?game=${opc}`
    window.location.href = link
}

