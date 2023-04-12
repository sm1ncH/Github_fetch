const input = document.querySelector('input');
const button = document.querySelector('button');
const stats = document.querySelector('.stats-div');
const inp_div = document.querySelector('.inp-div');

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
                <div class="stats-div">
                    <a href="https://github.com/${data.login}"><img src="${data.avatar_url}" alt="avatar"></a>
                    <h2>${data.name}</h2>
                    <p>${data.bio}</p>
                </div>
            `;
            stats.innerHTML = html;
        })
    
});
