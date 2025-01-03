// Fonction pour récupérer et afficher les derniers articles
async function fetchLatestNews() {
    try {
        const response = await fetch('/api/news');
        const data = await response.json();
        displayNews(data.posts);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les articles');
    }
}

// TODO: Question 1 - Compléter la fonction displayNews
function displayNews(news) {
    const container = document.getElementById('news-container');
    // Utilisez Bootstrap pour créer des cards pour chaque article
    container.innerHTML = ''; // Nettoyer le conteneur avant d'ajouter les articles

    news.forEach(article => {
        // Créer une card Bootstrap pour chaque article
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4'); // Chaque article occupe 4 colonnes sur les écrans moyens

        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.body}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `;

        container.appendChild(card); // Ajouter la carte dans le conteneur
    });
}


// TODO: Question 2 - Créer une fonction pour gérer les erreurs
//Implémenter la fonction showError
function showError(message) {
    // Afficher un message d'erreur avec Bootstrap
    const container = document.getElementById('news-container');
    container.innerHTML = `
        <div class="alert alert-danger" role="alert">
            ${message}
        </div>
    `;
}


// Initialisation
document.addEventListener('DOMContentLoaded', fetchLatestNews);