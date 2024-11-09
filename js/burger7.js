function toggleBurgerSeven() {
    document
        .querySelector(".burger-seven")
        .classList.toggle("burger-seven--active");
    document
        .querySelector(".burger-seven__center-line1")
        .classList.toggle("burger-seven__center-line1--active");
    document
        .querySelector(".burger-seven__center-line2")
        .classList.toggle("burger-seven__center-line2--active");
}

const copyBurgerSeven = document.querySelector(".copy-burger-seven");

copyBurgerSeven.addEventListener("click", () => {
    copyBurgerSeven.textContent = "Copied";
    setTimeout(() => {
        copyBurgerSeven.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-seven").outerHTML}
    <script>
    ${toggleBurgerSeven}
    </script>
    <style>
    .burger-seven {
    position: relative;
    width: 50px;
    height: 0;
    cursor: pointer;
    padding: 25px 0;
}

.burger-seven::before {
    position: absolute;
    right: 0;
    content: "";
    width: 50%;
    height: 2px;
    background-color: #000;
    opacity: 1;
    translate: 0 -7.5px;
    transition: all 0.3s 0.3s;
}

.burger-seven::after {
    position: absolute;
    left: 0;
    content: "";
    width: 50%;
    height: 2px;
    background-color: #000;
    opacity: 1;
    translate: 0 7.5px;
    transition: all 0.3s 0.3s;
}

.burger-seven__center-line1 {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: #000;
    rotate: 45deg;
    translate: -25px -25px;
    opacity: 0;
    transition: all 0.3s;
}

.burger-seven__center-line2 {
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: #000;
    rotate: -45deg;
    translate: 25px -25px;
    opacity: 0;
    transition: all 0.3s;
}

.burger-seven--active::before {
    right: 25px;
    opacity: 0;
    transition: all 0.3s;
}
.burger-seven--active::after {
    left: 25px;
    opacity: 0;
    transition: all 0.3s;
}

.burger-seven__center-line1--active {
    translate: 0 0;
    opacity: 1;
    transition: all 0.3s 0.3s;
}

.burger-seven__center-line2--active {
    translate: 0 0;
    opacity: 1;
    transition: all 0.3s 0.3s;
}
    </style>
    `);
});
