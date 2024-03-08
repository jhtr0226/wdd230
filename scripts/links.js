const baseURL = "https://jhtr0226.github.io/wdd230/";
const linksURL = "https://jhtr0226.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    const linksList = document.querySelector('.my-list');

    weeks.forEach(week => {
        const weekNum = week.lesson;
        const links = week.links;

        const weekListNum = document.createElement('li');
        weekListNum.textContent = weekNum;

        const listOfLinks = document.createElement('ul');
        let linkIndex = 0;

        links.forEach((link) => {
            const linkListNum = document.createElement('li');
            const linkA = document.createElement('a');

            linkA.href = baseURL + link.url; // Use link.url instead of linkURL
            linkA.textContent = link.title;

            linkListNum.appendChild(linkA);
            listOfLinks.appendChild(linkListNum);

            if (linkIndex < links.length - 1) {
                const separator = document.createTextNode(' | ');
                listOfLinks.appendChild(separator);
            }

            linkIndex++; // Correct the variable name to linkIndex
        });

        weekListNum.appendChild(listOfLinks); // Append listOfLinks to weekListNum
        linksList.appendChild(weekListNum); // Append weekListNum to linksList
    });
}
getLinks();
