function toggleBurger1() {
	document.querySelector(".burger-1").classList.toggle("burger-1--active");
}

const copyBurger1 = document.querySelector(".copy-burger-1");

copyBurger1.addEventListener("click", () => {
	copyBurger1.textContent = "Copied";
	setTimeout(() => {
		copyBurger1.textContent = "Copy";
	}, 3000);
	navigator.clipboard.writeText(`
        ${document.querySelector(".burger-1").outerHTML}
        <script>
        ${toggleBurger1}
        </script>
        <style>
.burger-1 {
	position: relative;
	width: 50px;
	height: 0px;
	padding: 25px 0;
	display: flex;
	justify-content: center;
	align-items: center;
}

.burger-1::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;
	transform: translateY(-7.5px);
	transition: all 0.5s;
}

.burger-1::after {
	content: "";
	position: absolute;
	width: 100%;
	height: 2px;
	background: #fff;
	transform: translateY(7.5px);
	transition: all 0.5s;
}

.burger-1--active::before {
	transform: translateY(0) rotate(-45deg);
}

.burger-1--active::after {
	transform: translateY(0) rotate(45deg);
}
        </style>
        `);
});
