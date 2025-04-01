'use scrict'
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const cardContainer = document.getElementById("cardContainer");

    async function buscarCervejarias(cidade) {
        const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=3`);
        const breweries = await response.json();
        exibirCervejarias(cervejarias);
    }

    function exibirCervejarias(cervejarias) {
        cardContainer.innerHTML = "";
        cervejarias.forEach(cervejaria => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            card.innerHTML =`
                <div class="card-content">
                    <h3>${cervejaria.name}</h3>
                    <p>${cervejaria.state}</p>
                    <button onclick="window.open('${cervejaria.website_url}', '_blank')">Ver Mais</button>
                </div>
            `;
            cardContainer.appendChild(card);
        });
    }

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const cidade = searchInput.value.trim();
            if (cidade) {
                fetchBreweries(cidade);
            }
        }
    });
});

exibirCervejarias()
