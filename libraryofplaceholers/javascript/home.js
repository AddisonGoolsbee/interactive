import data from './data.js'

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');

    const drawer = document.createElement('div');
    drawer.classList.add('drawer');
    container.appendChild(drawer);
    drawer.addEventListener('click', () => {
        drawer.classList.toggle('open');
    });

    const aboutButton = document.getElementById('what');
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.querySelector('.popup');
    const closePopup = document.getElementById('closePopup');

    aboutButton.addEventListener('click', () => {
        popupOverlay.classList.add('show');
        popup.classList.add('show');
    });

    closePopup.addEventListener('click', () => {
        popupOverlay.classList.remove('show');
        popup.classList.remove('show');
    });

    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer');
    container.appendChild(pageContainer);
    for (let i = data.length - 1; i >= 0; i--) {
        const title = data[i].title;
        const placeholderPreview = data[i].placeholder.slice(0, 100);

        const url = `./entries/entry${String(i + 1).padStart(3, '0')}.html`
        const page = document.createElement('div');
        page.classList.add('placeholderThumbnail');

        const titleElement = document.createElement('div');
        titleElement.textContent = title;
        titleElement.classList.add('placeholderTitle');

        const contentElement = document.createElement('div');
        contentElement.textContent = placeholderPreview;
        contentElement.classList.add('placeholderContent');

        page.appendChild(titleElement);
        page.appendChild(contentElement);

        page.onclick = () => { window.location.href = url }
        page.style.top = `${7 * (data.length - 1 - i)}px`
        page.style.left = `${3 * (data.length - 1 - i)}px`

        pageContainer.appendChild(page);
    }

    const folderContainer = document.getElementById('container')
    folderContainer.addEventListener('click', () => {
        folderContainer.classList.toggle('open-folder'); 
    });
});