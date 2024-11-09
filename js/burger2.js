function toggleBurgerTwo() {
    document
        .querySelector(".burger-two")
        .classList.toggle("burger-two--active");
}

const copyBurgerTwo = document.querySelector(".copy-burger-two");

copyBurgerTwo.addEventListener("click", () => {
    copyBurgerTwo.textContent = "Copied";
    setTimeout(() => {
        copyBurgerTwo.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
    ${document.querySelector(".burger-two").outerHTML}
    <script>
    ${toggleBurgerTwo}
    </script>
  <style>
  .burger-two {
    width: 50px;
    height: 0px;
    padding: 25px 0;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.burger-two::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    translate: 0 -7.5px;
    transition: translate 0.5s 0.5s, rotate 0.5s;
}

.burger-two::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    translate: 0 7.5px;
    transition: translate 0.5s 0.5s, rotate 0.5s;
}

.burger-two--active::before {
    content: "";
    translate: 0px;
    rotate: 45deg;
    transition: translate 0.5s, rotate 0.5s 0.5s;
}

.burger-two--active::after {
    content: "";
    translate: 0px;
    rotate: -45deg;
    transition: translate 0.5s, rotate 0.5s 0.5s;
}
  </style>
    `);
});
