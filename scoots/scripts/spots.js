const container = document.querySelector(".card-2");
const members = "https://jhtr0226.github.io/wdd230/chamber/data/members.json";

async function getMembers() {

    const response = await fetch(members);
    const data = await response.json();
    return data.companies;


}


function displayMembers(companies) {
    container.innerHTML = "";
    companies.forEach(company => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');

        name.textContent = company.info[0].name;
        phone.textContent = `Phone: ${company.info[0].phone}`;
        website.textContent = `Website`;
        website.setAttribute('href', company.info[0].url);
        website.setAttribute('target', '_blank');

        image.setAttribute('src', company.info[0].image);
        image.setAttribute('alt', 'Image of commerce');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '500');
        image.setAttribute('height', '250');

        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);
        card.classList.add("mini-card-1")
        container.appendChild(card);


    });
}

function updateDisplay() {
    const currentDay = new Date().getDay();
    if (currentDay === 6) {
        let selectedCompanies = JSON.parse(localStorage.getItem('selectedCompanies'));
        if (!selectedCompanies) {
            getMembers().then(companies => {
                selectedCompanies = companies.sort(() => 0.5 - Math.random()).slice(0, 4);
                localStorage.setItem('selectedCompanies', JSON.stringify(selectedCompanies));
                displayMembers(selectedCompanies);
            });

        }
        else {
            displayMembers(selectedCompanies);
        }
    }

    else if (currentDay !== 6) {
        let selectedCompanies = JSON.parse(localStorage.getItem('selectedCompanies'));
        if (!selectedCompanies) {
            getMembers().then(companies => {
                selectedCompanies = companies.sort(() => 0.5 - Math.random()).slice(0, 4);
                localStorage.setItem('selectedCompanies', JSON.stringify(selectedCompanies));
                displayMembers(selectedCompanies);
            });
        } else {
            displayMembers(selectedCompanies);
        }
    }
}

updateDisplay();
setInterval(updateDisplay, 24 * 60 * 60 * 1000);