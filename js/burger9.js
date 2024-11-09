function toggleBurger9() {
    document.querySelector(".burger-9").classList.toggle("burger-9--active");
    document
        .querySelector(".burger-9__center-line")
        .classList.toggle("burger-9__center-line--active");
}

const copyBurger9 = document.querySelector(".copy-burger-9");

copyBurger9.addEventListener("click", () => {
    copyBurger9.textContent = "Copied";
    setTimeout(() => {
        copyBurger9.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-9").outerHTML}
    <script>
    ${toggleBurger9}
    </script>
    <style>
  .burger-9 {
    position: relative;
    width: 50px;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.burger-9::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(-15px);
    transition: all 0.3s;
}

.burger-9__center-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: all 0.3s;
}

.burger-9::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(15px);
    transition: all 0.3s;
}

.burger-9--active::before {
    transform: translateY(0);
    rotate: 45deg;
}

.burger-9__center-line--active {
    rotate: -45deg;
}

.burger-9--active::after {
    transform: translateY(0);
    rotate: 45deg;
}
    </style>
    `);
});
