let modalOpen = document.getElementById('modal-open')
let modal = document.getElementById('modal')
let closeBtn = document.querySelector('.closeBtn')

modalOpen.addEventListener('click', () => {
    modal.style.display = 'block'
    modalOpen.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
    modalOpen.style.display = 'block'
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none'
        modalOpen.style.display = 'block'
    }
   
})
