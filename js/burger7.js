function toggleBurger7() {
    document.querySelector(".burger-7").classList.toggle("burger-7--active");
    document
        .querySelector(".burger-7__center-line1")
        .classList.toggle("burger-7__center-line1--active");
    document
        .querySelector(".burger-7__center-line2")
        .classList.toggle("burger-7__center-line2--active");
}

const copyBurger7 = document.querySelector(".copy-burger-7");

copyBurger7.addEventListener("click", () => {
    copyBurger7.textContent = "Copied";
    setTimeout(() => {
        copyBurger7.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-7").outerHTML}
    <script>
    ${toggleBurger7}
    </script>
    <style>
.burger-7 {
    position: relative;
    width: 50px;
    height: 0;
    padding: 25px 0;
    cursor: pointer;
}

.burger-7::before {
    content: "";
    position: absolute;
    right: 0;
    width: 50%;
    height: 2px;
    background: #000;
    opacity: 1;
    translate: 0 -7.5px;
    transition: all 0.3s 0.3s;
}

.burger-7::after {
    content: "";
    position: absolute;
    left: 0;
    width: 50%;
    height: 2px;
    background: #000;
    opacity: 1;
    translate: 0 7.5px;
    transition: all 0.3s 0.3s;
}

.burger-7__center-line1 {
    position: absolute;
    height: 2px;
    width: 100%;
    background: #000;
    rotate: 45deg;
    translate: -25px -25px;
    opacity: 0;
    transition: all 0.3s;
}

.burger-7__center-line2 {
    position: absolute;
    height: 2px;
    width: 100%;
    background: #000;
    rotate: -45deg;
    translate: 25px -25px;
    opacity: 0;
    transition: all 0.3s;
}

.burger-7--active::before {
    right: 25px;
    opacity: 0;
    transition: all 0.3s;
}
.burger-7--active::after {
    left: 25px;
    opacity: 0;
    transition: all 0.3s;
}

.burger-7__center-line1--active {
    translate: 0 0;
    opacity: 1;
    transition: all 0.3s 0.3s;
}

.burger-7__center-line2--active {
    translate: 0 0;
    opacity: 1;
    transition: all 0.3s 0.3s;
}
    </style>
    `);
});
