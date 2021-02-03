const navLinks = document.querySelectorAll('nav ul li a');
const pathname = window.location.pathname;
console.log(pathname);

const isActiveLink = (pathname, link) => {
    console.log(link.innerText.toLowerCase());
    if (pathname.indexOf(link.innerText.toLowerCase()) !== -1) {
        console.log('butter', link.innerText);
        link.style.color = 'hotpink';
    } else if (link.innerText.toLowerCase() === 'home' && pathname === '/') {
        link.style.color = 'hotpink';
    }
}

navLinks.forEach(link => {
    isActiveLink(pathname, link);
})

