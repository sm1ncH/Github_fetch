const input = document.querySelector('input');
const button = document.querySelector('button');
const stats = document.querySelector('.stats-div');
const inp_div = document.querySelector('.inp-div');
const more_inf = document.querySelector('.more_info');
const pop = document.querySelector('.inner');


button.addEventListener('click', () => {
    const value = input.value;
    const url = `https://api.github.com/users/${value}`;
    fetch(url)
        .then(Response => {
            if(Response.ok) {
                return Response.json();
            } else {
                throw new Error('Request failed!');
            }
        })
        .then(data => {
            console.log(data.avatar_url);
            const html = `
                <style>
                .stats {
                    widht: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    background-color: #fff;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                    // margin: 20px;
                    color: black;
                    transition: all 0.5s ease-in-out;
                  }
                  .stats .show{
                    opacity: 0;
                  }
                  .stats{
                    height: 150px;
                  }
                  a {
                    text-decoration: none;
                  }
                  .stats:hover {
                    transform: scale(1.7);
                    height: 270px;
                    margin-left: -20px;
                    margin-top: -20px;
                    height: 200px;
                    margin-bottom: 70px;
                    padding: 20px auto;
                  }
                  .stats:hover .show{
                    opacity: 1;
                  }
                </style>
                <a href="https://github.com/${data.login}">
                <div class="stats">
                    <img src="${data.avatar_url}" alt="avatar">
                    <h2>${data.name}</h2>
                    <p>${data.location}</p>
                    <p>${data.bio}</p>
                    <p class="show">${data.followers} Followers</p>
                    <p class="show">${data.following} Following</p>
                    <p class="show">${data.public_repos} Repos</p>
                    <p class="show">${data.created_at} Created</p>
                </div>
                </a>
            `;
            stats.innerHTML = html;
        })
    
});
