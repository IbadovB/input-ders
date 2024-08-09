const list = document.querySelector(".list")

function addItem(event) {
    event.preventDefault()
    const inputText = event.target.text
    if (inputText.value === "") {
        return
    }
    const item = document.createElement("li")
    item.innerText = inputText.value
    list.appendChild(item)
     inputText.value = ""
    }

    /*function del(event) {
        event.preventDefault()
        // item.innerText = ""
        // inputText.value = ""
    }*/