const titleElem = document.querySelector('.title')


document.addEventListener('keyup', function(event){ // A keyup event that sets to entire window

    appendValueToDom(event)

    let userEventKey = event.key.toUpperCase() // event.key returns the word name in lowerCase(like g or a),but we set the keyboards key id whit upperCase( like G or A),so we need to transform the event.key to upperCase
    let mainKeyElem = document.getElementById(userEventKey) // get the html tag by its id. the id saved into the userEventKey

    mainKeyElem.classList.add('hit') // adds the hit class to the tag which was run a onkeyup event on it 

    mainKeyElem.addEventListener('animationend',function(){ // we need to remove the hit class for the next onkeyup event
        mainKeyElem.classList.remove('hit')
    })

})

function appendValueToDom (event){
    if (event.code === 'Backspace'){ // if we click on backspace key, then clear the last word of titleElem
        titleElem.innerHTML = titleElem.innerHTML.slice(0,-1)
        return // we put return to this line,so when the if fires,then do not run the next line code
    }
    titleElem.innerHTML += event.key // if we click on eny of keybord keys, then add this word to the titleElem
}