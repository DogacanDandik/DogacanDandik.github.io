/**
 * Created by dogacandandik on 10/27/16.
 */
$(document).ready(function () {
    var count=0;
    var beraber=0;


    $('#resultFilter').on('click',function () {

        var alt_min = $('#alt_min').val();
        var alt_max = $('#alt_max').val();
        var home_min = $('#home_min').val();
        var home_max = $('#home_max').val();
        if (alt_min.length === 0 )alt_min = 0.1;
        if (alt_max.length === 0 )alt_max = 10;
        if (home_min.length === 0)home_min = 0.1;
        if (home_max.length === 0)home_max = 10;


        $("#container table tbody tr").each(function() {
            $(this).show();
            var ms1 = $(this).find("td.MS1");
            var alt = $(this).find("td.alt");

            if(ms1.html() !== "")
                if(ms1.html() < home_min || ms1.html() > home_max || alt.html() !== "" && alt.html() < alt_min
                    || alt.html() > alt_max)
                    $(this).hide();
        });
        $("#container table tbody tr").each(function() {

            var ms = $(this).find("td.MS");
            if($(this).is(":visible")){
            if(ms.html() !== undefined){
                count++;
                var str = ms.html();
                if (str[0] === str[2])
                    beraber++;
            }
        }
        });
        $('#p1').html(count);
        $('#p2').html(beraber);
        $('#p3').html(Math.floor((beraber / count) * 100)).append("%");
        count = 0;
        beraber =0;

    });

});
