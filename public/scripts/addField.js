// procurar o botão
document.querySelector('#add-time')
    // quando clicar no botão
    .addEventListener('click', cloneField)

// executar uma ação
function cloneField() {
    // duplicar os campos de horário. qual campo duplicar
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpar os campos de dia e hora
    const fields = newFieldContainer.querySelectorAll('input')
    
    fields.forEach(field => {
        field.value = ''
    });

    // colocar na página, mas onde dentro do #schedule-item?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}