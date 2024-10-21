function access() {
    document.querySelector(".warning").classList.add("warning--access");
}

function toggleFirst() {
    document.querySelector(".first").classList.toggle("active-first");
}
function toggleSecond() {
    document.querySelector(".second").classList.toggle("active-second");
}
function toggleThird() {
    document.querySelector(".third").classList.toggle("active-third");
    document.querySelector(".center").classList.toggle("active-center");
}
function toggleFourth() {
    document.querySelector(".fourth").classList.toggle("fourth--active");
    document
        .querySelector(".fourth__center")
        .classList.toggle("fourth__center--active");
}

setInterval(() => {
    document
        .querySelector(".logo-burger")
        .classList.toggle("logo-burger--active");
    document
        .querySelector(".logo-burger__center")
        .classList.toggle("logo-burger__center--active");
}, 5000);

document.querySelector(".copy-burger-one").addEventListener("click", () => {
    document.querySelector(".copy-burger-one").textContent = "Copied";
    setTimeout(() => {
        document.querySelector(".copy-burger-one").textContent = "Copy";
    }, 3000);
    navigator.clipboard.writeText(`
  <div onclick="toggleFirst()" class="first"></div>
  <style>
  .first {
    width: 50px;
    height: 0px;
    padding: 25px 0;
    position: relative;
    cursor: pointer;
}
.first::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: black;
    transform: translateY(-5px);
    transition: all 0.5s;
}
.first::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: black;
    transform: translateY(5px);
    transition: all 0.5s;
}
.active-first::before {
    content: "";
    transform: translateY(0) rotate(-45deg);
}
.active-first::after {
    content: "";
    transform: translateY(0) rotate(45deg);
}
  </style>
  <script>
   function toggleFirst() {
    document.querySelector(".first").classList.toggle("active-first");
}
  </script>
    `);
});
