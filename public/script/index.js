// const sliderPage = document.querySelector('#slider-page');
// const slide = document.querySelectorAll('.slide');
// const totalSlide = sliderPage.childElementCount;
// const prevSlide = document.querySelector('.prev');
// const nextSlide = document.querySelector('.next');
const collapsible = document.querySelector('.collapsible');
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

// current = 1;

// function next() {
//     if (current < totalSlide) {
//         current++;
//         showSlide('next');
//         prevSlide.style.display = 'block';
//     }
//     if (current == totalSlide) {
//         nextSlide.style.visibility = 'hidden';
//     }
// }

// function prev() {
//     if (current > 1) {
//         current--;
//         showSlide('prev');
//         prevSlide.style.visibility = nextSlide.style.visibility = 'visible';
//     }
//     if (current == 1) {
//         prevSlide.style.display = 'none';
//     }
// }

// function showSlide(type) {
//     for (let i = 0; i < totalSlide; i++) {
//         const element = slide[i];
//         if (type === 'next') {
//             element.classList.add('animate-drop-in');
//             // element.classList.remove('animate-fold-right');
//         }
//         else if (type === 'prev') {
//             element.classList.add('animate-drop-in');
//             // element.classList.remove('animate-fold-left');
//         }
//         if (current === i + 1) {
//             element.classList.remove('hidden');
//         } else {
//             element.classList.add('hidden');
//         }
//     }
// }

function toggleMenu() {
    collapsible.style.display = 'block';
    prevSlide.style.opacity = nextSlide.style.opacity = 0;
}
function hideToggle() {
    collapsible.style.display = 'none';
    prevSlide.style.opacity = nextSlide.style.opacity = 100;
}

function sendEmail() {
    const bodyMessage = `Name: ${name.value}<br> Email: ${email.value}
    <br> Phone number: ${phone.value}<br> Message: ${message.value}`;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "nguyenphilong.it.123@gmail.com",
        Password: "A9D5C4AE882D75A8ADBD3A14C60E22B624BC",
        To: 'nguyenphilong.it.123@gmail.com',
        From: "nguyenphilong.it.123@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
})