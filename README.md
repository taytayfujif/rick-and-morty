# rick-and-morty

## Objective

Use your knowledge of HTTP request by using Axios to fetch star wars film information from an API and render to the DOM. Use only ES6.

## Prerequisites

- Basic knowledge of HTTP requests using Axios
- Basic understanding of API's.
- Basic understanding of JSON.

## Setup

- Clone repo to local machine.
- Create and link `index.html`, `styles.css`, `app.js`
- import `axios` cdn
- Sanity check in browser.

## Your Challenge

- Make a `GET` request to each `character` endpoint. Grab and append the respective values requested onto the DOM.
  - You can find the route/endpoint to call from the [Rick and Morty Documentation](https://rickandmortyapi.com/documentation/)
- Get each character's following values:
  - image
  - name
  - species
  - origin name
  - status
  - episode appearance

## Hints

1. Use `filter` and `map` method to render each character

2. Create a function named **`buildHtmlElements(responseData)`**. This is where you will use ES6 methods to build your HTML elements and dynamically add them to the DOM.

- Example html to build for each film and append to the **`<div id="result"></div>`** container:

```
    html
        <div class="character-container">
        <img class="character-image" src="CHARACTER IMAGE URL" />
        <h2 class="character-name">CHARACTER NAME</h2>
        <div class="character-species">CHARACTER SPECIES</div>
        <div class="character-origin-name">CHARACTER ORIGIN NAME</div>
        <div class="character-status">CHARACTER STATUS</div>
        <div class="character-episodes">CHARACTER EPISODE</div>
    </div>
```

### Testing

- Run HTML in browser.
- Build an event listener on the button, when clicked calls your getFilmData function. If configured functions properly, you should see the results appear on the DOM.

## Stretch Goals

1. Reformat your `buildHtmlElements` function using string templating.
2. Build more functions to get other film data including characters, planets, vehicles .......
3. Add simple CSS.

## Resources

[SWAPI](https://swapi.co/documentation#intro)

[jQuery Ajax](https://api.jquery.com/jQuery.ajax/)

[jQuery createElement()](https://api.jquery.com/?s=createElement%28%29)

[jQuery addClass()](https://api.jquery.com/addClass/)

[jQuery append()](https://api.jquery.com/append/)
