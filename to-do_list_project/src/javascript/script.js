$(document).ready(function () {
    $('.edit-buttom').on('click', function() {
        var $task = $(this).closest('.task');
        $task.find('.progress').addClass('hidden');
        $task.find('.task-description').addClass('hidden');
        $task.find('.task-actions').addClass('hidden');
        $task.find('.edit-task').removeClass('hidden');
    });

    $('.progress').on('click', function() {
        if ($(this).is(':checked')) {
            $(this).addClass('done');
        } else {
            $(this).removeClass('done');
        }
    });

    $('.progress').on('change', function() {
        const id = $(this).data('task-id');
        const completed = $(this).is(':checked') ? 'true' : 'false';
        $.ajax({
            url: '../../actions/edit-progress.php',
            method: 'POST',
            data: {id: id, completed: completed},
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    
                } else {
                    alert('Erro ao editar a tarefa');
                }
            },
            error: function() {
                alert('Ocorreu um erro');
            }
        });
    })
});