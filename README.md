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

## Stretch Goals

1. Make request to other routes `/location` and `/episode`
2. Make pretty with CSS and use Flexbox

## Resources

[Rick and Morty API](https://rickandmortyapi.com/documentation/)

[Axios Docs](https://github.com/axios/axios)

[Axios CDN](https://cdnjs.com/libraries/axios)

[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[innerHTML](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)
