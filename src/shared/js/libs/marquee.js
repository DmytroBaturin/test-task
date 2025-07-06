;(function () {
  function marquee(container, { speed = 60, gap = 24 } = {}) {
    const items = Array.from(container.children)
    const wrapper = document.createElement('div')

    wrapper.style.cssText = `
      display: flex;
      gap: ${gap}px;
      align-items: center;
      justify-content: center;
      will-change: transform;
    `

    items.forEach((item, index) => {
      const clone = item.cloneNode(true)
      if (index % 2 === 0) {
        clone.classList.add('outlined')
      }
      clone.style.flexShrink = '0'
      wrapper.appendChild(clone)
    })

    container.innerHTML = ''
    container.appendChild(wrapper)
    container.style.overflow = 'hidden'

    let x = 0

    function animate() {
      const firstItem = wrapper.children[0]
      const firstItemWidth = firstItem.offsetWidth + gap

      x += speed / 60

      if (x >= firstItemWidth - 0.5) {
        wrapper.appendChild(firstItem)
        x -= firstItemWidth
      }

      wrapper.style.transform = `translateX(-${x}px)`
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  window.initMarquees = (selector = '.marquee', options = {}) => {
    const containers = document.querySelectorAll(selector)
    containers.forEach(container => marquee(container, options))
  }
})()

window.pageInit = () => {
  window.initMarquees('.marquee', { speed: 60, gap: 32 })
}
