// **** VARIÁVEIS GERAIS ****
const sessao1 = document.querySelector('.sessao1')
const verduras = document.querySelector('.verduras')

// **** ALFACE ****
const alface2 = document.querySelector('.alface2')
const fundo = document.querySelector('.fundo')
const check = document.querySelector('#check')
const textoAlface = document.querySelector('.texto-alface')
const tituloAlface = document.querySelector('.titulo-alface')

check.addEventListener('change', () => {
    alface2.classList.toggle('active')
    fundo.classList.toggle('active')
    sessao1.classList.toggle('alface')
    verduras.classList.toggle('active')
    tituloAlface.classList.toggle('active')
    textoAlface.classList.toggle('active')
})

// **** TOMATE ****
const checkTomate = document.querySelector('#check-tomate')
const tomate2 = document.querySelector('.tomate2')
const tomate = document.querySelector('.tomate')
const textoTomate = document.querySelector('.texto-tomate')
const tituloTomate = document.querySelector('.titulo-tomate')

checkTomate.addEventListener('change', () => {
    tomate2.classList.toggle('active')
    tomate.classList.toggle('active')
    verduras.classList.toggle('active')
    sessao1.classList.toggle('active-tomate')
    textoTomate.classList.toggle('active')
    tituloTomate.classList.toggle('active')
})

