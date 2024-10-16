// // how to import firebase from ./firebase.js, which exports const app  

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
// import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"; 
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCSt_HLBQVO2cPuZ6bpV37-WYBbLgrnRt0",
//     authDomain: "library-of-placeholders.firebaseapp.com",
//     projectId: "library-of-placeholders",
//     storageBucket: "library-of-placeholders.appspot.com",
//     messagingSenderId: "295046155553",
//     appId: "1:295046155553:web:dcffb491a4f73577564260",
//     measurementId: "G-N3FJJYGCZK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// async function fetchPlaceholders() {
//     const placeholdersCollection = collection(db, "placeholders");
//     const placeholderSnapshot = await getDocs(placeholdersCollection);
//     placeholderSnapshot.forEach(doc => {
//         console.log(doc.id, "=>", doc.data());
//     });
// }

// document.addEventListener("DOMContentLoaded", function () {
//     fetchPlaceholders();
// });

import data from './data.js'

let paragraphPlaceholder = ''
let timeoutId = null;

let title = data[entry - 1].title
let placeholder = data[entry - 1].placeholder
let source = data[entry - 1].source

document.addEventListener("DOMContentLoaded", function () {
    generateNav();

    const paragraphPlaceholderCount = Math.max(1, Math.floor(120 / placeholder.length));
    const backgroundPlaceholderCount = paragraphPlaceholderCount * 40;
    paragraphPlaceholder = Array(paragraphPlaceholderCount).fill(placeholder).join(' ');

    const titleContainer = document.getElementById('titleContainer');
    const titleElement = document.createElement('div');
    titleElement.classList.add('title');
    titleElement.textContent = title;
    titleContainer.appendChild(titleElement);
    const contentElement = document.createElement('div');
    contentElement.classList.add('placeholder');
    contentElement.textContent = placeholder;
    contentElement.contentEditable = true;
    titleContainer.appendChild(contentElement);
    const sourceElement = document.createElement('div');
    sourceElement.classList.add('source');
    sourceElement.textContent = 'Source: ' + source;
    titleContainer.appendChild(sourceElement);



    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(contentElement);
    range.collapse(false); // Collapse the range to the end
    selection.removeAllRanges();
    selection.addRange(range);
    contentElement.focus();

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

    // const backgroundElement = document.getElementById('background');
    // window.addEventListener('scroll', () => {
    //     if (window.innerHeight + window.scrollY >= backgroundElement.scrollHeight) {
    //         loadPlaceholders();
    //     }
    // });

    const demo = document.getElementById('demo');
    const col1 = document.createElement('div');
    const col2 = document.createElement('div');
    const col3 = document.createElement('div');
    col1.classList.add('demoColumn');
    col2.classList.add('demoColumn');
    col3.classList.add('demoColumn');
    col1.contentEditable = true;
    col2.contentEditable = true;
    col3.contentEditable = true;
    demo.appendChild(col1);
    demo.appendChild(col2);
    demo.appendChild(col3);

    generateColumn1(col1);
    generateColumn2(col2);
    generateColumn3(col3);

    contentElement.addEventListener('input', () => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            placeholder = contentElement.textContent;
            const paragraphPlaceholderCount = Math.max(1, Math.floor(120 / placeholder.length));
            paragraphPlaceholder = Array(paragraphPlaceholderCount).fill(placeholder).join(' ');
            generateColumn1(col1);
            generateColumn2(col2);
            generateColumn3(col3);
        }, placeholder.length > 200 ? 100 : 0);
    });

})

const generateNav = () => {
    let prevEntry = entry - 1;
    let nextEntry = entry + 1;
    if (entry <= 1) {
        prevEntry = data.length;
    }
    if (entry >= data.length) {
        nextEntry = 1;
    }

    const nav = document.createElement('nav');

    const prevLink = document.createElement('a');
    prevLink.href = `entry${String(prevEntry).padStart(3, '0')}.html`
    prevLink.textContent = 'Previous';
    nav.appendChild(prevLink);

    const homeLink = document.createElement('a');
    homeLink.href = '../index.html';
    homeLink.textContent = 'Library of Placeholders';
    nav.appendChild(homeLink);

    const nextLink = document.createElement('a');
    nextLink.href = `entry${String(nextEntry).padStart(3, '0')}.html`;
    nextLink.textContent = 'Next';
    nav.appendChild(nextLink);

    document.body.insertBefore(nav, document.body.firstChild);
}

const generateColumn1 = (col) => {
    col.innerHTML = '';

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
    col.innerHTML = '';
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
    col.innerHTML = '';
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
    middlep.textContent = placeholder.split(' ').slice(0, 3).join(' ');

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