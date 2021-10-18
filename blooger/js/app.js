const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const navlinks = getElement('.nav-links')
const navlinksIcons = getElement('.nav-links-icons')
const dropDown = getElement('.nav-drop-down')

dropDown.addEventListener('click', () => {
  navlinks.classList.toggle('show')
  navlinksIcons.classList.toggle('show')
})





