const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}



const members = "https://jhtr0226.github.io/wdd230/chamber/data/members.json";

const space = document.querySelector('#card1');

async function getMembers() {
    const response = await fetch(members);
    const data = await response.json();

    displayMembers(data.companies);
}

getMembers();

const displayMembers = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');
        let address = document.createElement('p');
        let time = document.createElement('p');
        let images = document.createElement('img');

        images.setAttribute('src', company.image);
        images.setAttribute('alt', 'Image of commerce');
        images.setAttribute('loading', 'lazy');
        images.setAttribute('width', '340');
        images.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(address);
        card.appendChild(time);
        card.appendChild(images);

        space.appendChild(card);
    });
}