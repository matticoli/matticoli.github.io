$(document).ready( function() {
    $('.portfolio-item').each(function(i, elem) {
        $('#' + elem.id + '-info').popup();
        elem.addEventListener('click', function(event) {
            event.preventDefault();
            $('#' + elem.id + '-info').popup('show');
        });
    });

});
