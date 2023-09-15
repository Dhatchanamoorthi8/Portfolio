
const themeToggleBtn = document.getElementById("theme-click");
const body = document.body;
let isDarkTheme = true;

// Function to set the theme based on the user's preference
function setTheme(theme) {
    if (theme === "dark") {
        body.classList.remove("light");
        body.classList.add("dark");
        isDarkTheme = true;
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        isDarkTheme = false;
    }
}

// Check if the user's preference is stored in localStorage
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
    setTheme(storedTheme);
}

themeToggleBtn.addEventListener("click", () => {
    if (isDarkTheme) {
        setTheme("light");
        // Store the user's preference in localStorage
        localStorage.setItem("theme", "light");
    } else {
        setTheme("dark");
        // Store the user's preference in localStorage
        localStorage.setItem("theme", "dark");
    }
});



