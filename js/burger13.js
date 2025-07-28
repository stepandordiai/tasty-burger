function toggleBurger13() {
	document.querySelector(".burger-13").classList.toggle("burger-13--active");
	document
		.querySelector(".burger-13__center-line")
		.classList.toggle("burger-13__center-line--active");
}

const copyBurger13 = document.querySelector(".copy-burger-13");

copyBurger13.addEventListener("click", () => {
	copyBurger13.textContent = "Copied";
	setTimeout(() => {
		copyBurger13.textContent = "Copy";
	}, 3000);
	navigator.clipboard.writeText(`
      ${document.querySelector(".burger-13").outerHTML}
    <script>
    ${toggleBurger13}
    </script>
    <style>
.burger-13 {
	position: relative;
	width: 50px;
	padding: 25px 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

.burger-13::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background: linear-gradient(90deg, #fff 50%, transparent 50%);
	transform: translateY(-10px);
	transition: all 0.3s;
}

.burger-13__center-line {
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;

	transition: all 0.3s;
}

.burger-13::after {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background: linear-gradient(90deg, transparent 50%, #fff 50%);
	transform: translateY(10px);
	transition: all 0.3s;
}

.burger-13--active::before {
	transform: translateY(0);
	rotate: 45deg;
}

.burger-13__center-line--active {
	rotate: -45deg;
}

.burger-13--active::after {
	transform: translateY(0);
	rotate: 45deg;
}
    </style>
    `);
});
