document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("dlSearch");
    const grid = document.getElementById("dlGrid");
    const chips = document.querySelectorAll(".chip");

    if (!grid) return;

    let activeFilter = "all";

    function applyFilters() {
        const q = (search?.value || "").toLowerCase().trim();
        const cards = grid.querySelectorAll(".dlCard");

        cards.forEach(card => {
            const type = card.dataset.type;
            const title = (card.dataset.title || "").toLowerCase();

            const matchType = activeFilter === "all" || type === activeFilter;
            const matchQuery = !q || title.includes(q);

            card.style.display = (matchType && matchQuery) ? "" : "none";
        });
    }

    chips.forEach(btn => {
        btn.addEventListener("click", () => {
            chips.forEach(b => b.classList.remove("is-active"));
            btn.classList.add("is-active");
            activeFilter = btn.dataset.filter || "all";
            applyFilters();
        });
    });

    search?.addEventListener("input", applyFilters);
});