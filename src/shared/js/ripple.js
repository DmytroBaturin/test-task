let btns = document.querySelectorAll('.button')

const ripple = (btn, e) => {
  const rect = btn.getBoundingClientRect()
  const posX = e.clientX - rect.left
  const posY = e.clientY - rect.top

  const ripple = document.createElement('span')
  ripple.classList.add('ripple')

  const size = Math.max(btn.offsetWidth, btn.offsetHeight)
  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${posX - size / 2}px`
  ripple.style.top = `${posY - size / 2}px`

  btn.appendChild(ripple)
  ripple.classList.add('rippleAnimation')

  setTimeout(() => {
    ripple.remove()
  }, 600)
}

btns.forEach(btn => {
  btn.addEventListener('click', e => ripple(btn, e))
})
