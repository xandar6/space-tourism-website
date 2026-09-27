const exampleMatrices = {
  "destination-tabs": {
    groupClass: "tab-list",
    items: ["Moon", "Mars", "Europa", "Titan"],
    createItem(label, isSelected) {
      const button = createButton(label);
      button.className = "tab text-muted";

      if (isSelected) button.dataset.demoState = "selected";

      return button;
    },
  },
  "numbered-pagination": {
    groupClass: "numbered-pagination",
    items: ["1", "2", "3"],
    createItem(label, isSelected) {
      const button = createButton(label, `View technology ${label}`);

      if (isSelected) button.setAttribute("aria-current", "true");

      return button;
    },
  },
  "dot-pagination": {
    groupClass: "dot-pagination",
    items: ["1", "2", "3", "4"],
    createItem(label, isSelected) {
      const button = createButton("", `View crew member ${label}`);

      if (isSelected) button.setAttribute("aria-current", "true");

      return button;
    },
  },
};

function createButton(text, accessibleName) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;

  if (accessibleName) button.setAttribute("aria-label", accessibleName);

  return button;
}

function renderStateMatrix(surface, config) {
  const fragment = document.createDocumentFragment();

  config.items.forEach((_, selectedIndex) => {
    const group = document.createElement("div");
    group.className = config.groupClass;

    config.items.forEach((label, itemIndex) => {
      group.append(config.createItem(label, selectedIndex === itemIndex));
    });

    fragment.append(group);
  });

  surface.replaceChildren(fragment);
}

document.querySelectorAll("[data-example-matrix]").forEach((surface) => {
  const config = exampleMatrices[surface.dataset.exampleMatrix];

  if (config) renderStateMatrix(surface, config);
});
