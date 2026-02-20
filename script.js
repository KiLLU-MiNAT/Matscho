// ========= VIDEO MODAL =========
// Option A: YouTube embed (ersetze VIDEO_ID unten)
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // <- HIER DEIN VIDEO EINTRAGEN

const openBtn = document.getElementById("openVideo");
const modal = document.getElementById("videoModal");
const ytFrame = document.getElementById("ytFrame");

function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    // autoplay + modest branding
    ytFrame.src = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
}

function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    ytFrame.src = ""; // stop playback
}

openBtn?.addEventListener("click", openModal);

modal?.addEventListener("click", (e) => {
    const target = e.target;
    if (target && (target.hasAttribute("data-close") || target.closest("[data-close]"))) {
        closeModal();
    }
});

// ESC close
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});