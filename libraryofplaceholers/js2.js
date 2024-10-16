document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * 15) + 1;
        window.location.href = `./entries/index${String(randomIndex).padStart(3, '0')}`;
    });
});

/**
 * placeholders stored in a separate js file, loaded based on number, which each entry is given
 * on home page, load all placeholders given the total number of placeholders
 * spawn a stack of placeholders 15 pages each with the title. Click to go to entry
 * overlap these pages, give them an animation that moves them up. 
 * make an actual title
 * what is this? button with pop up
 * filing cabinet in the center
 * clicking on cabinet drawer "opens" it, revealing its pages
 */