const img = document.querySelector("img");
const fundo = document.querySelector(".fundo");



async function listar() {
    try {
        let requisicao = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        let resultado = await requisicao.json();

        let name = resultado.results[0].name;

        resultado.results.forEach(async element => {
            let name = element.name;

            try {
                let requisicao2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                let resultado2 = await requisicao2.json();
                
                fundo.innerHTML += `
                <div class="pokemon">
                    <p>${name}</p>
                    <a href="detalhes.html?id=${resultado2.id}"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${resultado2.id}.png" id="img-pokemon"></a>
                </div>`;
                    
            }
            catch {
    
            }
        });

        
    } catch (erro) {
        alert("servidor indisponivel")
    }
}


listar();
