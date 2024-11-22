// ==================================== Nav bar js ===============================================
const menuicon = document.querySelector(".menubar");
const menuList = document.querySelector(".menulist");
const menubarFirst = document.querySelector(".menubarFirst");
const menubarSecond = document.querySelector(".menubarSecond");
const menubarThird = document.querySelector(".menubarThird");
const body = document.body;

menuicon.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (window.innerWidth < 1024) {
        menuList.classList.toggle("-right-full");
        menuList.classList.toggle("right-0");
        menubarFirst.classList.toggle("hidden");
        menubarFirst.classList.toggle("w-full");
        menubarSecond.classList.toggle("hidden");
        toggleImage.style.display = toggleImage.style.display === 'block' ? 'none' : 'block';
        body.classList.toggle("overflow-hidden");
    }
}
const menuItems = document.querySelectorAll(".menulist button, .menulist a");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        if (window.innerWidth < 992) {
            toggleMenu();
        }
    });
});


// ========================================== Loop from 1 to 4000 =======================================================
for (let i = 1; i <= 4000; i++) {
    (function (i) {
        setTimeout(function () {
            document.getElementById('counter').innerText = i;
        }, i * 2);
    })(i);
}

// ====================================== Accordion js =====================================================
const radioButtons = document.querySelectorAll('input[name="accordion"]');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        radioButtons.forEach(rb => {
            const icon = document.querySelector(`#icon${rb.id.replace('item', '')}`);
            if (rb.checked) {
                icon.style.transform = 'rotate(180deg)';
                icon.style.fill = 'blue';
            } else {
                icon.style.transform = 'rotate(0deg)';
                icon.style.fill = 'white';
            }
        });
    });
});
document.querySelector('input[name="accordion"]:checked').dispatchEvent(new Event('change'));
// ============================= galaxy js =================================
gsap.fromTo(
    "#galaxy",
    {
        rotate: 0,
    },
    {
        repeat: -2,
        rotate: 360,
        ease: "linear",
        duration: 50,
    }
);
// =============================== team-slider =====================================
$(".slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    adaptiveHeight: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

//   ================================= character slider  ======================================
$('.slider-2').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
});

//   ========================================== video js ================================================
const playButton = document.getElementById("playButton");
const videoModal = document.getElementById("videoModal");
const videoElement = document.getElementById("videoElement");
const closeButton = document.getElementById("closeButton");

// Open the video modal
playButton.addEventListener("click", () => {
    videoModal.classList.remove("hidden");
    videoElement.play();
});

// Close the video modal
closeButton.addEventListener("click", () => {
    videoModal.classList.add("hidden");
    videoElement.pause();
    videoElement.currentTime = 0; // Reset video to the start
});

// Close modal when clicking outside the video
videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
        videoModal.classList.add("hidden");
        videoElement.pause();
        videoElement.currentTime = 0; // Reset video to the start
    }
});
// ============================== scrool up btn js ===================================
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
let scrollTrigger = 300;

function updateScrollTrigger() {
    if (window.innerWidth >= 1024) {
        scrollTrigger = 500;
    } else {
        scrollTrigger = 300;
    }
}

updateScrollTrigger();
window.addEventListener('resize', updateScrollTrigger);

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollTrigger) {
        scrollToTopBtn.classList.remove('hidden');
    } else {
        scrollToTopBtn.classList.add('hidden');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
