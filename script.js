//javascript for dropdowns

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent event bubbling
        this.classList.toggle('open');

        // Close other dropdowns
        document.querySelectorAll('.dropdown').forEach(other => {
            if (other !== this) other.classList.remove('open');
        });
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
    });
});







//javascript for light and dark mode
$(document).ready(function () {
    // Initially in dark mode
    let isDarkMode = true;

    $(".toggle-mode").on("click", function () {
        if (isDarkMode) {
            // Switch to light mode
            $("body").removeClass("dark-mode-body").addClass("light-mode-body");
            $(".heading").removeClass("dark-mode-heading").addClass("light-mode-heading");
            $("input").removeClass("dark-mode-input").addClass("light-mode-input");
            $(".submenu").removeClass("dark-mode-submenu").addClass("light-mode-submenu");
            $(".sidebar, .sidebar-menu").removeClass("dark-mode-sidebar dark-mode-sidebar-menu").addClass("light-mode-sidebar light-mode-sidebar-menu");
            $(".card").removeClass("dark-mode-card").addClass("light-mode-card");
            $(".header-buttons .dark-mode-button").removeClass("dark-mode-button").addClass("light-mode-button");

            // Change the icon to sun (optional)
            $(".toggle-mode i").removeClass("bi-moon-fill").addClass("bi-sun-fill");

            isDarkMode = false; // Update the mode
        } else {
            // Switch to dark mode
            $("body").removeClass("light-mode-body").addClass("dark-mode-body");
            $(".heading").removeClass("light-mode-heading").addClass("dark-mode-heading");
            $("input").removeClass("light-mode-input").addClass("dark-mode-input");
            $(".submenu").removeClass("light-mode-submenu").addClass("dark-mode-submenu");
            $(".sidebar, .sidebar-menu").removeClass("light-mode-sidebar light-mode-sidebar-menu").addClass("dark-mode-sidebar dark-mode-sidebar-menu");
            $(".card").removeClass("light-mode-card").addClass("dark-mode-card");
            $(".header-buttons .light-mode-button").removeClass("light-mode-button").addClass("dark-mode-button");

            // Change the icon to moon (optional)
            $(".toggle-mode i").removeClass("bi-sun-fill").addClass("bi-moon-fill");

            isDarkMode = true; // Update the mode
        }
    });
});


