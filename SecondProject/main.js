
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
            $("#lbl2").html("Congrats you applied for 10 jobs today. It's fair!");
        }
        if(counter === 20){
            $("#lbl2").css('color','orange');
            $("#lbl2").html("Congrats you applied for 20 jobs today. Wow this is great!");
        }
        if(counter === 30){
            $("#lbl2").css('color','green');
            $("#lbl2").html("Congrats you applied for 30 jobs today! You are amazing!");
        }
    })
    
});