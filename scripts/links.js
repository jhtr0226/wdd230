const baseURL = "https://jhtr0226.github.io/wdd230/";
const linksURL = "https://jhtr0226.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(lessons) {
    const linksList = document.querySelector('.my-list');

    lessons.forEach(lesson => {
        const lessonNum = lesson.lesson;
        const links = lesson.links;

        const lessonListNum = document.createElement('li');
        lessonListNum.textContent = lessonNum + ":";

        const listOfLinks = document.createElement('ul');

        links.forEach((link, linkIndex) => {
            const linkListNum = document.createElement('li');
            const linkA = document.createElement('a');

            linkA.href = baseURL + link.url;
            linkA.textContent = link.title;

            linkListNum.appendChild(linkA);
            listOfLinks.appendChild(linkListNum);

            if (linkIndex < links.length - 1) {
                const separator = document.createTextNode(' | ');
                listOfLinks.appendChild(separator);
            }

        });

        lessonListNum.appendChild(listOfLinks);
        linksList.appendChild(lessonListNum);
    });
}
getLinks();
