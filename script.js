document.addEventListener("DOMContentLoaded", function () {

  /* =========================================================
     THE HISTORICAL RECORD
     Global Theme + Navigation
     ========================================================= */

  const themeStyle = document.createElement("style");

  themeStyle.id = "historical-record-theme";

  themeStyle.textContent = `

    :root {
      --blue: #0b1f4d;
      --blue-light: #163b78;
      --red: #b22234;
      --red-dark: #8f1b2b;
      --white: #ffffff;
      --off-white: #f8f8f8;
      --light-blue: #d5dbea;
      --text: #18284a;
      --muted: #5e6675;
    }

    /* =====================================================
       BASIC PAGE COLORS
       ===================================================== */

    html,
    body {
      background: #f8f8f8 !important;
      color: #18284a !important;
    }

    body {
      margin: 0;
    }

    /* =====================================================
       HEADER
       ===================================================== */

    .site-header {
      background: #0b1f4d !important;
      color: #ffffff !important;
      border-bottom: 5px solid #b22234 !important;
    }

    .brand,
    .site-header a {
      color: #ffffff !important;
    }

    /* =====================================================
       HERO
       ===================================================== */

    .hero {
      background:
        linear-gradient(
          135deg,
          #0b1f4d 0%,
          #163b78 55%,
          #b22234 100%
        ) !important;

      color: #ffffff !important;
    }

    .hero .eyebrow,
    .hero h1,
    .hero h2,
    .hero h3,
    .hero p,
    .hero-text {
      color: #ffffff !important;
    }

    /* =====================================================
       MAIN CONTENT
       ===================================================== */

    .records-section,
    .archive-section,
    .content-section,
    .about-section {
      background: #ffffff !important;
      color: #18284a !important;
    }

    h1,
    h2,
    h3,
    h4 {
      color: #0b1f4d !important;
    }

    p {
      color: #18284a;
    }

    .eyebrow,
    .record-label {
      color: #b22234 !important;
    }

    /* =====================================================
       RECORD CARDS
       ===================================================== */

    .record-card {
      background: #ffffff !important;
      color: #18284a !important;
      border: 1px solid #d5dbea !important;
      border-top: 5px solid #b22234 !important;
      box-shadow:
        0 8px 24px rgba(11, 31, 77, 0.12) !important;
    }

    .record-card h3 {
      color: #0b1f4d !important;
    }

    .record-card p {
      color: #18284a !important;
    }

    .record-card a {
      color: #b22234 !important;
    }

    .record-card a:hover {
      color: #8f1b2b !important;
    }

    /* =====================================================
       LINKS
       ===================================================== */

    a {
      color: #b22234;
    }

    a:hover {
      color: #8f1b2b;
    }

    /* =====================================================
       HAMBURGER BUTTON
       ===================================================== */

    .menu-button {
      background: #b22234 !important;
      color: #ffffff !important;
      border: none !important;
    }

    .menu-button:hover {
      background: #8f1b2b !important;
    }

    /* =====================================================
       SIDE MENU
       ===================================================== */

    .side-menu {
      background: #ffffff !important;
      color: #0b1f4d !important;
      border-right: 5px solid #b22234 !important;

      /* IMPORTANT:
         Allow the entire menu to scroll */
      overflow-y: auto !important;
      overflow-x: hidden !important;

      /* Modern iPhone scrolling */
      -webkit-overflow-scrolling: touch !important;

      /* Never let the menu become taller
         than the visible screen */
      max-height: 100vh !important;
      max-height: 100dvh !important;

      /* Make sure the bottom item has room */
      padding-bottom: 30px !important;

      box-sizing: border-box !important;
    }

    /* =====================================================
       MENU HEADER
       ===================================================== */

    .menu-header {
      background: #0b1f4d !important;
      color: #ffffff !important;
    }

    .menu-header h2,
    .menu-header p {
      color: #ffffff !important;
    }

    /* =====================================================
       MENU LINKS
       ===================================================== */

    .side-menu nav {
      padding-bottom: 30px !important;
    }

    .side-menu nav a {
      background: #ffffff !important;
      color: #0b1f4d !important;
      border-bottom: 1px solid #d5dbea !important;
    }

    .side-menu nav a:hover {
      background: #b22234 !important;
      color: #ffffff !important;
    }

    /* =====================================================
       POLITICS DROPDOWN
       ===================================================== */

    .menu-dropdown {
      background: #ffffff !important;
    }

    .menu-dropdown-toggle {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      background: #ffffff !important;
      color: #0b1f4d !important;

      border: none;
      border-bottom: 1px solid #d5dbea;

      padding: 15px 20px;

      font: inherit;
      font-weight: 600;

      text-align: left;
      cursor: pointer;

      box-sizing: border-box;
    }

    .menu-dropdown-toggle:hover {
      background: #b22234 !important;
      color: #ffffff !important;
    }

    .menu-dropdown-arrow {
      color: inherit !important;
      transition: transform 0.2s ease;
    }

    .menu-dropdown.open .menu-dropdown-arrow {
      transform: rotate(180deg);
    }

    .menu-submenu {
      display: none;
      background: #f8f8f8 !important;
    }

    .menu-dropdown.open .menu-submenu {
      display: block;
    }

    .menu-submenu a {
      display: block;
      padding-left: 35px !important;
      background: #f8f8f8 !important;
      color: #0b1f4d !important;
      border-bottom: 1px solid #d5dbea !important;
    }

    .menu-submenu a:hover {
      background: #b22234 !important;
      color: #ffffff !important;
    }

    /* =====================================================
       MENU OVERLAY
       ===================================================== */

    .menu-overlay {
      background: rgba(11, 31, 77, 0.65) !important;
    }

    /* =====================================================
       FOOTER
       ===================================================== */

    .site-footer {
      background: #0b1f4d !important;
      color: #ffffff !important;
      border-top: 5px solid #b22234 !important;
    }

    .site-footer h2,
    .site-footer h3,
    .site-footer p,
    .site-footer a {
      color: #ffffff !important;
    }

    /* =====================================================
       SEARCH
       ===================================================== */

    input,
    select,
    textarea {
      background: #ffffff !important;
      color: #18284a !important;
      border: 1px solid #b7c0d4 !important;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: 2px solid #b22234 !important;
      border-color: #b22234 !important;
    }

    /* =====================================================
       IPHONE / MOBILE MENU FIX
       ===================================================== */

    @media (max-width: 700px) {

      .side-menu {
        height: 100vh !important;
        height: 100dvh !important;

        max-height: 100vh !important;
        max-height: 100dvh !important;

        overflow-y: scroll !important;
        overflow-x: hidden !important;

        -webkit-overflow-scrolling: touch !important;

        overscroll-behavior-y: contain !important;

        padding-bottom: 50px !important;
      }

      .side-menu nav {
        padding-bottom: 50px !important;
      }

    }

    /* =====================================================
       SHORT SCREEN / LANDSCAPE FIX
       ===================================================== */

    @media (max-height: 700px) {

      .side-menu {
        height: 100vh !important;
        height: 100dvh !important;

        max-height: 100vh !important;
        max-height: 100dvh !important;

        overflow-y: scroll !important;
        padding-bottom: 60px !important;
      }

    }

  `;

  document.head.appendChild(themeStyle);


  /* =========================================================
     HAMBURGER MENU
     ========================================================= */

  const menuButton =
    document.querySelector(".menu-button");

  const sideMenu =
    document.querySelector(".side-menu");

  const menuOverlay =
    document.querySelector(".menu-overlay");


  function setMenu(open) {

    if (!menuButton || !sideMenu || !menuOverlay) {
      return;
    }

    sideMenu.classList.toggle("open", open);

    menuOverlay.classList.toggle(
      "show",
      open
    );

    document.body.classList.toggle(
      "menu-open",
      open
    );

    menuButton.setAttribute(
      "aria-expanded",
      String(open)
    );

    menuButton.setAttribute(
      "aria-label",
      open
        ? "Close menu"
        : "Open menu"
    );
  }


  if (
    menuButton &&
    sideMenu &&
    menuOverlay
  ) {

    menuButton.addEventListener(
      "click",
      function () {

        const isOpen =
          sideMenu.classList.contains("open");

        setMenu(!isOpen);

      }
    );


    menuOverlay.addEventListener(
      "click",
      function () {

        setMenu(false);

      }
    );


    sideMenu
      .querySelectorAll("a")
      .forEach(function (link) {

        link.addEventListener(
          "click",
          function () {

            setMenu(false);

          }
        );

      });
  }


  /* =========================================================
     POLITICS DROPDOWN
     ========================================================= */

  const dropdowns =
    document.querySelectorAll(
      ".menu-dropdown"
    );


  dropdowns.forEach(
    function (dropdown) {

      const toggle =
        dropdown.querySelector(
          ".menu-dropdown-toggle"
        );

      if (!toggle) {
        return;
      }


      toggle.addEventListener(
        "click",
        function () {

          const isOpen =
            dropdown.classList.contains(
              "open"
            );

          dropdown.classList.toggle(
            "open",
            !isOpen
          );

          toggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
          );

        }
      );

    }
  );


  /* =========================================================
     ESCAPE KEY
     ========================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key !== "Escape") {
        return;
      }


      dropdowns.forEach(
        function (dropdown) {

          dropdown.classList.remove(
            "open"
          );

          const toggle =
            dropdown.querySelector(
              ".menu-dropdown-toggle"
            );

          if (toggle) {

            toggle.setAttribute(
              "aria-expanded",
              "false"
            );

          }

        }
      );


      setMenu(false);

    }
  );

});
