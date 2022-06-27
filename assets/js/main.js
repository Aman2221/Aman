/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// })

/*SCROLL HOME*/
// sr.reveal('.home__title', {})
// sr.reveal('.home__scroll', {delay: 200})
// sr.reveal('.home__img', {origin:'right', delay: 400})

// /*SCROLL ABOUT*/
// sr.reveal('.about__img', {delay: 500})
// sr.reveal('.about__subtitle', {delay: 300})
// sr.reveal('.about__profession', {delay: 400})
// sr.reveal('.about__text', {delay: 500})
// sr.reveal('.about__social-icon', {delay: 600, interval: 200})

// /*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle', {})
// sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
// sr.reveal('.skills__img', {delay: 400})

// /*SCROLL PORTFOLIO*/
// sr.reveal('.portfolio__img', {interval: 200})

// /*SCROLL CONTACT*/
// sr.reveal('.contact__subtitle', {})
// sr.reveal('.contact__text', {interval: 200})
// sr.reveal('.contact__input', {delay: 400})
// sr.reveal('.contact__button', {delay: 600})

// function fun(){
//     document.getElementById("loading").style.display="none";
// }
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 500) {
    document.getElementById("headerNav").style.background = "black";
  }
  if (document.documentElement.scrollTop < 500) {
    document.getElementById("headerNav").style.background = "rgba(255,255,255,0.2";
  }
}

function initializeApp() {
    const firebaseConfig = {
        apiKey: "AIzaSyDcl3eApq0iXEPetx1HQMfa7C3kOLwUIwU",
        authDomain: "portfolio-aman.firebaseapp.com",
        projectId: "portfolio-aman",
        storageBucket: "portfolio-aman.appspot.com",
        messagingSenderId: "903221669549",
        appId: "1:903221669549:web:11b4fcec6e5d7b3c176024"
    };
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    const fireStore= firebase.firestore()
    let submitForm = document.getElementById('contact__form');
    // Save message to firebase

    submitForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;
        let message = document.getElementById('messageText').value;
        fireStore.collection("Messages").add({ name, email, message}).then(() => 
            {
                alert('Message Sent Successfully');
                document.getElementById('nameInput').value = '';
                document.getElementById('emailInput').value = '';
                document.getElementById('messageText').value = '';
                document.location.href = "./thankyou.html";
            }).catch(err => {
                console.log('Message',err);
            })
    })

}

window.addEventListener('load', () => {
    document.querySelector('body').classList.remove('bodyDarkBg');
    document.querySelector('body').classList.add('bodyLightBg');
    document.getElementById('lightBackground').classList.remove('lightBackgroundHide');
    document.getElementById('lightBackground').classList.add('lightBackgroundShow');
})

document.querySelector('#lightMode').addEventListener('click', () => {
    document.querySelector('body').classList.remove('bodyDarkBg');
    document.querySelector('body').classList.add('bodyLightBg');
    document.getElementById('lightBackground').classList.remove('lightBackgroundHide');
    document.getElementById('lightBackground').classList.add('lightBackgroundShow');
})

document.querySelector('#darkMode').addEventListener('click', () => {
    document.querySelector('body').classList.add('bodyDarkBg');
    document.querySelector('body').classList.remove('bodyLightBg');
    document.getElementById('lightBackground').classList.remove('lightBackgroundShow');
    document.getElementById('lightBackground').classList.add('lightBackgroundHide');
})


