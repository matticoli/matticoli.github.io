$('.category').click( function(event) {
    var id = $(this).attr("id");
    var proj = $('.projects');
    proj.fadeOut(250, function() {
        proj.load(id+".html", function () {
            proj.fadeIn(250);
        });
    });
    
});

$(document).ready( function() {
    $('.projects').load("fledging.html").hide();
});