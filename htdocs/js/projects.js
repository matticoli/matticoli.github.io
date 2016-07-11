$('.category').click( function(event) {
    var id = $(this).attr("id");
    var proj = $('.projects');
    proj.fadeOut(250, function() {
        proj.load(id+".html", function () {
            proj.fadeIn(250);
        });
    });
    
});

$('.portfolio-box').click( function(event) {
    //TODO: Proj popups
});

$(document).ready( function() {
    $('.projects').load("fledging.html");
});