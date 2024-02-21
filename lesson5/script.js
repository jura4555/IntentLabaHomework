let debounceTimer;

function getRepositoriesWithDebounce() {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        getRepositories();
    }, 300);
}

function getRepositories() {

    let username = document.getElementById("usernameInput").value;
    let loader = document.getElementById("loader");
    let repositories = document.getElementById("repositories");

    if(username === '') {
        alert("Please enter a GitHub username");
        return;
    }

    loader.classList.remove('hidden');

    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(data => {
        loader.classList.add('hidden');

        repositories.innerHTML = '';

        if(data.length > 0){
            data.forEach(repo => {
                const card = document.createElement('div');
                card.classList.add('repository-card');
                card.innerHTML = `
                    <strong>${repo.name}</strong><br>
                    Language: ${repo.language}<br>
                    <a href="${repo.html_url}" target="_blank">View Repository</a>`;
                repositories.appendChild(card);
            });
        } else {
            repositories.innerHTML = 'No repositories found.';
        }
    }).catch(error => {
        loader.classList.add('hidden');
        console.error('Error fetching repositories:', error);
    });
}


let button = document.getElementById("button");
button.addEventListener('click', getRepositories);

let input = document.getElementById("usernameInput");
input.addEventListener('input', getRepositoriesWithDebounce);
