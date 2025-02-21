setTimeout(() => {
    document
        .querySelector(".info-container")
        .classList.add("info-container--attention");
}, 3000);

function getAccess() {
    document
        .querySelector(".info-container")
        .classList.remove("info-container--attention");
}

document.querySelector(".js-access-btn").addEventListener("click", () => {
    getAccess();
});

document.querySelector(".current-year").innerHTML = new Date().getFullYear();
