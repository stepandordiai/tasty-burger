function toggleBurger15() {
    document.querySelector(".burger-15").classList.toggle("burger-15--active");
    document
        .querySelector(".burger-15__center-line")
        .classList.toggle("burger-15__center-line--active");
}

const copyBurger15 = document.querySelector(".copy-burger-15");

copyBurger15.addEventListener("click", () => {
    copyBurger15.textContent = "Copied";
    setTimeout(() => {
        copyBurger15.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-15").outerHTML}
    <script>
    ${toggleBurger15}
    </script>
    <style>
.burger-15 {
    position: relative;
    width: 50px;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.burger-15::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent 50%, #000 50%);
    transform: translate(-25px, -10px);
    transition: transform 0.3s;
}

.burger-15__center-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: #000;
    transition: transform 0.3s;
}

.burger-15::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #000 50%, transparent 50%);
    transform: translate(25px, 10px);
    transition: transform 0.3s;
}

.burger-15--active::before {
    transform: translate(0px, 0px) rotate(-135deg);
}

.burger-15__center-line--active {
    transform: rotate(-45deg);
}

.burger-15--active::after {
    transform: translate(0px, 0px) rotate(-135deg);
}
    </style>
    `);
});
