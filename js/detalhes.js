let id =window.location.search.slice(4);
console.log('kalebe',id);
let tipos= [];
let habilidades= [];
const fundo = document.querySelector(".ion-wrap");
console.log(fundo);

console.log(id);




    async function listarHabilidades(){


        let requisicao = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let pokemon = await requisicao.json();

        let requisicao3 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        let cor = await requisicao3.json();

        console.log(pokemon)



        // fundo.innerHTML= `
        // <div class="pai-pokemon">
        // <div class="fundo-1">
        //     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" id="img-pokemon">
        // </div>
        //     <div class="nome-pokemon">
        //         <h2>${pokemon.name}</h2>
        //     </div>
        // `
        // pokemon.abilities.forEach(element => {
        //     console.log(element);
        //     const habilidade = document.querySelector(".ion-wrap");
        //     habilidade.innerHTML += 
        //     `
        //         <div class="h">Habilidade ${element.ability.name}</div>
        //     `
        // });
        // pokemon.types.forEach(element => {
        //     console.log(element);
        //     const fundo = document.querySelector(".ion-wrap");
        //     fundo.innerHTML += 
        //     `
        //         <div class="h">Tipo: ${element.type.name}</div>
        //     `
        //     console.log(element.type.name);
        // });
        // const peso = document.querySelector(".ion-wrap");
        // peso.innerHTML +=
        // `
        //     <div class="h">Peso: ${pokemon.weight}kg</div>
        //     </div>
        // `
        fundo.innerHTML= `
        <div class="pai-pokemon">
        <div class="fundo-${cor.color.name}">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif" height="130px">
        </div>
            <div class="nome-pokemon">
                <h2>${pokemon.name}</h2>
            </div>
            <div class="espacamento">
                <div class="h">Nº #${pokemon.id}</div>
                <div class="h">Peso: ${pokemon.weight}kg</div>
                <div class="h">Cores: ${cor.color.name}</div>
            </div>
        </div>
        `
    }  

    listarHabilidades();
