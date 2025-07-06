const navLinks = document.querySelectorAll('.header__nav-link')
const activeLine = document.querySelector('.header__active-line')

function updateActiveLink() {
  const activeHash = window.location.hash.substring(1).split('#')[0] || 'home'

  navLinks.forEach(link => {
    const navAttribute = link.getAttribute('data-page')

    if (navAttribute === activeHash) {
      link.classList.add('header__nav-link--active')

      const offsetLeft = link.offsetLeft
      const width = link.offsetWidth

      activeLine.style.width = `${width}px`
      activeLine.style.transform = `translateX(${offsetLeft}px)`
    } else {
      link.classList.remove('header__nav-link--active')
    }
  })
}

updateActiveLink()
window.addEventListener('hashchange', updateActiveLink)
window.addEventListener('resize', updateActiveLink)
