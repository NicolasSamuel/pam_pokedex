const img = document.querySelector("img");
const fundo = document.querySelector(".fundo");



async function gerarPokemon(){
    try{
        let requisicoes = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        let pokeInfo = await requisicoes.json();

        for(let index=0 ;index < 151;index++){
        let pokemon = await pokeInfo.results[index].name;
        
        let fotos = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`);
        fundo.innerHTML += `
            <div class="pokemon" onclick='abrirInformacoes()'>
                <span>${pokemon}</span>
                <img src=${fotos} id="img-pokemon">    
            </div>             
        `
        }
}catch(erro){
    alert("Servidor indisponivel")
}
}
gerarPokemon();
// addeventilistiner (click,){

// window.open();
// // // https://pokeapi.co/api/v2/pokemon/ para puxar os atributos do pokemon
// }
// const urlParams = new URLSearchParams(window.location.search); para saber qual pokemon que peguei 
// const products = urlParams.get("produtos") // livros
// const author = urlParams.get("autor")