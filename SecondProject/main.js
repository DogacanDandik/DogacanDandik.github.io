
var counter = 0;
$(document).ready(function () {
    $(".counter").hide();
    var selector = $("#txt");
    selector.on('input',function () {
        if (selector.val() === "12345") {
            selector.hide();
            $(".counter").show();
        }
    });


    $("#btn").click(function () {
        counter++;
        $("#lbl").html(counter);
        if(counter === 10){
            $("#lbl2").html("Congrats you applied for 10 jobs today");
        }
    })
    
});