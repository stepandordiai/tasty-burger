function toggleBurger6() {
	document.querySelector(".burger-6").classList.toggle("burger-6--active");
	document
		.querySelector(".burger-6__center-line")
		.classList.toggle("burger-6__center-line--active");
	document
		.querySelector(".burger-6__center-line2")
		.classList.toggle("burger-6__center-line2--active");
	document
		.querySelector(".burger-6__center-line3")
		.classList.toggle("burger-6__center-line3--active");
}

const copyBurger6 = document.querySelector(".copy-burger-6");

copyBurger6.addEventListener("click", () => {
	copyBurger6.textContent = "Copied";
	setTimeout(() => {
		copyBurger6.textContent = "Copy";
	}, 3000);
	navigator.clipboard.writeText(`
      ${document.querySelector(".burger-6").outerHTML}
    <script>
    ${toggleBurger6}
    </script>
    <style>
.burger-6 {
	position: relative;
	width: 50px;
	height: 0;
	padding: 25px 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.burger-6::before {
	content: "";
	position: absolute;
	width: 25%;
	height: 2px;
	background: #fff;

	translate: 0 -15px;
	transition: all 0.3s 0.8s;
}

.burger-6__center-line {
	position: absolute;
	width: 50%;
	height: 2px;
	background: #fff;

	transition: all 0.3s 0.7s;
}

.burger-6::after {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;

	translate: 0 15px;
	transition: all 0.3s 0.6s;
}

.burger-6__center-line2 {
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;

	opacity: 0;
	rotate: 45deg;
	translate: -50px -50px;
	transition: all 0.3s 0.3s;
}

.burger-6__center-line3 {
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;

	opacity: 0;
	rotate: -45deg;
	translate: 50px -50px;
	transition: all 0.3s;
}

.burger-6--active::before {
	width: 0;
	transition: all 0.3s;
}

.burger-6__center-line--active {
	width: 0;
	transition: all 0.3s 0.1s;
}

.burger-6--active::after {
	width: 0;
	transition: all 0.3s 0.2s;
}

.burger-6__center-line2--active {
	opacity: 1;
	translate: 0 0;
	transition: all 0.3s 0.5s;
}

.burger-6__center-line3--active {
	opacity: 1;
	translate: 0 0;
	transition: all 0.3s 0.8s;
}
    </style>
    `);
});
