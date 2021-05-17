# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Links

- Live Site URL: [Add live site URL here](https://arthurgc.github.io/crowdfunding-product-page/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Mobile-first workflow
- Media Queries

### What I learned

This challenge was useful for learning about localStorage and SessionStorage. Besides, get more training about mobile first and media queries on CSS.

This was for declare a default variables if there aren't any variable saved on your localStorage.
```js
if (typeof(Storage) !== "undefined") {
  // Store
  if (!localStorage.money) {
    localStorage.money = 89914;
  }
  if (!localStorage.backers) {
    localStorage.backers = 5007;
  }
  if (!localStorage.width) {
    localStorage.width = 89;
  }
  if (!localStorage.bamboo) {
    localStorage.bamboo = 101;
  }
  if (!localStorage.black) {
    localStorage.black = 64;
  }
  if (!localStorage.mahogany) {
    localStorage.mahogany = 0;
  }
}
```
This was useful for refresh edited styles from JS but not for CSS.
```js
    element.style.anyProperty = '';
```


### Useful resources

- [Platzi localStorage/SessionStorage](https://platzi.com/blog/local-storage-html5/) - This helped me for using localStorage and save many variable values even after browser is closed.  
- [W3 Schools localStorage/SessionStorage](https://www.w3schools.com/HTML/html5_webstorage.asp) - You can read about localStorage there too.

## Author

- Github - [ArthurGC](https://github.com/ArthurGC)