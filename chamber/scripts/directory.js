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
    console.log(data.company);
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
        let address = document.createElement('a');
        let time = document.createElement('p');
        let images = document.createElement('img');

        name.textContent = company.info[0].name;
        phone.textContent = `Phone: ${company.info[0].phone}`;
        website.textContent = `Web`;
        website.setAttribute('href', company.info[0].url);
        website.setAttribute('target', '_blank');
        membership.textContent = `Membership Level: ${company.info[0].membership
            }`;
        address.textContent = `Address: ${company.info[0].address}`;
        address.setAttribute('href', `https://www.google.com/maps/place/${encodeURIComponent(company.info[0].address)}`);
        address.setAttribute('target', '_blank');
        time.textContent = `${company.info[0].loyalty
            } as a member`;

        images.setAttribute('src', company.info[0].image);
        images.setAttribute('alt', 'Image of commerce');
        images.setAttribute('loading', 'lazy');
        images.setAttribute('width', '400');
        images.setAttribute('height', '250');

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