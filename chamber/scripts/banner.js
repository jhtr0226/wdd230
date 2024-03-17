const today = new Date().getDay();
if (today == 6) {
    const banner = document.createElement('div');
    const bannerContent = document.createElement('div');
    const bannerText = document.createElement('div');
    const closeButton = document.createElement('button');

    banner.classList.add('banner');
    bannerContent.classList.add('banner-content');
    bannerText.classList.add('banner-text');
    bannerText.textContent = "Remember to attend our Chamber of Commerce meet and greet on Wednesday at 7:00 PM!";
    closeButton.classList.add('banner-button');
    closeButton.innerHTML = '<span class="material-icons">close</span>';

    bannerContent.appendChild(bannerText);
    bannerContent.appendChild(closeButton);
    banner.appendChild(bannerContent);

    const spaceDiv = document.getElementById('space');
    spaceDiv.appendChild(banner);


    closeButton.addEventListener("click", function () {
        banner.style.display = "none";
    });
}
