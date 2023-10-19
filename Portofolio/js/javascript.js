//Dropdown-menu & Hamburger
const toggle = document.querySelector('.toggle-btn')
const toggleIcon = document.querySelector('.toggle-btn i')
const dropdownMenu = document.querySelector('.dropdown-menu')

toggle.onclick = function() {
    dropdownMenu.classList.toggle('drop')
    const isDrop = dropdownMenu.classList.contains('drop')

    toggleIcon.classList = isDrop
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// Animated Writing Text
var typed = new Typed(".auto-type", {
    strings: ["Freelancer", "UI/UX Designer", "Backend Developer", "Youtuber"],
    typeSpeed: 120,
    backSpeed: 35,
    loop: true
})