const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                            <p>Seguidores: ${user.followers ?? 'Não possui seguidores 😥'}</p>
                                            <p>Seguindo: ${user.following ?? 'Não está seguindo ninguém 😥'}</p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}"target="_blank">
        <h1>${repo.name}</h1>
        <p>🍴 ${repo.forks ?? ''}</p>
        <p>⭐ ${repo.stars ?? ''}</p>
        <p>👁 ${repo.watchers ?? ''}</p>
        <p>💻 ${repo.language ?? ''}</p>
        </li>`)

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }
            if(user.events.length > 0) {
            const last10Events = user.events.slice(0, 10);
            this.userProfile.innerHTML += `<div class = "events section">
                <h2>Eventos de repositórios</h2>`;
            last10Events.forEach(event => {
                const repositoryName = event.repoName;
                const commitMessage = event.message;
                this.userProfile.innerHTML += `<p>${repositoryName} - ${commitMessage}</p>`;
            });
            this.userProfile.innerHTML += `</div>`;
           
        }


    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }