const resumeBtn = document.getElementById("resume-btn");
const resumeModal = document.getElementById("resume-modal");
const closeBtn = document.getElementById("close-resume");

resumeBtn.addEventListener("click", () => {
    resumeModal.classList.add("show");
    document.body.classList.add("modal-open");
});

closeBtn.addEventListener("click", () => {
    resumeModal.classList.remove("show");
    document.body.classList.remove("modal-open");
});

// Close when clicking outside
resumeModal.addEventListener("click", (e) => {
    if (e.target === resumeModal) {
        resumeModal.classList.remove("show");
        document.body.classList.remove("modal-open");
    }
});
