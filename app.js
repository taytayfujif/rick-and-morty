const result = document.querySelector('#result');

axios 
.get('https://rickandmortyapi.com/api/character')
.then(response =>{
    
    buildHTMLElements(response);
})
.catch(error => {
    console.log('error', error);
});

const buildHTMLElements = (response)=>{
result.innerHTML = response
    .map( characterData=>{
        return`
        <div>image:${characterData.imagee}</div>
        <h1>Name: ${characterData.name}</h1>
        <div>species: ${characterData.species}</div>
        <div>orgin name: ${characterData.orginName}</div>
        <div>status:${characterData.status}</div>
        `;
    })
    .join('');
};

