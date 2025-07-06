const routes = {
  home: 'pages/home/index.html',
  about: 'pages/about/index.html',
  services: 'pages/services/index.html'
}

const routerView = document.getElementById('router-view')

async function loadPage(page) {
  const path = routes[page] || routes.home

  if (typeof window.pageDestroy === 'function') {
    try {
      window.pageDestroy()
    } catch (err) {
      console.warn('Page Destroy error:', err)
    }
    window.pageDestroy = undefined
  }

  const res = await fetch(path)
  const html = await res.text()

  const tempWrapper = document.createElement('div')
  tempWrapper.innerHTML = html
  tempWrapper.style.opacity = '0'
  tempWrapper.style.transition = 'opacity 0.4s ease'

  routerView.innerHTML = ''
  routerView.appendChild(tempWrapper)

  window.scrollTo(0, 0)
  requestAnimationFrame(() => {
    tempWrapper.style.opacity = '1'
    if (typeof window.pageInit === 'function') {
      try {
        window.pageInit()
      } catch (err) {
        console.warn('Page Init error:', err)
      }
    } else {
      console.warn(`No page inits defined for "${page}"`)
    }
  })
}

function initRouter() {
  const page = location.hash.replace('#', '') || 'home'
  loadPage(page).then()
}

window.addEventListener('DOMContentLoaded', initRouter)
window.addEventListener('hashchange', initRouter)
