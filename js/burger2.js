function toggleBurger2() {
    document.querySelector(".burger-2").classList.toggle("burger-2--active");
}

const copyBurger2 = document.querySelector(".copy-burger-2");

copyBurger2.addEventListener("click", () => {
    copyBurger2.textContent = "Copied";
    setTimeout(() => {
        copyBurger2.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
    ${document.querySelector(".burger-2").outerHTML}
    <script>
    ${toggleBurger2}
    </script>
  <style>
.burger-2 {
    position: relative;
    width: 50px;
    height: 0px;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.burger-2::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #000;
    translate: 0 -7.5px;
    transition: translate 0.5s 0.5s, rotate 0.5s;
}

.burger-2::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #000;
    translate: 0 7.5px;
    transition: translate 0.5s 0.5s, rotate 0.5s;
}

.burger-2--active::before {
    translate: 0px;
    rotate: 45deg;
    transition: translate 0.5s, rotate 0.5s 0.5s;
}

.burger-2--active::after {
    translate: 0px;
    rotate: -45deg;
    transition: translate 0.5s, rotate 0.5s 0.5s;
}

  </style>
    `);
});
