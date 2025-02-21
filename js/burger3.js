function toggleBurger3() {
    document.querySelector(".burger-3").classList.toggle("burger-3--active");
    document
        .querySelector(".burger-3__center-line")
        .classList.toggle("burger-3__center-line--active");
}

const copyBurger3 = document.querySelector(".copy-burger-3");

copyBurger3.addEventListener("click", () => {
    copyBurger3.textContent = "Copied";
    setTimeout(() => {
        copyBurger3.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
        ${document.querySelector(".burger-3").outerHTML}
    <script>
    ${toggleBurger3}
    </script>
        <style>
.burger-3 {
    position: relative;
    width: 50px;
    height: 0px;
    padding: 25px 0;
    cursor: pointer;
}

.burger-3::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #000;
    translate: 0 -15px;
    transition: translate 0.5s, rotate 0.5s;
}

.burger-3::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #000;
    translate: 0 15px;
    transition: translate 0.5s, rotate 0.5s;
}

.burger-3__center-line {
    width: 50px;
    height: 2px;
    position: absolute;
    background: #000;
    opacity: 1;
    transition: all 0.5s;
}

.burger-3--active::before {
    content: "";
    translate: 0px;
    rotate: 45deg;
    transition: all 0.5s;
}

.burger-3--active::after {
    translate: 0px;
    rotate: -45deg;
    transition: all 0.5s;
}

.burger-3__center-line--active {
    translate: -50px 0;
    opacity: 0;
    transition: all 0.5s;
}
        </style>
    `);
});
