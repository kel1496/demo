$(document).ready(function () {
    $('.collapsible__heading').on('click', function(event){
        event.preventDefault();
        // create accordion variables
        var accordion = $(this);
        var accordionContent = accordion.next('.collapsible__content');

        // toggle accordion link open class
        accordion.toggleClass("opened");
        // toggle accordion content
        accordionContent.slideToggle(250);

    });
});