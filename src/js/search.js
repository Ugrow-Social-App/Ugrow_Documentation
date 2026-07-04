const form_search = document.getElementById("search_content");

form_search.addEventListener("submit", async function (event) {
    event.preventDefault();

    const dataForm = new FormData(form_search);

    const query = Object.fromEntries(dataForm).text_by_user;

    const results = await search_content(query);

    renderSearchResults(results);

    if (!results) {
        console.warn("No matches found on search");
    }
});

// Get the prefix of the key
function getPrefix(key) {
    return key.split(".")[0];
}

// Select just a part of the text with the value searched
function createSnippet(text, query, radius = 50) {
    const lower = text.toLowerCase();
    const index = lower.indexOf(query.toLowerCase());

    if (index === -1) {
        return text.length > 100
            ? text.slice(0, 100) + "..."
            : text;
    }

    const start = Math.max(0, index - radius);
    const end = Math.min(text.length, index + query.length + radius);

    return (
        (start > 0 ? "..." : "") +
        text.slice(start, end) +
        (end < text.length ? "..." : "")
    );
}

// Search the content from i18n files
const search_content = async (data) => {

    if (!data || !data.trim()) {
        renderSearchResults(null);
        return null;
    }

    try {

        const texts = await loadFile(getLanguage());
        const query = data.toLowerCase().trim();

        const matches = Object.entries(texts)
            .filter(([key, value]) =>
                String(value).toLowerCase().includes(query)
            )
            .map(([key, value]) => ({ key, value }))
            .sort((a, b) => a.value.length - b.value.length);

        const excludedPrefixes = [
            "header",
            "navbar",
            "footer",
            "contact"
        ];

        const filtered_matches = matches.filter(
            match => !excludedPrefixes.includes(getPrefix(match.key))
        );

        if (!filtered_matches.length) {
            return null;
        }

        const selected =
            filtered_matches.length <= 5
                ? filtered_matches
                : [...filtered_matches]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 5);

        return selected.map(item => ({
            href: `${getPrefix(item.key)}.html`,
            page: getPrefix(item.key),
            snippet: createSnippet(item.value, query)
        }));

    } catch (err) {

        console.error("There is an error in search content:", err);

        return null;
    }
};

// Render Search Results
function renderSearchResults(results) {

    const form = document.getElementById("search_content");

    let container = document.getElementById("search-results");

    if (!container) {

        container = document.createElement("div");
        container.id = "search-results";

        form.insertAdjacentElement("afterend", container);
    }

    container.innerHTML = "";

    // If don't have results, print the message 
    if (!results || !results.length) {

        container.style.display = "flex";

        container.innerHTML = `
            <span
                class="search-result-empty"
                data-i18n="header.input_container.error.message">
            </span>
        `;

        // Update content
        putLanguage()
        return;
    }

    container.style.display = "flex";

    results.forEach(result => {

        const card = document.createElement("a");

        card.className = "search-result-card";
        card.href = result.href;

        card.innerHTML = `
            <strong>${capitalize(result.page)}</strong>
            <span>${result.snippet}</span>
        `;

        container.appendChild(card);
    });
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Close the results when click out of modal
document.addEventListener("click", (event) => {

    const container = document.getElementById("search-results");

    if (!container) return;

    if (
        !form_search.contains(event.target) &&
        !container.contains(event.target)
    ) {
        container.style.display = "none";
    }

});

// Open again while tipping 
document.getElementById("search-input").addEventListener("input", async (e) => {

    const results = await search_content(e.target.value);

    renderSearchResults(results);

});