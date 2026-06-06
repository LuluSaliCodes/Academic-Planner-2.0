export function initializeModal() {
    const openBtn = document.getElementById("add-course-btn");
    const closeBtn = document.getElementById("close-modal");
    const overlay = document.getElementById("modal-overlay");

    openBtn.addEventListener("click", () => {
        overlay.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.add("hidden");
    });
}