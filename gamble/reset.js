$(document).ready(function() {
    $('#reset').on('click',function () {
        reset();
    });
});

function reset(){
    if(flag !== 0)
        myFunk(flag);

    $('#container').empty();

}