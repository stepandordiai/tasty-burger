function toggleBurgerThree() {
    document
        .querySelector(".burger-three")
        .classList.toggle("burger-three--active");
    document
        .querySelector(".burger-three__center-line")
        .classList.toggle("burger-three__center-line--active");
}

const copyBurgerThree = document.querySelector(".copy-burger-three");

copyBurgerThree.addEventListener("click", () => {
    copyBurgerThree.textContent = "Copied";
    setTimeout(() => {
        copyBurgerThree.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
        ${document.querySelector(".burger-three").outerHTML}
    <script>
    ${toggleBurgerThree}
    </script>
        <style>
        .burger-three {
            width: 50px;
            height: 0px;
            padding: 25px 0;
            position: relative;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .burger-three::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #000;
            translate: 0 -15px;
            transition: translate 0.5s, rotate 0.5s;
        }

        .burger-three::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #000;
            translate: 0 15px;
            transition: translate 0.5s, rotate 0.5s;
        }

        .burger-three__center-line {
            width: 50px;
            height: 2px;
            position: absolute;
            background-color: #000;
            opacity: 1;
            transition: all 0.5s;
        }

        .burger-three--active::before {
            content: "";
            translate: 0px;
            rotate: 45deg;
            transition: translate 0.5s, rotate 0.5s;
        }

        .burger-three--active::after {
            content: "";
            translate: 0px;
            rotate: -45deg;
            transition: translate 0.5s, rotate 0.5s;
        }

        .burger-three__center-line--active {
            translate: -50px 0;
            opacity: 0;
            transition: all 0.5s;
        }
        </style>
    `);
});
