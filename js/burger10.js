function toggleBurger10() {
    document.querySelector(".burger-10").classList.toggle("burger-10--active");
    document
        .querySelector(".burger-10__center-line")
        .classList.toggle("burger-10__center-line--active");
}

const copyBurger10 = document.querySelector(".copy-burger-10");

copyBurger10.addEventListener("click", () => {
    copyBurger10.textContent = "Copied";
    setTimeout(() => {
        copyBurger10.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-10").outerHTML}
    <script>
    ${toggleBurger10}
    </script>
    <style>
.burger-10 {
    position: relative;
    width: 50px;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.burger-10::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(-15px);
    transition: all 0.3s;
}

.burger-10__center-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: all 0.3s;
}

.burger-10::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(15px);
    transition: all 0.3s;
}

.burger-10--active::before {
    transform: translateY(0);
    rotate: -135deg;
}

.burger-10__center-line--active {
    rotate: -180deg;
    opacity: 0;
}

.burger-10--active::after {
    transform: translateY(0);
    rotate: -225deg;
}
    </style>
    `);
});
