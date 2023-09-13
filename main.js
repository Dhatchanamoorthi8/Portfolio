// scrool Spy


// const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: '#myscroll'
//   })

// DarkTheme
const themeToggleBtn = document.getElementById("theme-click");
const body = document.body;
let isDarkTheme = true;

themeToggleBtn.addEventListener("click", () => {

    if (isDarkTheme) {
        body.classList.remove("light");
        body.classList.add("dark");
        isDarkTheme = false;
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        isDarkTheme = true;
    }
});

const observer = new IntersectionObserver((entire)=>{
    entire.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }

    })
})

const hiddenElemnt = document.querySelector('.hidden');
hiddenElemnt.forEach((el) => observer.observe(el));
