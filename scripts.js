function add(){
    let valorInput = document.querySelector('input').value

    let li = document.createElement('li')
    li.innerHTML = valorInput + `<span onclick="del(this)">🚮</span>`

    document.querySelector('ul').appendChild(li)

    document.querySelector('input').value = ''
}

function del(li){
    li.parentElement.remove()
}



