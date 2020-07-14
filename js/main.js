const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-list');
	const navLinks = document.querySelectorAll('.nav-list li');
	// toggle nav
	burger.addEventListener('click', ()=>{
		nav.style.transition = 'transform 0.5s ease-in';
		nav.classList.toggle('nav-active');


		// animate navLinks
		navLinks.forEach((link, index)=>{
			if(link.style.animation){
				link.style.animation = '';
			}
			else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + .2}s`;
			}
		});
		// burger animation
		burger.classList.toggle('toggle');
	});

}

console.log("test");
navSlide();