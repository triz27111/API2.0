'use strict'



async function pesquisarCidades(cidade) {
    const url = `https://api.openbrewerydb.org/v1/breweries?by_state=${cidade}`

    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function criarCards(){
    const cidade = document.getElementById("inputCidade").value

    const cidadesEncontradas = await pesquisarCidades(cidade)

    const containerCidades = document.getElementById('states');

    cidadesEncontradas.forEach(item => {
        const cardContainer = document.createElement('div');
        cardContainer.className = "cardCidade"

 
        cardContainer.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.city}, ${item.state}, ${item.country}</p>
            <p>CEP:${item.postal_code}</p>
            <p>Telefone:${item.phone}</p>
            <p>Site:${item.website_url}</p>
            <button>Ver Mais</button>
            `;

            // cardContainer.replaceChildren('')
        containerCidades.appendChild(cardContainer);

    });
   
}

document.getElementById("botao")
    .addEventListener("click", criarCards)