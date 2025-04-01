document.addEventListener("DOMContentLoaded", () => {
    fetch('https://api.openbrewerydb.org/v1/breweries?by_state=california')
        .then(response => response.json())
        .then(data => {
            const breweryList = document.getElementById('brewery-list');
            breweryList.innerHTML = data.slice(0, 3).map(brewery => `
                <div class="brewery-card">
                    <img src="https://via.placeholder.com/150" alt="${brewery.name}">
                    <h3>${brewery.name}</h3>
                    <p>${brewery.state}</p>
                    <button>Ver Mais</button>
                </div>
            `).join('');
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});
