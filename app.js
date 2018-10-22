var result = document.getElementById('#result');

document.getElementById('search').addEventListener('click')
    var name= document.getElementById('information')
    
axios 
.get('https://rickandmortyapi.com/api/character')
.then(response =>{
    
   search(response)
})
.catch(error => {
    console.log('error', error);
});

function search(response){
    result.innerHTML = response.data
    .map(function(characterData){
        return`
        <img src="${characterData.image}
        <h1>Name: ${characterData.name}</h1>
        <div>species: ${characterData.species}</div>
        <div>orgin name: ${characterData.orgin.Name}</div>
        <div>status:${characterData.status}</div>
        `;
    })
    .join('');
};