


document.getElementById("btn").addEventListener('click',function(){
      

$("#btn").click(function(){

     
       });


});


$(document).ready(function() {
        $('.laptop').fadeOut(0);
        $('.laptop').fadeIn(1000);
        $('.surf').fadeOut(0);
        $('.surf').fadeIn(1000);

       


});


function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

var isElementInView = Utils.isElementInView($('.button'), false);



if (isElementInView) {
    console.log('in view');
} else {
    console.log('out of view');
}