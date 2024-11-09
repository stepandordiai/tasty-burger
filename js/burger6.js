function toggleBurgerSix() {
    document
        .querySelector(".burger-six")
        .classList.toggle("burger-six--active");
    document
        .querySelector(".burger-six__center-line")
        .classList.toggle("burger-six__center-line--active");
    document
        .querySelector(".burger-six__center-line2")
        .classList.toggle("burger-six__center-line2--active");
    document
        .querySelector(".burger-six__center-line3")
        .classList.toggle("burger-six__center-line3--active");
}

const copyBurgerSix = document.querySelector(".copy-burger-six");

copyBurgerSix.addEventListener("click", () => {
    copyBurgerSix.textContent = "Copied";
    setTimeout(() => {
        copyBurgerSix.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-six").outerHTML}
    <script>
    ${toggleBurgerSix}
    </script>
    <style>
        .burger-six {
    position: relative;
    width: 50px;
    height: 0;
    padding: 25px 0;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.burger-six::before {
    position: absolute;
    content: "";
    width: 25%;
    height: 2px;
    background-color: #000;
    translate: 0 -15px;
    transition: all 0.3s 0.8s;
}

.burger-six__center-line {
    position: absolute;
    width: 50%;
    height: 2px;
    background-color: #000;
    transition: all 0.3s 0.7s;
}

.burger-six::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    translate: 0 15px;
    transition: all 0.3s 0.6s;
}

.burger-six__center-line2 {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    opacity: 0;
    rotate: 45deg;
    translate: -50px -50px;
    transition: all 0.3s 0.3s;
}

.burger-six__center-line3 {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    opacity: 0;
    rotate: -45deg;
    translate: 50px -50px;
    transition: all 0.3s;
}

.burger-six--active::before {
    width: 0;
    transition: all 0.3s;
}

.burger-six__center-line--active {
    width: 0;
    transition: all 0.3s 0.1s;
}

.burger-six--active::after {
    width: 0;
    transition: all 0.3s 0.2s;
}

.burger-six__center-line2--active {
    opacity: 1;
    translate: 0 0;
    transition: all 0.3s 0.5s;
}

.burger-six__center-line3--active {
    opacity: 1;
    translate: 0 0;
    transition: all 0.3s 0.8s;
}
    </style>
    `);
});
