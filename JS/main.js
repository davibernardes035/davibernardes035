const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('filtro__ativar')
        })
        target.classList.add('filtro__ativar')

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })

        tab.classList.add('filter-tab-active')
    })
})

// tema escuro
const botaoTema = document.getElementById('tema-botao')
const temaEscuro = 'dark-theme'
const temaClaro = 'ri-sun-line'

const temaSelecionado = localStorage.getItem('selected-theme')
const iconeSelecionado = localStorage.getItem('selected-icon')

const getCurrenTheme = () => document.body.classList.contains(temaEscuro) ? 'dark' : 'ligth'
const getCurrentIcon = () => botaoTema.classList.contains(temaClaro) ? 'ri-moon-line' : 'ri-sun-line'

if (iconeSelecionado) {
    document.body.classList[temaSelecionado === 'dark' ? 'add' : 'remove'](temaEscuro)
    botaoTema.classList[iconeSelecionado === 'ri-moon-line' ? 'add' : 'remove'](temaClaro)
}

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle(temaEscuro)
    botaoTema.classList.toggle(temaClaro)

    localStorage.setItem('selected-theme', getCurrenTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//animacao scroll

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.perfil-borda`)
sr.reveal(`.perfil-nome`, { delay: 500 })
sr.reveal(`.profissao`, {delay: 600})
sr.reveal(`.perfil-midias-sociais`, { delay: 700 })
sr.reveal(`.perfil-buttons`, { delay: 800 })
sr.reveal(`.filtro__conteudo`, {delay: 900})
sr.reveal(`.filtro`, {delay: 1000})