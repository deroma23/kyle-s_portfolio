const hidePhoto = document.querySelector("#click-me")

const imageContainer = document.querySelector(".image-container")

hidePhoto.addEventListener('click', (e) => {
    e.preventDefault();
    imageContainer.classList.add("hide-photo")

})