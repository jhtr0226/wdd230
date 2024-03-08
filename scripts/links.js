const baseURL = "https://jhtr0226.github.io/wdd230/";
const linksURL = "https://jhtr0226.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
getLinks();


function displayLinks(weeks) {
    const linksList = document.querySelector('.my-list');

    weeks.forEach(week => {
        const WeekNum = week.lesson;
        const links = week.links;

        const weekListNum = document.createElement('li');
        weekListNum.textContent = { WeekNum };
        linksList.appendChild(weekListNum);

        const listOfLinks = document.createElement('ul');

        links.forEach((link) => {
            const linkListNum = document.createElement('li');
            const linkA = document.createElement('a');

            linkA.href = baseURL + linksURL;
            linkA.textContent = link.title;


            linkListNum.appendChild(linkA);
            listOfLinks.appendChild(linkListNum);
        });

        linksList.appendChild(weekListNum);
        linksList.appendChild(listOfLinks);

        if (index < links.length - 1) {
            const separator = document.createTextNode(' | ');
            listOfLinks.appendChild(separator);
        }

        linksList.appendChild(listOfLinks);
    });


}

