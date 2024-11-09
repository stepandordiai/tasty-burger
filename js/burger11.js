function toggleBurger11() {
    document.querySelector(".burger-11").classList.toggle("burger-11--active");
    document
        .querySelector(".burger-11__center-line")
        .classList.toggle("burger-11__center-line--active");
}

const copyBurger11 = document.querySelector(".copy-burger-11");

copyBurger11.addEventListener("click", () => {
    copyBurger11.textContent = "Copied";
    setTimeout(() => {
        copyBurger11.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-11").outerHTML}
    <script>
    ${toggleBurger11}
    </script>
    <style>
.burger-11 {
    position: relative;
    width: 50px;
    height: 0px;
    padding: 15px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
}

.burger-11::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(-15px);
    transition: transform 0.3s 0.3s, rotate 0.3s;
}

.burger-11__center-line {
    width: 50px;
    height: 2px;
    background-color: #000;
    opacity: 1;
    transition: all 0s 0.3s;
}

.burger-11::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(15px);
    transition: transform 0.3s 0.3s, rotate 0.3s;
}

.burger-11--active::before {
    transform: translateY(0);
    rotate: 45deg;
    transition: transform 0.3s, rotate 0.3s 0.3s;
}

.burger-11__center-line--active {
    opacity: 0;
}

.burger-11--active::after {
    transform: translateY(0);
    rotate: 135deg;
    transition: transform 0.3s, rotate 0.3s 0.3s;
}
    </style>
    `);
});
