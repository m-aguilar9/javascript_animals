const school_buttons = document.getElementsByName("school-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

school_buttons.forEach(button => {
    button.addEventListener("change", event => {
        text.innerHTML = "Here's a picture of " + button.value
        photo.src = "images/" + button.id + ".jpg"
    })
})
