import data from './data.js'

document.addEventListener("DOMContentLoaded", function () {
    console.log(data[0])
    /**
     * <ul>
        <li>
            <a href="entries/entry001.html">Entry 1</a>
        </li>

        document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * 15) + 1;
        window.location.href = `./entries/index${String(randomIndex).padStart(3, '0')}`;
    });
});
     */
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer');
    document.body.appendChild(pageContainer);
    for (let i = 0; i < data.length; i++) {
        const title = data[i].title;
        const url = `./entries/entry${String(i+1).padStart(3, '0')}.html`
        const page = document.createElement('div');
        page.classList.add('placeholderThumbnail');
        page.textContent = title;
        page.onclick = () => {window.location.href = url}
        page.style.top = `${200 + 10*i}px`
        page.style.left = `${200 + 5*i}px`
        pageContainer.appendChild(page);
    }
    // generateNav();

    // const paragraphPlaceholderCount = Math.max(1, Math.floor(120 / placeholder.length));
    // const backgroundPlaceholderCount = paragraphPlaceholderCount * 40;
    // paragraphPlaceholder = Array(paragraphPlaceholderCount).fill(placeholder).join(' ');

    // const titleContainer = document.getElementById('titleContainer');
    // const titleElement = document.createElement('div');
    // titleElement.classList.add('title');
    // titleElement.textContent = title;
    // titleContainer.appendChild(titleElement);
    // const contentElement = document.createElement('div');
    // contentElement.classList.add('placeholder');
    // contentElement.textContent = placeholder;
    // contentElement.contentEditable = true;
    // titleContainer.appendChild(contentElement);
    // const sourceElement = document.createElement('div');
    // sourceElement.classList.add('source');
    // sourceElement.textContent = 'Source: ' + source;
    // titleContainer.appendChild(sourceElement);

});