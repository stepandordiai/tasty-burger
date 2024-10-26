document.querySelector(".warning").classList.add("warning--access");

setTimeout(() => {
    document.querySelector(".warning").classList.remove("warning--access");
}, 3000);

function access() {
    document.querySelector(".warning").classList.add("warning--access");
}

function deny() {
    window.history.back() || window.close();
}

setInterval(() => {
    document
        .querySelector(".logo-burger")
        .classList.toggle("logo-burger--active");
    document
        .querySelector(".logo-burger__center")
        .classList.toggle("logo-burger__center--active");
}, 3000);

document.querySelector(".coffee").addEventListener("click", () => {
    document
        .querySelector(".coffee-section")
        .classList.add("coffee-section--active");
    document.querySelector(".dark").classList.add("dark--active");
    document.querySelector(".credit-card").classList.add("credit-card--active");
});

document.querySelector(".dark").addEventListener("click", () => {
    document
        .querySelector(".coffee-section")
        .classList.remove("coffee-section--active");
    document.querySelector(".dark").classList.remove("dark--active");
    document
        .querySelector(".credit-card")
        .classList.remove("credit-card--active");
});

// Toggle burgers

function toggleBurgerOne() {
    document
        .querySelector(".burger-one")
        .classList.toggle("burger-one--active");
}
function toggleBurgerTwo() {
    document
        .querySelector(".burger-two")
        .classList.toggle("burger-two--active");
}
function toggleBurgerThree() {
    document
        .querySelector(".burger-three")
        .classList.toggle("burger-three--active");
    document
        .querySelector(".burger-three__center-line")
        .classList.toggle("burger-three__center-line--active");
}
function toggleBurgerFour() {
    document
        .querySelector(".burger-four")
        .classList.toggle("burger-four--active");
    document
        .querySelector(".burger-four__center-line")
        .classList.toggle("burger-four__center-line--active");
}

function toggleBurgerSeven() {
    document
        .querySelector(".burger-seven")
        .classList.toggle("burger-seven--active");
    document
        .querySelector(".burger-seven__center-line1")
        .classList.toggle("burger-seven__center-line1--active");
    document
        .querySelector(".burger-seven__center-line2")
        .classList.toggle("burger-seven__center-line2--active");
}

// Copy burgers

const copyBurgerOne = document.querySelector(".copy-burger-one");
const copyBurgerTwo = document.querySelector(".copy-burger-two");
const copyBurgerThree = document.querySelector(".copy-burger-three");
const copyBurgerFour = document.querySelector(".copy-burger-four");
const copyBurgerSeven = document.querySelector(".copy-burger-seven");

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
    transform: translateY(-5px);
    transition: all 0.5s;
}

.burger-one::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(5px);
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
    translate: 0 -5px;
    transition: translate 0.5s 0.5s, rotate 0.5s;
}

.burger-two::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    translate: 0 5px;
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

copyBurgerSeven.addEventListener("click", () => {
    copyBurgerSeven.textContent = "Copied";
    setTimeout(() => {
        copyBurgerSeven.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-seven").outerHTML}
    <script>
    ${toggleBurgerSeven}
    </script>
    <style>
    .burger-seven {
        position: relative;
        width: 50px;
        height: 0;
        cursor: pointer;
        padding: 25px 0;
    }

    .burger-seven::before {
        position: absolute;
        right: 0;
        content: "";
        width: 50%;
        height: 2px;
        background-color: #000;
        opacity: 1;
        translate: 0 -5px;
        transition: all 0.3s 0.3s;
    }

    .burger-seven::after {
        position: absolute;
        left: 0;
        content: "";
        width: 50%;
        height: 2px;
        background-color: #000;
        opacity: 1;
        translate: 0 5px;
        transition: all 0.3s 0.3s;
    }

    .burger-seven__center-line1 {
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: #000;
        rotate: 45deg;
        translate: -25px -25px;
        opacity: 0;
        transition: all 0.3s;
    }

    .burger-seven__center-line2 {
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: #000;
        rotate: -45deg;
        translate: 25px -25px;
        opacity: 0;
        transition: all 0.3s;
    }

    .burger-seven--active::before {
        right: 25px;
        opacity: 0;
        transition: all 0.3s;
    }
    .burger-seven--active::after {
        left: 25px;
        opacity: 0;
        transition: all 0.3s;
    }

    .burger-seven__center-line1--active {
        translate: 0 0;
        opacity: 1;
        transition: all 0.3s 0.3s;
    }

    .burger-seven__center-line2--active {
        translate: 0 0;
        opacity: 1;
        transition: all 0.3s 0.3s;
    }

    </style>
    `);
});
