# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Desktop Initial State](./screenshots/Desktop%20Initial%20State.png)
![Desktop Hover State Invalid Email](./screenshots/Desktop%20Hover%20State%20Invalid%20Email.png)
![Desktop Hover State Empty Email](./screenshots/Desktop%20Hover%20State%20Empty%20Email.png)
![Mobile Initial State](./screenshots/Mobile%20Initial%20State.png)
![Mobile Initial State 2](./screenshots/Mobile%20Initial%20State%202.png)
![Mobile Hover State Invalid Email](./screenshots/Mobile%20Hover%20State%20Invalid%20Email.png)
![Mobile Hover State Empty Email](./screenshots/Mobile%20Hover%20State%20Empty%20Email.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/MarioLisbona/FEM-base-apparel-coming-soon)
- Live Site URL: [Add live site URL here](https://mariolisbona.github.io/FEM-base-apparel-coming-soon/)

## My process

I created a main container which contains an info-container and a hero image container. I used flexbox to position all the elements within both containers.

I used an error container that contains an error message and an error icon with the class hidden added to it. I remove/add this class when i need to hide or display the error message.

JavaScript is used to validate the email against a regex variable. This is all done within a function. The input element and the regex are passed to the function as arguments

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript for email validation


### What I learned

I used the knowledge that i learned in my previous project 'Intro component with signup form' to validate the email address. I used if/else statements to provide two different error messages depending on whether the email input is invalid or empty.

I put all that logic into a function and passed two arguments to it. the input and the regex variables.
This worked so i edited the signup form in the previous project.

## Author

- Frontend Mentor - [@MarioLisbona](https://www.frontendmentor.io/profile/MarioLisbona)

