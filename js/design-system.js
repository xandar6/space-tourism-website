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
