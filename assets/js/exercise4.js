let div1= document.querySelector('#div1')
div1.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    div1.style.backgroundColor= "red"
    } else if (event.key === 's') {
    div1.style.backgroundColor= "blue"
    }
    })
