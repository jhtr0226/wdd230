const baseURL = "https://jhtr0226.github.io/wdd230/";
const linksURL = "https://jhtr0226.github.io/wdd230/data/links.json";


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}


function displayLinks(weeks) {
    const activitiesList = document.querySelector('.numbered-list');
    activitiesList.innerHTML = '';

    weeks.forEach(week => {
        const { lesson, links } = week;
        const weekListItem = document.createElement('li');
        weekListItem.innerHTML = `<strong>Lesson ${lesson}:</strong>`;

        const linksList = document.createElement('ul');
        links.forEach(link => {
            const linkListItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url.startsWith('http') ? link.url : baseURL + link.url;
            anchor.textContent = link.title;
            linkListItem.appendChild(anchor);
            linksList.appendChild(linkListItem);
        });

        weekListItem.appendChild(linksList);
        activitiesList.appendChild(weekListItem);
    });
}

getLinks();