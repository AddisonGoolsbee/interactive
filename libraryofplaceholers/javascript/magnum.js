let paragraphPlaceholder = ''

document.addEventListener("DOMContentLoaded", function () {
    const paragraphPlaceholderCount = Math.max(1, Math.floor(120 / placeholder.length));
    const backgroundPlaceholderCount = paragraphPlaceholderCount * 40;
    paragraphPlaceholder = Array(paragraphPlaceholderCount).fill(placeholder).join(' ');

    const titleContainer = document.getElementById('titleContainer');
    const titleElement = document.createElement('div');
    titleElement.classList.add('title');
    titleElement.textContent = title;
    titleContainer.appendChild(titleElement);
    const sourceElement = document.createElement('div');
    sourceElement.classList.add('source');
    sourceElement.textContent = 'Source: ' + source;
    titleContainer.appendChild(sourceElement);

    const container = document.getElementById('background');

    function loadPlaceholders() {
        for (let i = 0; i < backgroundPlaceholderCount; i++) {
            let span = document.createElement('span');
            span.classList.add('backgroundText');
            span.textContent = placeholder + ' ';
            container.appendChild(span);
        }
    }

    loadPlaceholders();

    const backgroundElement = document.getElementById('background');
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= backgroundElement.scrollHeight) {
            loadPlaceholders();
        }
    });

    const demo = document.getElementById('demo');
    const col1 = document.createElement('div');
    const col2 = document.createElement('div');
    const col3 = document.createElement('div');
    col1.classList.add('demoColumn');
    col2.classList.add('demoColumn');
    col3.classList.add('demoColumn');

    generateColumn1(col1);
    generateColumn2(col2);
    generateColumn3(col3);

    demo.appendChild(col1);
    demo.appendChild(col2);
    demo.appendChild(col3);
})

const generateColumn1 = (col) => {
    const bigBoldText = document.createElement('div');
    bigBoldText.classList.add('big');
    bigBoldText.textContent = title;
    bigBoldText.style.marginBottom = '14px';

    const para1 = document.createElement('p');
    para1.textContent = paragraphPlaceholder + ' ' + paragraphPlaceholder + ' ' + paragraphPlaceholder;
    const para1b = document.createElement('p');
    para1b.textContent = paragraphPlaceholder + ' ' + paragraphPlaceholder;
    para1b.classList.add('separator');

    const para2 = document.createElement('p');
    const boldText = document.createElement('strong');
    boldText.textContent = placeholder.split(' ').slice(0, 3).join(' ') + ' '; 
    para2.appendChild(boldText);
    para2.append(paragraphPlaceholder + ' ' + paragraphPlaceholder);
    para2.classList.add('separator');

    const hr1 = document.createElement('hr');
    hr1.classList.add('separator');

    const para3 = document.createElement('p');
    para3.textContent = paragraphPlaceholder;

    const para4 = document.createElement('p');
    para4.textContent = paragraphPlaceholder + ' ' + paragraphPlaceholder + ' ' + paragraphPlaceholder;

    col.appendChild(bigBoldText);
    col.appendChild(para1);
    col.appendChild(para1b);
    col.appendChild(para2);
    col.appendChild(hr1);
    col.appendChild(para3);
    col.appendChild(para4);
}

const generateColumn2 = (col) => {
    const para1 = document.createElement('p');
    para1.textContent = paragraphPlaceholder + ' ' + paragraphPlaceholder;

    const para2 = document.createElement('p');
    const boldText = document.createElement('strong');
    boldText.textContent = placeholder.split(' ').slice(0, 3).join(' ') + ' '; 
    para2.appendChild(boldText);
    para2.append(paragraphPlaceholder + ' ' + paragraphPlaceholder); 

    const hr1 = document.createElement('hr');

    const bigBoldText = document.createElement('div');
    bigBoldText.classList.add('big');
    bigBoldText.textContent = paragraphPlaceholder;

    const hr2 = document.createElement('hr');

    const para3 = document.createElement('p');
    para3.textContent = paragraphPlaceholder + ' ' + paragraphPlaceholder;

    const para4 = document.createElement('p');
    para4.textContent = paragraphPlaceholder + ' ' + paragraphPlaceholder + ' ' + paragraphPlaceholder;

    const para5 = document.createElement('p');
    para5.textContent = paragraphPlaceholder;

    col.appendChild(para1);
    col.appendChild(para2);
    col.appendChild(hr1);
    col.appendChild(bigBoldText);
    col.appendChild(hr2);
    col.appendChild(para3);
    col.appendChild(para4);
    col.appendChild(para5);
}

const generateColumn3 = (col) => {
    const bigBoldText = document.createElement('div');
    bigBoldText.classList.add('big');
    bigBoldText.textContent = placeholder.split(' ').slice(0, 6).join(' ') + ' ';
    bigBoldText.classList.add('separator');

    const para1 = document.createElement('p');
    para1.textContent = paragraphPlaceholder + ' ' + paragraphPlaceholder + ' ' + paragraphPlaceholder;
    para1.classList.add('separator');
    const para1b = document.createElement('p');
    para1b.textContent = paragraphPlaceholder + ' ' + paragraphPlaceholder;
    para1b.classList.add('separator');

    const middlep = document.createElement('p');
    middlep.classList.add('separator');
    middlep.style.textAlign = 'center';
    middlep.style.textIndent = '0';
    middlep.textContent =  placeholder.split(' ').slice(0, 3).join(' ');

    const para2 = document.createElement('p');
    const boldText = document.createElement('strong');
    boldText.textContent = placeholder.split(' ').slice(0, 3).join(' ') + ' '; 
    para2.appendChild(boldText);
    para2.append(paragraphPlaceholder + ' ' + paragraphPlaceholder);

    const para3 = document.createElement('p');
    para3.textContent = paragraphPlaceholder;

    const para4 = document.createElement('p');
    para4.textContent = paragraphPlaceholder + ' ' + paragraphPlaceholder + ' ' + paragraphPlaceholder;

    col.appendChild(para1);
    col.appendChild(bigBoldText);
    col.appendChild(para1b);
    col.appendChild(middlep);
    col.appendChild(para2);
    col.appendChild(para4);
}