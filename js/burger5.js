function toggleBurger5() {
    document.querySelector(".burger-5").classList.toggle("burger-5--active");
    document
        .querySelector(".burger-5__center-line")
        .classList.toggle("burger-5__center-line--active");
}

const copyBurger5 = document.querySelector(".copy-burger-5");

copyBurger5.addEventListener("click", () => {
    copyBurger5.textContent = "Copied";
    setTimeout(() => {
        copyBurger5.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-5").outerHTML}
    <script>
    ${toggleBurger5}
    </script>
    <style>
.burger-5 {
    position: relative;
    width: 50px;
    height: 0;
    padding: 25px 0;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.burger-5::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    translate: 0 -15px;
    transition: all 0.3s;
}

.burger-5::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    translate: 0 15px;
    transition: all 0.3s;
}

.burger-5__center-line {
    position: absolute;
    width: 50%;
    height: 2px;
    background-color: #000;
    transition: all 0.3s 0.3s;
}

.burger-5--active::before {
    rotate: -45deg;
    translate: 0 0;
    transition: all 0.3s 0.3s;
}

.burger-5--active::after {
    rotate: 45deg;
    translate: 0 0;
    transition: all 0.3s 0.3s;
}

.burger-5__center-line--active {
    width: 0;
    transition: all 0.3s;
}

    </style>
    `);
});
