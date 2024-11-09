function toggleBurgerFour() {
    document
        .querySelector(".burger-four")
        .classList.toggle("burger-four--active");
    document
        .querySelector(".burger-four__center-line")
        .classList.toggle("burger-four__center-line--active");
}

const copyBurgerFour = document.querySelector(".copy-burger-four");

copyBurgerFour.addEventListener("click", () => {
    copyBurgerFour.textContent = "Copied";
    setTimeout(() => {
        copyBurgerFour.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
    ${document.querySelector(".burger-four").outerHTML}
    <script>
    ${toggleBurgerFour}
    </script>
    <style>
    .burger-four {
        position: relative;
        width: 50px;
        height: 0;
        padding: 25px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .burger-four::before {
        position: absolute;
        content: "";
        width: 0px;
        height: 2px;
        background-color: #000;
        transform: rotate(45deg);

        transition: width 0.5s;
    }

    .burger-four::after {
        position: absolute;
        content: "";
        width: 0px;
        height: 2px;
        background-color: #000;
        transform: rotate(-45deg);
        transition: width 0.5s;
    }

    .burger-four__center-line {
        position: absolute;
        width: 50px;
        height: 2px;
        background-color: #000;
        transition: width 0.5s 0.5s;
    }

    .burger-four--active::before {
        width: 50px;
        transition: width 0.5s 0.5s;
    }

    .burger-four--active::after {
        width: 50px;
        transition: width 0.5s 0.5s;
    }

    .burger-four__center-line--active {
        position: absolute;
        width: 0px;
        height: 2px;
        background-color: #000;
        transition: width 0.5s;
    }
    </style>
    `);
});
