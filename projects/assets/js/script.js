// JavaScript for Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


function downloadResume() {
    // File path of the resume
    const filePath = 'projects/assets/images/portfolio-pic/resume-jet.jpg'; 

    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'resume-jet.jpg';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}