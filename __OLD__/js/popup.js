$(document).ready( function() {
    
    if (top!=self) {
        window.location = "https://matticoli.github.io";
    }
    
    $('.portfolio-item').each(function(i, elem) {
        $('#' + elem.id + '-info').popup();
        elem.addEventListener('click', function(event) {
            event.preventDefault();
            $('#' + elem.id + '-info').popup('show');
        });
    });
});

