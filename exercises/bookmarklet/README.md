# Bookmarklet Workshop

This workshop is a brief introduction to making a bookmarklet. A bookmarklet is a small piece of JavaScript code that can be saved as a bookmark in your browser. When you click on the bookmark, the JavaScript code is executed on the current page.

## Getting Started

1. Visit this page: [Bookmarklet Generator](https://generatebookmarklet.pages.dev/).
2. Copy the code below and paste it into the text area.

```javascript
javascript:(function(){alert('Hello, World!');})();
```
        
3. Click the "Generate Bookmarklet" button.
4. Drag the generated link to your bookmarks bar.
5. Visit a website and click on the bookmarklet.

Let's try something more interesting. In this example, we will replace all images on a page with a random color. Copy and paste the code below into the text area.

```javascript
document.querySelectorAll('img').forEach( img => {
        img.src ="";
        img.srcset = "";
        img.alt = "";
        img.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`});
```

Before we proceed, let's break down the code:

- `document.querySelectorAll('img')` selects all the images on the page.
- `forEach` is a method that iterates over each image.
- `img.src =""` and `img.srcset =""` remove the image source and source set, effectively hiding the image.
- `img.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`` sets the background color of the image to a random color.


## Workshop: Introducing Friction

I want us to spend a few minutes reading and discussing the following article: [DESIGNING FRICTION](https://designingfriction.com/). Considering the ideas presented in the article, how might we design a bookmarklet that introduces friction in digital spaces? I’d like you to pair up into groups of two to come up with ideas for a bookmarklet—a small tool that can be easily added to a web browser—that introduces friction into a website. Consider how the bookmarklet might be used to disrupt habitual behaviors, encourage reflection, or add a layer of complexity to an otherwise smooth digital experience.

Here are a few guiding questions to shape your brainstorming session:

- What is the purpose of the bookmarklet?
        Think about what you want to achieve with this tool. Are you aiming to slow users down, make them more deliberate, or perhaps interrupt certain interactions?

- How does the bookmarklet introduce friction?
        Identify the mechanisms through which the bookmarklet creates obstacles, delays, or challenges. What kind of friction is most effective in achieving your desired goal?

Let’s take 10 minutes to brainstorm ideas with your partner. Afterward, we’ll come back together as a group to share and discuss our ideas. After that, we will spend the next 30 minutes building the bookmarklet.

## Project worth taking a look at

- [American Artist-Whitney Museum Sunset](https://news.artnet.com/art-world/american-artist-whitney-museum-1896561)
- [Must Waste More Time...](https://patorjk.com/misc/scrollingtext/timewaster.php?text=Must+Waste+More+Time...)
- [Fungal.page](https://fungal.page/)
- [The Useless Web](https://theuselessweb.com/)
- [serve your trash](https://serveyourtra.sh/)
- [Sometimes red, sometimes blue](https://sometimesredsometimesblue.com/)

## Resources

- [Bookmarklet Generator](https://generatebookmarklet.pages.dev/)
- [DESIGNING FRICTION](https://designingfriction.com/)
