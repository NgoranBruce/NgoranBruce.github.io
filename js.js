const switchPage = (newPage) => {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
        page.style.display = "none"
    });
    const  currentPage = document.querySelector(`.${newPage}`);
    currentPage.className !== "home" && (document.querySelector("nav").style.background = "#555");
    currentPage.style.display = "flex";


};

document.addEventListener("DOMContentLoaded", () => {
    switchPage("home")
    document.querySelectorAll("nav li").forEach((li) => {
        li.onclick = (e) => {
            const page = e.target.dataset.page;
            switchPage(page)
        };
    });
});


const cursortext = document.querySelector('.cursor');
cursortext.innerHTML = cursortext.textContent.replace(/\S/g, "<span>$&</span>")

const element = document.querySelectorAll('.cursor span')
for(let i = 0; i<element.length; i++){
    element[i].style.transform = "rotate("+i*12.2+"deg)"
}