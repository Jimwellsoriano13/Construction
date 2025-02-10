
const header = document.querySelector('.header');
  window.addEventListener('scroll', () =>{
    if(window.scrollY > 0){
      header.classList.add('scrolled');
    }
    else {
      header.classList.remove('scrolled')
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".left-side-menu .nav-link");

    function setActiveLink(link) {
        // Remove "active" class from all links
        navLinks.forEach(nav => nav.classList.remove("active"));

        // Add "active" class to the clicked link
        link.classList.add("active");

        // Store the active link in localStorage
        localStorage.setItem("activeNavLink", link.getAttribute("href"));
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation

            setActiveLink(this);

            // Add fade-out effect for smooth transition
            document.body.classList.add("fade-out");

            // Delay navigation for smooth transition
            setTimeout(() => {
                window.location.href = this.getAttribute("href");
            }, 100);
        });
    });

    // Restore active link after page reload
    const activeLink = localStorage.getItem("activeNavLink");

    if (activeLink) {
        const currentActive = document.querySelector(`.left-side-menu .nav-link[href='${activeLink}']`);
        if (currentActive) {
            setActiveLink(currentActive);
        }
    }

    // Ensure Home link is active when on the root or index.html
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    if (currentPage === "index.html" || window.location.pathname === "/") {
        localStorage.setItem("activeNavLink", "index.html");
        const homeLink = document.querySelector(`.left-side-menu .nav-link[href='index.html']`);
        if (homeLink) {
            setActiveLink(homeLink);
        }
    }
});





  

