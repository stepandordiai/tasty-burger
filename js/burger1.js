function toggleBurgerOne() {
    document
        .querySelector(".burger-one")
        .classList.toggle("burger-one--active");
}

const copyBurgerOne = document.querySelector(".copy-burger-one");

copyBurgerOne.addEventListener("click", () => {
    copyBurgerOne.textContent = "Copied";
    setTimeout(() => {
        copyBurgerOne.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
        ${document.querySelector(".burger-one").outerHTML}
        <script>
        ${toggleBurgerOne}
        </script>
        <style>
    .burger-one {
        width: 50px;
        height: 0px;
        padding: 25px 0;
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .burger-one::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #000;
        transform: translateY(-7.5px);
        transition: all 0.5s;
    }

    .burger-one::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #000;
        transform: translateY(7.5px);
        transition: all 0.5s;
    }

    .burger-one--active::before {
        content: "";
        transform: translateY(0) rotate(-45deg);
    }

    .burger-one--active::after {
        content: "";
        transform: translateY(0) rotate(45deg);
    }
        </style>
        `);
});
