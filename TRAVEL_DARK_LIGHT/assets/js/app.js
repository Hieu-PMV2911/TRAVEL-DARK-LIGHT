// =============== SHOW MENU ===============================
const navMenu = document.querySelector('.nav__menu'),
      navToggle =  document.querySelector('.nav__toggle'),
      navClose = document.querySelector('.nav__close');

if(navToggle){
	navToggle.addEventListener('click',()=>{
		navMenu.classList.add('show-menu')
	})
}

if(navClose){
	navClose.addEventListener('click',()=>{
		navMenu.classList.remove('show-menu')
	})
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// =================== CHANGE BACKGROUND HEADER ===================

function scrollHeader(){
	const header = document.querySelector('#header');

	if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// ================== SWIPER CSS============================
var swiper = new Swiper(".discover__container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
	loop: true,
	spaceBetween: 32,
        coverflowEffect: {
          rotate: 0,
        },
  }
);


//======================= VIDEO ========================
const videoFile = document.querySelector('#video-file'),
      videoButton = document.querySelector('#video-button'),
      videoIcon = document.querySelector('#video-icon');

function playPause() {
  if(videoFile.paused){
      videoFile.play();
      // we change icon
      videoIcon.classList.add('ri-pause-line');
      videoIcon.classList.remove('ri-play-line');
  }else{
      videoFile.pause();
      // we change icon
      videoIcon.classList.add('ri-play-line');
      videoIcon.classList.remove('ri-pause-line');
  }
}

videoButton.addEventListener('click',playPause);

//change icon when video end 
function endVideo(){
  videoIcon.classList.add('ri-play-line');
  videoIcon.classList.remove('ri-pause-line');
}
videoFile.addEventListener('ended', endVideo);


// ================= SHOW SCROLL =================================
function scrollTop(){
  const scrollTop = document.querySelector('.scroll__up');
// when the scroll higher than so  560 viewport ==> add class 'show-scroll'
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollTop);

// ============== SCROLL SELECTION ACTIVE LINK =================================
const section = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.pageYOffset;
  section.forEach(current =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    }
    else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  })
}

window.addEventListener('scroll', scrollActive)

// ================== DARK LIGHT THEME =================
const themeButton = document.querySelector('.change-theme-icon'),
      changeText = document.querySelector('.change-theme-name'),
      darkTheme = 'dark-theme',
      iconTheme = 'ri-sun-fill';

	// if user selected
const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon');

	// we obtain the current theme that the interface
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
      getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill';

	// if user chose a topic 
if(selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
	themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme);
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// add or remove dark/light icon
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
  if(changeText.textContent === 'Dark mode'){
    changeText.textContent = 'Light mode';
  }else{
    changeText.textContent = 'Dark mode';
  }
  


	// we save theme and the current icon that  the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
})


// ================== SCROLL REVEAL ANIMATION ============ 

const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
  .discover__container,
  .experience__data, .experience__overlay,
  .place__card,
  .sponsor__content,
  .footer__data, .footer__rights`,{
  origin: 'top',
  interval: 100,
})

sr.reveal(`.about__data, 
  .video__description,
  .subscribe__description`,{
  origin: 'left',
})

sr.reveal(`.about__img-overlay, 
  .video__content,
  .subscribe__form`,{
  origin: 'right',
  interval: 100,
})