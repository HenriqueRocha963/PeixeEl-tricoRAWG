//nav balls

function navballs1() {
    let ball1 = document.getElementById('Db1')
    let ball2 = document.getElementById('Db2')
    let ball3 = document.getElementById('Db3')

    ball1.style.backgroundColor = '#ff6400'
    ball2.style.backgroundColor = '#ffffff'
    ball3.style.backgroundColor = '#ffffff'

}

function navballs2() {
    let ball1 = document.getElementById('Db1')
    let ball2 = document.getElementById('Db2')
    let ball3 = document.getElementById('Db3')

    ball2.style.backgroundColor = '#ff6400'
    ball1.style.backgroundColor = '#ffffff'
    ball3.style.backgroundColor = '#ffffff'
}

function navballs3() {
    let ball1 = document.getElementById('Db1')
    let ball2 = document.getElementById('Db2')
    let ball3 = document.getElementById('Db3')

    ball3.style.backgroundColor = '#ff6400'
    ball2.style.backgroundColor = '#ffffff'
    ball1.style.backgroundColor = '#ffffff'
}



//consumindo API RAWG

function geturl(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function geturl_plataforma(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function ListaRAWG() {

    let data = geturl("https://api.rawg.io/api/games?key=184fd4312509437a83fc3e19cba40074&page=2")
    let jogos = JSON.parse(data)

    return jogos

}

function ListaRAWG_plataforma() {

    let data = geturl_plataforma("https://api.rawg.io/api/platforms?key=184fd4312509437a83fc3e19cba40074")
    let plataforma = JSON.parse(data)

    return plataforma

}


function ExibirJogo_Destaque() {

    let divTela_dest = document.getElementById('carousel');
    let texto = '';
    let Games = ListaRAWG()
    let cont = 11;
    contvid = 0;
    let idvar = ["D1", "D2", "D3"]
    let selecionados = [0, 2, 4]

    let ytblink = ["https://www.youtube.com/embed/Z2tmHMIA1sU", "https://www.youtube.com/embed/M80K51DosFo", "https://www.youtube.com/embed/-cSFPIwMEq4"]
    let dsttexto = ["O jogo trata de uma premissa controversa: assalto a bancos. Você e um grupo de amigos ou desconhecidos devem colaborar para roubar dinheiro e fugir da polícia.",
        "O jogo se passa na cidade ficcional de Liberty City, com a história um jogador seguindo o imigrante Niko Bellic e suas tentativas de fugir do passado apesar da pressão de agiotas e criminosos. O mundo aberto permite que os jogadores naveguem livremente pelas três ilhas que formam a cidade."
        , "O jogo é baseado em partidas no modo online e offline, em cada uma delas o objetivo é derrotar a equipe adversária e, para isso, é, indispensavelmente, necessário destruir o Ancestral (Ancient), que, por sua vez, se localiza no centro da base inimiga."]


    for (i = 0; i < 3; i++) {

        texto += `<li class="carousel_videotexto">
        <div class="carousel_conteudo" id=${idvar[contvid]}>
            <iframe class="carousel_video" src=${ytblink[contvid]}
                title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="texto-destaque">
                <h1 id="Titulo">${Games["results"][selecionados[contvid]]["name"]}</h1>
                <p id="texto_resumo">${dsttexto[contvid]}</p>
                <p id="data_lancament0"><b>Data de lançamento:</b> ${Games["results"][selecionados[contvid]]["released"]}</p>
                <p id="autor_jogo"><b>Favoritados:</b> ${Games["results"][selecionados[contvid]]["added"]}</p>
                <p id="nota_jogo"><b>Rating:</b> ${Games["results"][selecionados[contvid]]["rating"]}</p>
            </div>
        </div>
    </li>`

        cont++;
        contvid++;
    }

    divTela_dest.innerHTML = texto;

}

function ExibirJogo_explorar() {

    let divTela_explo = document.getElementById('grid_exp');
    let texto = '';
    let Games = ListaRAWG()
    let cont = 4;


    for (i = 0; i < 8; i++) {


        texto += `<div>
        <h1>${Games["results"][cont]["name"]}</h1>
        <img src=${Games["results"][cont]["background_image"]} alt="imagem">
        <a href="detalhes.html?game=${cont}">Mais detalhes...</a>
    </div>`

        cont++;
    }

    divTela_explo.innerHTML = texto;

}

function ExibirJogo_Plataforma() {

    let divTela_plata = document.getElementById('plataforma');
    let texto = '';
    let plat = ListaRAWG_plataforma()
    let cont = 0;


    for (i = 0; i < 3; i++) {


        texto += `<div>
        <h1>${plat["results"][cont]["name"]}</h1>
        <img src=${plat["results"][cont]["image_background"]} alt="">
        <ul>
            <caption>Informações</caption>
            <li>Lançamento: ${plat["results"][cont]["year_start"]}</li>
            <li>Jogos disponíveis: ${plat["results"][cont]["games_count"]}</li>
        </ul>
        </div>`

        cont++;
    }

    divTela_plata.innerHTML = texto;

}

function ExibirJogo_Publisher() {

    let divTela_publi = document.getElementById('grid_plataforma');
    let texto = '';
    let Games = ListaRAWG()
    let cont = 5;


    for (i = 0; i < 3; i++) {


        texto += `<div>
        <h1>${Games["results"][cont]["name"]}</h1>
        <img src=${Games["results"][cont]["background_image"]} alt="">
        <ul>
            <caption>Sobre</caption>
            <li>Ano: ${Games["results"][cont]["released"]}</li>
            <li>Gênero: ${Games["results"][cont]["genres"][0]["name"]}</li>
            <li>Plataforma: ${Games["results"][cont]["platforms"][0]["platform"]["name"]}</li>
        </ul>
        <a href="detalhes.html?game=${cont}">Mais detalhes</a>
        </div>`

        cont++;
    }

    // document.getElementById("detalhes").addEventListener("click", ExibirJogo_detalhes(cont))

    divTela_publi.innerHTML = texto;


}



function CarregarAPI() {

    ExibirJogo_Plataforma();
    ExibirJogo_explorar();
    ExibirJogo_Publisher();
    ExibirJogo_Destaque()

}


// RAWG para pagina detalhes



function ExibirJogo_detalhes(origem) {

    let divTela_publi = document.getElementById('sec_detalhes1');
    let texto2 = '';
    let Games = ListaRAWG()

    const params = new URLSearchParams(origem);

    let cont = params.get("game");

    console.log('origem =', origem);

    texto2 += `<div class="titulo_detalhes">
        <h1>${Games["results"][cont]["name"]}</h1>
    </div>
    <div class="detalhes_foco">
        <div class="imagem_principal_detalhes" id="imagem_principal_detalhes">
        <img src=${Games["results"][cont]["background_image"]} alt="imagem_principal" id="imagem_mutavel">
        </div>
        <div class="texto-detalhe">
            <p><b>ID: </b>${Games["results"][cont]["id"]}</p>
            <p><b>Data de lançamento: </b>${Games["results"][cont]["released"]}</p>
            <p><b>Metacrítica: </b>${Games["results"][cont]["metacritic"]}</p>
            <p><b>Número de votos: </b>${Games["results"][cont]["ratings_count"]}</p>
            <p><b>Nota: </b>${Games["results"][cont]["rating"]}</p>
        </div>
    </div>`
    divTela_publi.innerHTML = texto2;


    let containerfotos = document.getElementById('grid_images_detalhes');
    let imagens = '';
    let contfotos = 0;

    for (i = 0; i < 7; i++) {

        console.log(Games["results"][cont]["short_screenshots"][contfotos]["image"])
        imagens += `
        <img onclick="novaprincipal(${contfotos})" src=${Games["results"][cont]["short_screenshots"][contfotos]["image"]} alt="imagem_secundaria">
        `
        contfotos++;
    }
    containerfotos.innerHTML = imagens;

}


function novaprincipal(ident){

    let divTela_imgprinc = document.getElementById('imagem_principal_detalhes');
    let txt = '';
    let Games = ListaRAWG()
    const params = new URLSearchParams(origem);
    let cont = params.get("game");

    txt = `
        <img src=${Games["results"][cont]["short_screenshots"][ident]["image"]} alt="imagem_secundaria">
        `
    
    divTela_imgprinc.innerHTML = txt;


}
