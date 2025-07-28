function toggleBurger3() {
	document.querySelector(".burger-3").classList.toggle("burger-3--active");
	document
		.querySelector(".burger-3__center-line")
		.classList.toggle("burger-3__center-line--active");
}

const copyBurger3 = document.querySelector(".copy-burger-3");

copyBurger3.addEventListener("click", () => {
	copyBurger3.textContent = "Copied";
	setTimeout(() => {
		copyBurger3.textContent = "Copy";
	}, 3000);
	navigator.clipboard.writeText(`
        ${document.querySelector(".burger-3").outerHTML}
    <script>
    ${toggleBurger3}
    </script>
        <style>
.burger-3 {
	position: relative;
	width: 50px;
	padding: 25px 0;
}

.burger-3::before {
	content: "";
	position: absolute;
	left: 0;
	width: 100%;
	height: 2px;
	background: #fff;
	transform: translate(0, -15px) rotate(0);
	transition: transform 0.5s;
}

.burger-3--active::before {
	transform: translate(0, 0) rotate(45deg);
}

.burger-3::after {
	content: "";
	position: absolute;
	left: 0;
	width: 100%;
	height: 2px;
	background: #fff;
	transform: translate(0, 15px) rotate(0);
	transition: transform 0.5s;
}

.burger-3--active::after {
	transform: translate(0, 0) rotate(-45deg);
}

.burger-3__center-line {
	width: 50px;
	height: 2px;
	position: absolute;
	left: 0;
	background: #fff;
	opacity: 1;
	transform: translate(0, 0);
	transition: all 0.5s;
}

.burger-3__center-line--active {
	transform: translate(-50px, 0);

	opacity: 0;
}
        </style>
    `);
});
