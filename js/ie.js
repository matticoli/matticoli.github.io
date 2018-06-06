console.log(navigator.useragent);
if (navigator.userAgent.match(/msie|trident/i)) {
    alert('Internet Explorer lacks basic functionality of modern browsers that is required to load this page.' +
    ' \n\nPlease use a real web browser such as Chrome, Firefox, Microsoft Edge, Opera, etc.', 'Whoopsie');
    window.location.href = "../"
}