/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', { delay: 200 })
sr.reveal('.home__img', { origin: 'right', delay: 400 })

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 500 })
sr.reveal('.about__subtitle', { delay: 300 })
sr.reveal('.about__profession', { delay: 400 })
sr.reveal('.about__text', { delay: 500 })
sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.skills__img', { delay: 400 })

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 200 })
sr.reveal('.contact__input', { delay: 400 })
sr.reveal('.contact__button', { delay: 600 })



var options = {
    opacityIn: [0, 1],
    scaleIn: [0.2, 1],
    scaleOut: 3,
    durationIn: 800,
    durationOut: 600,
    delay: 500,
    easing: "easeInExpo"
};
anime.timeline({ loop: true })
    .add({
        targets: '.text-animation .one',
        opacity: options.opacityIn,
        scale: options.scaleIn,
        duration: options.durationIn
    })
    .add({
        targets: '.text-animation .one',
        opacity: 0,
        scale: options.scaleOut,
        easing: options.easing,
        duration: options.durationOut,
        delay: options.delay
    })
    .add({
        targets: '.text-animation .two',
        opacity: options.opacityIn,
        scale: options.scaleIn,
        duration: options.durationIn
    })
    .add({
        targets: '.text-animation .two',
        opacity: 0,
        scale: options.scaleOut,
        easing: options.easing,
        duration: options.durationOut,
        delay: options.delay
    })
    .add({
        targets: '.text-animation .three',
        opacity: options.opacityIn,
        scale: options.scaleIn,
        duration: options.durationIn
    })
    .add({
        targets: '.text-animation .three',
        opacity: 0,
        scale: options.scaleOut,
        easing: options.easing,
        duration: options.durationOut,
        delay: options.delay
    })
    .add({
        targets: '.text-animation',
        opacity: 0,
        duration: 500,
        delay: 500
    })

    (function (doc) {

        // this party startet
        textAnim();

        function textAnim() {
            var con = doc.querySelector('.animation');

            if (con) {
                // get the text
                var str = con.innerHTML;
                var arr = str.split(' ');
                //delete the text from container
                con.innerHTML = '';
                // create individual elements and add them to the container
                arr.forEach(function (el) {
                    if (el != "\n") {
                        var newHTMLel = doc.createElement('span')
                        newHTMLel.innerHTML = el;
                        newHTMLel.classList.add('animation__elem', 'hidden');
                        con.appendChild(newHTMLel);
                    }
                });

                // get the individual elements back an show them piece by piece
                var list = con.childNodes;
                var timer = 0;

                list.forEach(function (el) {
                    setTimeout(function () {
                        el.classList.remove('hidden');
                    }, timer += 200);
                });
            }
        }

        /*---------------*\
         * only for show *
        \*---------------*/

        var btn = doc.querySelector('.restart');

        btn.addEventListener('click', function () {
            doc.querySelector('.animation').innerHTML = 'text comes here';
            textAnim();
        });

    })(document);


(function (doc) {

    // this party startet
    textAnim();

    function textAnim() {
        var con = doc.querySelector('.animation');

        if (con) {
            // get the text
            var str = con.innerHTML;
            var arr = str.split(' ');
            //delete the text from container
            con.innerHTML = '';
            // create individual elements and add them to the container
            arr.forEach(function (el) {
                if (el != "\n") {
                    var newHTMLel = doc.createElement('span')
                    newHTMLel.innerHTML = el;
                    newHTMLel.classList.add('animation__elem', 'hidden');
                    con.appendChild(newHTMLel);
                }
            });

            // get the individual elements back an show them piece by piece
            var list = con.childNodes;
            var timer = 0;

            list.forEach(function (el) {
                setTimeout(function () {
                    el.classList.remove('hidden');
                }, timer += 200);
            });
        }
    }

    /*---------------*\
     * only for show *
    \*---------------*/

    var btn = doc.querySelector('.restart');

    btn.addEventListener('click', function () {
        doc.querySelector('.animation').innerHTML = 'text comes here';
        textAnim();
    });

})(document);



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.className += ' hidden'; // Ajoute la classe "hidden" pour masquer le loader

    const mainContent = document.querySelector('.l-main');
    mainContent.classList.remove('hidden'); // Supprime la classe "hidden" pour afficher le contenu principal
});

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez le conteneur du carrousel
    var carousel = document.querySelector(".portfolio__carousel");

    // Initialisez le carrousel avec les options souhaitées
    $(carousel).slick({
        dots: true, // Affiche les indicateurs de pagination
        arrows: false, // Masque les flèches de navigation
        autoplay: true, // Active le défilement automatique
        autoplaySpeed: 3000 // Durée entre chaque diapositive (en millisecondes)
    });
});

if (scrollPosition >= top && scrollPosition < top + height) {
    if (index === 0) {
        section.style.backgroundColor = 'red';
    } else if (index === 1) {
        section.style.backgroundColor = 'green';
    } else if (index === 2) {
        section.style.backgroundColor = 'blue';
    }
} else {
    section.style.backgroundColor = '';
}
