const container = document.querySelector('.container')
const result = document.querySelector('#resultado')
const formBtn = document.querySelector('#formulario')

window.addEventListener('load', () => {
    formBtn.addEventListener('submit', weatherSearch)
})

function weatherSearch(e) {
    e.preventDefault()

    //Validar Formulario
    const city = document.querySelector('#ciudad').value
    const country = document.querySelector('#pais').value

    if (city === '' || country === '') {
        mostrarError("Ambos campos son obligatorios")
        return
    }

    //Consultar la API

}

function mostrarError(mensaje) {

    const alert = document.querySelector('.bg-red-100') // busca una alerta con esa clase y si no existe la creamos

    if (!alert) { // para que no se cree varias veces
        const alert = document.createElement('div')
        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center')
        alert.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${mensaje}</span>
    `
        container.appendChild(alert)

        setTimeout(() => {
            alert.remove()
        }, 5000)
    }

}