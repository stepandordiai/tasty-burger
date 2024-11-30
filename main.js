function getAccess() {
    document
        .querySelector(".info-container")
        .classList.remove("info-container--attention");
}

document.querySelector(".js-access-btn").addEventListener("click", () => {
    getAccess();
});

// function getReject() {
//     // You can also window.history.go(-1)
//     window.history.back() || window.close();
// }

setTimeout(() => {
    document
        .querySelector(".info-container")
        .classList.add("info-container--attention");
}, 3000);

setInterval(() => {
    document
        .querySelector(".logo-burger")
        .classList.toggle("logo-burger--active");
    document
        .querySelector(".logo-burger__center-line")
        .classList.toggle("logo-burger__center-line--active");
    document
        .querySelector(".logo-burger__center-line2")
        .classList.toggle("logo-burger__center-line2--active");
    document
        .querySelector(".logo-burger__center-line3")
        .classList.toggle("logo-burger__center-line3--active");
}, 3000);

document.querySelector(".js-coffee").addEventListener("click", () => {
    document.querySelector(".coffee").classList.toggle("coffee--expand");
    document.querySelector(".coffee span").classList.toggle("coffee-icon");
    document.querySelector(".dark").classList.toggle("dark--active");
    document
        .querySelector(".credit-card")
        .classList.toggle("credit-card--show");
});
