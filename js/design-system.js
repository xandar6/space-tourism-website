// Visual destination tab examples: one row for each selected destination.
function renderDestinationTabExamples(surface) {
    const destinations = ['moon', 'mars', 'europa', 'titan']

    destinations.forEach((selectedDestination, selectedIndex) => {
        const tabList = document.createElement('div')
        tabList.className = 'tab-list'
        tabList.setAttribute('role', 'tablist')
        tabList.setAttribute('aria-label', `Destinations — ${selectedDestination} selected example`)

        // These labels are fixed, trusted strings used only in the visual demo.
        tabList.innerHTML = destinations.map((destination, destinationIndex) => {
            const isSelected = selectedIndex === destinationIndex

            return `<button
                class="tab text-muted"
                type="button"
                role="tab"
                aria-selected="${isSelected}"
                tabindex="${isSelected ? '0' : '-1'}">
                ${destination}
            </button>`
        }).join('')

        surface.appendChild(tabList)
    })
}

// Shared by the desktop catalogue and the mobile preview document.
// Pages without a matching surface need no initialization.
document.querySelectorAll('[data-destination-tab-examples]')
    .forEach(renderDestinationTabExamples)






// Visual numbered pagination examples: one row for each selected destination.
function renderNumberedPaginationExamples(surface) {
    const pages = ['1', '2', '3']

    pages.forEach((selectedPage, selectedIndex) => {
        const paginationGroup = document.createElement('div')
        paginationGroup.className = 'number-pagination'
        paginationGroup.setAttribute('role', 'group')
        paginationGroup.setAttribute('aria-label', `Page — ${selectedPage}`)

        // These labels are fixed, trusted strings used only in the visual demo.
        paginationGroup.innerHTML = pages.map((page, pageIndex) => {
            const isSelected = selectedIndex === pageIndex
            return `<button type="button" aria-label="Page — ${selectedPage}" aria-current="${isSelected}">
                ${page}
            </button>`
        }).join('')

        surface.appendChild(paginationGroup)
    })
}

// Shared by the desktop catalogue and the mobile preview document.
// Pages without a matching surface need no initialization.
document.querySelectorAll('[data-numbered-pagination-examples]')
    .forEach(renderNumberedPaginationExamples)






// Visual Dot pagination examples: one row for each selected destination.
function renderDotPaginationExamples(surface) {
    const pages = ['1', '2', '3', '4']

    pages.forEach((selectedPage, selectedIndex) => {
        const paginationGroup = document.createElement('div')
        paginationGroup.className = 'dot-pagination'
        paginationGroup.setAttribute('role', 'group')
        paginationGroup.setAttribute('aria-label', `Page — ${selectedPage}`)

        // These labels are fixed, trusted strings used only in the visual demo.
        paginationGroup.innerHTML = pages.map((page, pageIndex) => {
            const isSelected = selectedIndex === pageIndex
            return `<button type="button" aria-label="Page — ${selectedPage}" aria-current="${isSelected}">
            </button>`
        }).join('')

        surface.appendChild(paginationGroup)
    })
}

// Shared by the desktop catalogue and the mobile preview document.
// Pages without a matching surface need no initialization.
document.querySelectorAll('[data-dot-pagination-examples]')
    .forEach(renderDotPaginationExamples)
