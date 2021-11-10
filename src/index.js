// Your code here
    // fetch('http://localhost:3000/characters')
    // .then((resp) => resp.json())
    // .then((json) => console.log(json));

    fetch('http://localhost:3000/characters')
    .then(function (response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json)
    });

    function displayCharacterName(json) {
        const characterName = json.characters['name'];
        const nameSpan = document.getElementById('name')
        const nameToDisplay = characters.name;
        const nameBar = document.createElement('hi')
        HTMLHeadingElement.innerHTML = characterName;
        nameSpan.appendchild(heading);

    }
    

// function renderCharacterNames(characterName) {
//     let characterName = document.createElement('#character-bar');
//     characterName.className = 'name';
//     characterName.innerHTML = <span ${charaters.name}
//     <h1>${characters.name}</h1>
//     </span>
// }

// document.querySelector('#character-bar').appendChild(characterName)

// function initialize(){
//     characterData.forEach(character => renderOneCharacter(character))
// }
