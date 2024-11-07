document.querySelector(".warning").classList.add("warning--access");

// setTimeout(() => {
//     document.querySelector(".warning").classList.remove("warning--access");
// }, 3000);

// function access() {
//     document.querySelector(".warning").classList.add("warning--access");
// }

// function deny() {
//     window.history.back() || window.close();
// }

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

function toggleBurgerSix() {
    document
        .querySelector(".burger-six")
        .classList.toggle("burger-six--active");
    document
        .querySelector(".burger-six__center-line")
        .classList.toggle("burger-six__center-line--active");
    document
        .querySelector(".burger-six__center-line2")
        .classList.toggle("burger-six__center-line2--active");
    document
        .querySelector(".burger-six__center-line3")
        .classList.toggle("burger-six__center-line3--active");
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

function toggleBurgerEight() {
    document
        .querySelector(".burger-eight")
        .classList.toggle("burger-eight--active");
    document
        .querySelector(".burger-eight__center-line")
        .classList.toggle("burger-eight__center-line--active");
}

function toggleBurger9() {
    document.querySelector(".burger-9").classList.toggle("burger-9--active");
    document
        .querySelector(".burger-9__center-line")
        .classList.toggle("burger-9__center-line--active");
}

function toggleBurger10() {
    document.querySelector(".burger-10").classList.toggle("burger-10--active");
    document
        .querySelector(".burger-10__center-line")
        .classList.toggle("burger-10__center-line--active");
}

function toggleBurger11() {
    document.querySelector(".burger-11").classList.toggle("burger-11--active");
    document
        .querySelector(".burger-11__center-line")
        .classList.toggle("burger-11__center-line--active");
}

// Copy burgers

const copyBurgerOne = document.querySelector(".copy-burger-one");
const copyBurgerTwo = document.querySelector(".copy-burger-two");
const copyBurgerThree = document.querySelector(".copy-burger-three");
const copyBurgerFour = document.querySelector(".copy-burger-four");
const copyBurgerSix = document.querySelector(".copy-burger-six");
const copyBurgerSeven = document.querySelector(".copy-burger-seven");
const copyBurgerEight = document.querySelector(".copy-burger-eight");
const copyBurger9 = document.querySelector(".copy-burger-9");
const copyBurger10 = document.querySelector(".copy-burger-10");
const copyBurger11 = document.querySelector(".copy-burger-11");

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

copyBurgerSix.addEventListener("click", () => {
    copyBurgerSix.textContent = "Copied";
    setTimeout(() => {
        copyBurgerSix.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-six").outerHTML}
    <script>
    ${toggleBurgerSix}
    </script>
    <style>
        .burger-six {
    position: relative;
    width: 50px;
    height: 0;
    padding: 25px 0;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.burger-six::before {
    position: absolute;
    content: "";
    width: 25%;
    height: 2px;
    background-color: #000;
    translate: 0 -15px;
    transition: all 0.3s 0.8s;
}

.burger-six__center-line {
    position: absolute;
    width: 50%;
    height: 2px;
    background-color: #000;
    transition: all 0.3s 0.7s;
}

.burger-six::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    translate: 0 15px;
    transition: all 0.3s 0.6s;
}

.burger-six__center-line2 {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    opacity: 0;
    rotate: 45deg;
    translate: -50px -50px;
    transition: all 0.3s 0.3s;
}

.burger-six__center-line3 {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    opacity: 0;
    rotate: -45deg;
    translate: 50px -50px;
    transition: all 0.3s;
}

.burger-six--active::before {
    width: 0;
    transition: all 0.3s;
}

.burger-six__center-line--active {
    width: 0;
    transition: all 0.3s 0.1s;
}

.burger-six--active::after {
    width: 0;
    transition: all 0.3s 0.2s;
}

.burger-six__center-line2--active {
    opacity: 1;
    translate: 0 0;
    transition: all 0.3s 0.5s;
}

.burger-six__center-line3--active {
    opacity: 1;
    translate: 0 0;
    transition: all 0.3s 0.8s;
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
    translate: 0 -7.5px;
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
    translate: 0 7.5px;
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

copyBurgerEight.addEventListener("click", () => {
    copyBurgerEight.textContent = "Copied";
    setTimeout(() => {
        copyBurgerEight.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-eight").outerHTML}
    <script>
    ${toggleBurgerEight}
    </script>
    <style>
    .burger-container {
    perspective: 100px;
}

.burger-eight {
    position: relative;
    width: 50px;
    height: 0px;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.burger-eight::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(-15px);
    transition: transform 0.3s 0.3s, rotate 0.3s;
}

.burger-eight::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(15px);
    transition: transform 0.3s 0.3s, rotate 0.3s;
}

.burger-eight__center-line {
    width: 50px;
    height: 2px;
    background-color: #000;
    opacity: 1;
    transition: all 0s 0.3s;
}

.burger-eight__center-line--active {
    opacity: 0;
}

.burger-eight--active::before {
    transform: translateY(0);
    rotate: 45deg;
    transition: transform 0.3s, rotate 0.3s 0.3s;
}

.burger-eight--active::after {
    transform: translateY(0);
    rotate: -45deg;
    transition: transform 0.3s, rotate 0.3s 0.3s;
}
    </style>
    `);
});

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

copyBurger10.addEventListener("click", () => {
    copyBurger10.textContent = "Copied";
    setTimeout(() => {
        copyBurger10.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-10").outerHTML}
    <script>
    ${toggleBurger10}
    </script>
    <style>
.burger-10 {
    position: relative;
    width: 50px;
    padding: 25px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.burger-10::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(-15px);
    transition: all 0.3s;
}

.burger-10__center-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000;
    transition: all 0.3s;
}

.burger-10::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(15px);
    transition: all 0.3s;
}

.burger-10--active::before {
    transform: translateY(0);
    rotate: -135deg;
}

.burger-10__center-line--active {
    rotate: -180deg;
    opacity: 0;
}

.burger-10--active::after {
    transform: translateY(0);
    rotate: -225deg;
}
    </style>
    `);
});

copyBurger11.addEventListener("click", () => {
    copyBurger11.textContent = "Copied";
    setTimeout(() => {
        copyBurger11.textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
      ${document.querySelector(".burger-11").outerHTML}
    <script>
    ${toggleBurger11}
    </script>
    <style>
.burger-11 {
    position: relative;
    width: 50px;
    height: 0px;
    padding: 15px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
}

.burger-11::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(-15px);
    transition: transform 0.3s 0.3s, rotate 0.3s;
}

.burger-11__center-line {
    width: 50px;
    height: 2px;
    background-color: #000;
    opacity: 1;
    transition: all 0s 0.3s;
}

.burger-11::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateY(15px);
    transition: transform 0.3s 0.3s, rotate 0.3s;
}

.burger-11--active::before {
    transform: translateY(0);
    rotate: 45deg;
    transition: transform 0.3s, rotate 0.3s 0.3s;
}

.burger-11__center-line--active {
    opacity: 0;
}

.burger-11--active::after {
    transform: translateY(0);
    rotate: 135deg;
    transition: transform 0.3s, rotate 0.3s 0.3s;
}
    </style>
    `);
});
