const navLinks = document.querySelectorAll('.header__nav-link')

let activeHash = window.location.hash.substring(1).split('#')[0]

function updateActiveLink() {
  activeHash = window.location.hash.substring(1).split('#')[0] || 'home'

  navLinks.forEach(link => {
    const navAttribute = link.getAttribute('data-page')

    if (navAttribute === activeHash) {
      link.classList.add('header__nav-link--active')
    } else {
      link.classList.remove('header__nav-link--active')
    }
  })
}

updateActiveLink()

window.addEventListener('hashchange', updateActiveLink)
