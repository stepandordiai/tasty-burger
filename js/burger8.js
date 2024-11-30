function toggleBurgerEight() {
    document
        .querySelector(".burger-eight")
        .classList.toggle("burger-eight--active");
    document
        .querySelector(".burger-eight__center-line")
        .classList.toggle("burger-eight__center-line--active");
}

const copyBurgerEight = document.querySelector(".copy-burger-eight");

copyBurgerEight.addEventListener("click", () => {
    copyBurgerEight.textContent = "Copied";
    setTimeout(() => {
        copyBurgerEight.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-eight").outerHTML}
    <script>
    ${toggleBurgerEight}
    </script>
    <style>
.burger-eight {
    position: relative;
    width: 50px;
    height: 0px;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.burger-eight::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(-15px);
    transition: transform 0.3s 0.3s, rotate 0.3s;
}

.burger-eight::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(15px);
    transition: transform 0.3s 0.3s, rotate 0.3s;
}

.burger-eight__center-line {
    width: 50px;
    height: 2px;
    background-color: #000;
    opacity: 1;
    transition: all 0s 0.3s;
}

.burger-eight__center-line--active {
    opacity: 0;
}

.burger-eight--active::before {
    transform: translateY(0);
    rotate: 45deg;
    transition: transform 0.3s, rotate 0.3s 0.3s;
}

.burger-eight--active::after {
    transform: translateY(0);
    rotate: -45deg;
    transition: transform 0.3s, rotate 0.3s 0.3s;
}
    </style>
    `);
});
