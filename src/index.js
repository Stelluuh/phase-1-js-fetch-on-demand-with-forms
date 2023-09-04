const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
  })
}

document.addEventListener('DOMContentLoaded', init);