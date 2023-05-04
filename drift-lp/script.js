const linksNav = document.querySelectorAll('nav a')

linksNav.forEach(link => {
  link.addEventListener('click', function () {
    const target = this.getAttribute('data-target')
    const section = document.querySelector(target)
    section.scrollIntoView({ behavior: 'smooth' })
  })
})
