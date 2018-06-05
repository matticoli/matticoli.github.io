let slideout = () => {
    let tiles = $('.button').toArray());
    for (let key in tiles) {
        switch ($(tiles[key]).attr("data-button")) {
            case "linkedin":
                $($(tiles[key])).css("transform", "translate(-40vw)");
                break;
            case "github":
                $($(tiles[key])).css("transform", "translate(-80vw)");
                break;
            case "resume":
                $($(tiles[key])).css("transform", "translate(-100vw)");
                break;
            default:
                $($(tiles[key])).css("transform", "translate(100vw)");
                break;
        }
    }
};

let slidein = () => {
    let tiles = $('[data-button]').toArray();
    for (let key in tiles) {
        setTimeout
        $($(tiles[key])).css("transform", "");

    }
};


$(document).ready(function () {
    $('body').fadeOut(0);
    slideout();
    setTimeout(() => {
        $('body').fadeIn(200);
        slidein();
    }, 300);


    $('a').click( (event) => {
        event.preventDefault();
        const newLoc = event.currentTarget.href;
        slideout();
        setTimeout( ()=> {
            $('body').fadeOut(200);
            window.location = newLoc;
        }, 300);
    });
});


$('body').fadeOut(0);
