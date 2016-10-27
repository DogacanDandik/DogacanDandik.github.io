/**
 * Created by dogacandandik on 10/27/16.
 */
$(document).ready(function () {
    $('#filterReal').on('click',function () {
        var alt_min = $('#alt_min').val();
        var alt_max = $('#alt_max').val();
        var home_min = $('#home_min').val();
        var home_max = $('#home_max').val();
        var tbody = $("#container table tbody");
        $("#MS1").hide();
    /*
        if(table.find('MS1').value < home_min)
            table.find('MS1').hide();
            */
    });

});
/*

if(alt_min.length === 0)alt_min = 0.1;
if(alt_max.length === 0)alt_max = 10;
if(home_min.length === 0)home_min = 0.1;
if(home_max.length === 0)home_max = 10;
if(columns[8] >= alt_min && columns[8] <= alt_max && columns[5] >= home_min && columns[5] <= home_max) {
*/