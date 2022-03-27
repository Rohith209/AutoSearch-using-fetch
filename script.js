const itemsData = document.querySelector('.items-list');
const itemCard = document.querySelector('[data-user-card]');
const cardTemplate = document.querySelector('[data-users-template]');
const searchText = document.querySelector('[data-search-input]');

searchText.addEventListener('input', (data, item) => {
    // console.log(users)
    users.forEach(user => {
        const isVisible = (user.name.toLowerCase().includes(data.target.value) || user.email.toLowerCase().includes(data.target.value.toLowerCase()));
        user.element.classList.toggle("hide", !isVisible);

    })
})
let users = [];
var itemsList = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
    users = data.map(user => {
        const card = cardTemplate.content.cloneNode(true).children[0];
        const heading = card.querySelector('[data-user-heading]');
        const body = card.querySelector('[data-user-body]');
        heading.textContent = user.name;
        body.textContent = user.email;
        itemsData.append(card);
        return { name: user.name, email: user.email, element: card }
    });
});
