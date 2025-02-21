function toggleBurger14() {
    document.querySelector(".burger-14").classList.toggle("burger-14--active");
    document
        .querySelector(".burger-14__center-line")
        .classList.toggle("burger-14__center-line--active");
}

const copyBurger14 = document.querySelector(".copy-burger-14");

copyBurger14.addEventListener("click", () => {
    copyBurger14.textContent = "Copied";
    setTimeout(() => {
        copyBurger14.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-14").outerHTML}
    <script>
    ${toggleBurger14}
    </script>
    <style>
.burger-14 {
    position: relative;
    width: 50px;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.burger-14::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #000;
    transform: translateY(-15px);
    transition: all 0.6s;
}

.burger-14__center-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: #000;
    transition: all 0.6s;
}

.burger-14::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #000;
    transform: translateY(15px);
    transition: all 0.6s;
}

.burger-14--active::before {
    transform: translateY(0);
    rotate: 135deg;
}

.burger-14__center-line--active {
    rotate: 225deg;
    width: 2px;
}

.burger-14--active::after {
    transform: translateY(0);
    rotate: 225deg;
}
    </style>
    `);
});
