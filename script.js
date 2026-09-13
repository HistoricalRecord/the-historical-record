document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const sideMenu = document.querySelector(".side-menu");
  const menuOverlay = document.querySelector(".menu-overlay");

  const dropdown = document.querySelector(".menu-dropdown");
  const dropdownToggle = document.querySelector(".menu-dropdown-toggle");

  function setMenu(open) {
    if (!menuButton || !sideMenu || !menuOverlay) return;

    sideMenu.classList.toggle("open", open);
    menuOverlay.classList.toggle("show", open);
    document.body.classList.toggle("menu-open", open);

    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu"
    );
  }

  /* Main hamburger menu */
  if (menuButton && sideMenu && menuOverlay) {
    menuButton.addEventListener("click", function () {
      const isOpen = sideMenu.classList.contains("open");
      setMenu(!isOpen);
    });

    menuOverlay.addEventListener("click", function () {
      setMenu(false);
    });

    sideMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
  }

  /* Politics dropdown */
  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener("click", function () {
      const isOpen = dropdown.classList.contains("open");

      dropdown.classList.toggle("open", !isOpen);
      dropdownToggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  /* Close dropdown with Escape */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && dropdown && dropdownToggle) {
      dropdown.classList.remove("open");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });
});
