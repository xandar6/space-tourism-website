export function initPrimaryHeaders() {
  const headers = document.querySelectorAll(".primary-header");

  headers.forEach(setupHeader);
}

function setupHeader(header) {
  const menuToggle = header.querySelector(".primary-header__menu-toggle");
  const navigation = header.querySelector(".primary-navigation");

  if (!menuToggle || !navigation) return;

  const usesMobileNavigation = () =>
    getComputedStyle(menuToggle).display !== "none";

  let wasMobileNavigation = usesMobileNavigation();

  function setMenuState(isOpen, returnFocus = false) {
    navigation.dataset.visible = String(isOpen);
    navigation.inert = usesMobileNavigation() && !isOpen;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("navigation-open", isOpen);

    if (returnFocus) menuToggle.focus();
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.dataset.visible === "true";
    setMenuState(!isOpen);
  });

  document.addEventListener("keydown", (event) => {
    const isOpen = navigation.dataset.visible === "true";

    if (event.key === "Escape" && isOpen) {
      setMenuState(false, true);
    }
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    const isMobileNavigation = usesMobileNavigation();

    if (isMobileNavigation !== wasMobileNavigation) {
      wasMobileNavigation = isMobileNavigation;
      setMenuState(false);
    }
  });

  setMenuState(false);
}
