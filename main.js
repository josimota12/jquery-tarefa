//adicionar o elemento <li> à lista quando o formulário for enviado:

$(document).ready(function () {
    $('#todo-form').on('submit', function (event) {
        event.preventDefault();
        const todoText = $('#todo-input').val().trim();
        if (todoText) {
            $('#todo-list').append(`<li>${todoText}</li>`);
            $('#todo-input').val('');
        }
    });
});

//o efeito de linha em cima do texto dos itens da lista quando eles forem clicados.
$(document).ready(function () {
    // ...
    $('#todo-list').on('click', 'li', function () {
        $(this).toggleClass('completed');
    })
})
