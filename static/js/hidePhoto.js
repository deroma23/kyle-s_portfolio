const hidePhoto = document.querySelector("#click-me");
const thoughtBubble = document.querySelector(".thought-bubble");
const imageContainer = document.querySelector(".image-container");
const resumeContainer = document.querySelector(".resume-container");
const hideResumeBtn = document.querySelector("#hide");

// First Click – show resume, hide image & bubble
hidePhoto.addEventListener('click', (e) => {
    e.preventDefault();

    // 1. Animate and then hide thought bubble
    thoughtBubble.classList.remove("show-click-me-btn");
    void thoughtBubble.offsetWidth;
    thoughtBubble.classList.add("hide-click-me-btn");

    thoughtBubble.addEventListener("animationend", () => {
        thoughtBubble.style.display = "none";
    }, { once: true });

    // 2. Animate photo out
    imageContainer.classList.remove("show-photo");
    void imageContainer.offsetWidth;
    imageContainer.classList.add("hide-photo");

    // 3. Animate resume in
    resumeContainer.style.display = "block";
    resumeContainer.classList.remove("hide-resume");
    void resumeContainer.offsetWidth;
    resumeContainer.classList.add("display-resume");
});


// Click X – hide resume, show image & bubble again
hideResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // 1. Animate resume out, then hide
    resumeContainer.classList.remove("display-resume");
    void resumeContainer.offsetWidth;
    resumeContainer.classList.add("hide-resume");

    resumeContainer.addEventListener("animationend", () => {
        resumeContainer.style.display = "none";
    }, { once: true });

    // 2. Animate image back in
    imageContainer.classList.remove("hide-photo");
    void imageContainer.offsetWidth;
    imageContainer.classList.add("show-photo");

    // 3. Bring thought bubble back
    thoughtBubble.style.display = "flex"; // or "block"
    thoughtBubble.classList.remove("hide-click-me-btn");
    void thoughtBubble.offsetWidth;
    thoughtBubble.classList.add("show-click-me-btn");
});
