// downloads.js
// Builds the three tables on downloads.html from public/data/app_versions.json.
// Translations are handled by the existing i18n.js: we just add data-i18n
// attributes to the cells/links we create, then call putLanguage() to fill
// them in — same mechanism the rest of the site already uses.

const VERSIONS_FILE = './public/data/app_versions.json';

async function loadVersions() {
    const response = await fetch(VERSIONS_FILE);
    return response.json();
}

function createCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

function createDownloadLink(url) {
    if (!url) {
        const unavailable = document.createElement('span');
        unavailable.className = 'table_unavailable';
        unavailable.setAttribute('data-i18n', 'downloads.table.unavailable');
        return unavailable;
    }

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'table_download_link';
    link.setAttribute('data-i18n', 'downloads.table.download_label');
    return link;
}

function createEmptyRow(columnCount) {
    const row = document.createElement('tr');
    row.className = 'empty_state';

    const cell = document.createElement('td');
    cell.colSpan = columnCount;
    cell.setAttribute('data-i18n', 'downloads.table.empty_state');
    row.appendChild(cell);

    return row;
}

function fillCurrentRelease(versions) {
    const tableBody = document.getElementById('current_release_table_body');
    tableBody.innerHTML = '';

    const platforms = versions.current?.platforms || [];
    if (platforms.length === 0) {
        tableBody.appendChild(createEmptyRow(5));
        return;
    }

    platforms.forEach((platform) => {
        const row = document.createElement('tr');
        row.append(
            createCell(platform.label),
            createCell(versions.current.version),
            createCell(versions.current.releaseDate),
            createCell(platform.size)
        );

        const actionCell = document.createElement('td');
        actionCell.appendChild(createDownloadLink(platform.downloadUrl));
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    });

    // Point the quick download buttons at the top of the article to the right file
    document.querySelectorAll('[data-download-os]').forEach((button) => {
        const platform = platforms.find((p) => p.os === button.dataset.downloadOs);
        if (platform?.downloadUrl) {
            button.href = platform.downloadUrl;
        } else {
            button.removeAttribute('href');
            button.classList.add('disabled_link');
        }
    });
}

function fillVersionHistory(versions) {
    const tableBody = document.getElementById('version_history_table_body');
    tableBody.innerHTML = '';

    const history = versions.history || [];
    if (history.length === 0) {
        tableBody.appendChild(createEmptyRow(4));
        return;
    }

    let lastYear = null;

    history.forEach((entry) => {
        const year = entry.date.slice(0, 4);

        if (year !== lastYear) {
            lastYear = year;
            const yearRow = document.createElement('tr');
            yearRow.className = 'year_divider';
            yearRow.id = `history_${year}`;

            const yearCell = document.createElement('td');
            yearCell.colSpan = 4;
            yearCell.textContent = year;
            yearRow.appendChild(yearCell);

            tableBody.appendChild(yearRow);
        }

        const row = document.createElement('tr');
        row.append(createCell(entry.version), createCell(entry.date));

        const notesCell = document.createElement('td');
        notesCell.setAttribute('data-i18n', entry.notesKey);
        row.appendChild(notesCell);

        const actionCell = document.createElement('td');
        actionCell.appendChild(createDownloadLink(entry.downloadUrl));
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    });
}

function fillRequirements(versions) {
    const tableBody = document.getElementById('requirements_table_body');
    tableBody.innerHTML = '';

    const requirements = versions.requirements || [];
    if (requirements.length === 0) {
        tableBody.appendChild(createEmptyRow(3));
        return;
    }

    requirements.forEach((requirement) => {
        const row = document.createElement('tr');
        row.append(
            createCell(requirement.label),
            createCell(requirement.minimum),
            createCell(requirement.recommended)
        );
        tableBody.appendChild(row);
    });
}

async function setupDownloadsPage() {
    const versions = await loadVersions();

    fillCurrentRelease(versions);
    fillVersionHistory(versions);
    fillRequirements(versions);

    // Translate the labels and notes we just added (download button text,
    // changelog notes). getLanguage() is already used internally by putLanguage(),
    // no need to check it here.
    putLanguage();
}

document.addEventListener('DOMContentLoaded', setupDownloadsPage);