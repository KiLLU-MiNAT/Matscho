// protect.js
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

document.addEventListener("keydown", (e) => {
    // F12, Ctrl+Shift+I/J/C, Ctrl+U (View Source) blocken (nur "abschrecken")
    const key = e.key.toLowerCase();

    if (e.key === "F12") e.preventDefault();

    if (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) e.preventDefault();
    if (e.ctrlKey && key === "u") e.preventDefault();
});