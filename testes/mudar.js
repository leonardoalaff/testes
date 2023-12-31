const alface2 = document.querySelector('.alface2')
const fundo = document.querySelector('.fundo')
const check = document.querySelector('#check')
const fundoTexto = document.querySelector('.fundo-texto')

check.addEventListener('change', () => {
    alface2.classList.toggle('active')
    fundo.classList.toggle('active')
    document.body.classList.toggle('active')
})