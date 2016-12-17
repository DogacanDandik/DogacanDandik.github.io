var flag="5-11Dec";

$(document).ready(function () {
    $('#reset').on('click',function () {

        if(flag !== "")
            myFunk(flag);

      //  $('#container').empty();
    });

    $('#20-26').on('click', function () {

        $('#doc').html($('#20-26').html());
        flag = "20-26";
        myFunk(flag);
    });
    $('#27-3').on('click', function () {
        $('#doc').html($('#27-3').html());
        flag = "27-3";
        myFunk(flag);
    });
    $('#4-10').on('click', function () {
        $('#doc').html($('#4-10').html());
        flag = "4-10";
        myFunk(flag);
    });
    $('#11-17').on('click', function () {
        $('#doc').html($('#11-17').html());
        flag = "11-17";
        myFunk(flag);
    });
    $('#18-24').on('click', function () {
        $('#doc').html($('#18-24').html());
        flag = "18-24";
        myFunk(flag);
    });
    $('#25-31').on('click', function () {
        $('#doc').html($('#25-31').html());
        flag = "25-31";
        myFunk(flag);
    });
    $('#1-7').on('click', function () {
        $('#doc').html($('#1-7').html());
        flag = "1-7";
        myFunk(flag);
    });
    $('#8-13').on('click', function () {

        $('#doc').html($('#8-13').html());
        flag = "8-13";
        myFunk(flag);
    });
    $('#14-20Nov').on('click', function () {

        $('#doc').html($('#14-20Nov').html());
        flag = "14-20Nov";
        myFunk(flag);
    });
    $('#21-27Nov').on('click', function () {

        $('#doc').html($('#21-27Nov').html());
        flag = "21-27Nov";
        myFunk(flag);
    });
    $('#28-4Dec').on('click', function () {

        $('#doc').html($('#28-4Dec').html());
        flag = "28-4Dec";
        myFunk(flag);
    });
    $('#5-11Dec').on('click', function () {

        $('#doc').html($('#5-11Dec').html());
        flag = "5-11Dec";
        myFunk(flag);
    });
    $('#clear').on('click',function () {

        $('#alt_min').val('');
        $('#alt_max').val('');
        $('#ust_min').val('');
        $('#ust_max').val('');
        $('#home_min').val('');
        $('#home_max').val('');
        $('#tie_min').val('');
        $('#tie_max').val('');
        $('#away_min').val('');
        $('#away_max').val('');
        $('#ms_home').val('');
        $('#ms_away').val('');
    });

    var count=0;
    var counter0 = 0;
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;

    var beraber=0;
    $('#filter').on('click',function () {

        var alt_min = $('#alt_min').val();
        var alt_max = $('#alt_max').val();
        var ust_min = $('#ust_min').val();
        var ust_max = $('#ust_max').val();
        var home_min = $('#home_min').val();
        var home_max = $('#home_max').val();
        var tie_min = $('#tie_min').val();
        var tie_max = $('#tie_max').val();
        var away_min = $('#away_min').val();
        var away_max = $('#away_max').val();
        var ms_home = $('#ms_home').val();
        var ms_away = $('#ms_away').val();
        if (alt_min.length === 0 )alt_min = 0.1;
        if (alt_max.length === 0 )alt_max = 10;
        if (ust_min.length === 0 )ust_min = 0.1;
        if (ust_max.length === 0 )ust_max = 10;
        if (home_min.length === 0)home_min = 0.1;
        if (home_max.length === 0)home_max = 10;
        if (tie_min.length === 0)tie_min = 0.1;
        if (tie_max.length === 0)tie_max = 10;
        if (away_min.length === 0)away_min = 0.1;
        if (away_max.length === 0)away_max = 10;
        var tr = $("#container table tbody tr");
        tr.each(function() {
            $(this).show();
            var ms1 = $(this).find("td.MS1");
            var ms0 = $(this).find("td.MS0");
            var ms2 = $(this).find("td.MS2");
            var alt = $(this).find("td.alt");
            var ust = $(this).find("td.alt");
            var ms = $(this).find("td.MS");
            var str2 = ms.html();

            if(ms1.html() === "-" && alt.html() === "-")
                $(this).hide();
            if(ms1.html() !==  "")
                if(parseFloat(ms1.html()) < parseFloat(home_min) || parseFloat(ms1.html()) > parseFloat(home_max) || parseFloat(ms0.html()) < parseFloat(tie_min) || parseFloat(ms0.html()) > parseFloat(tie_max) || parseFloat(ms2.html()) < parseFloat(away_min) || parseFloat(ms2.html()) > parseFloat(away_max))
                    $(this).hide();
            if(alt.html() !== "")
                if(parseFloat(alt.html()) < parseFloat(alt_min) || parseFloat(alt.html()) > parseFloat(alt_max) || parseFloat(ust.html()) < parseFloat(ust_min) || parseFloat(ust.html()) > parseFloat(ust_max))
                    $(this).hide();
            if(str2 !== undefined && parseInt(ms_home) < 10 && parseInt(ms_home) >= 0 && parseInt(ms_away) < 10 && parseInt(ms_away) >= 0)
                if(parseInt(str2[0]) !== parseInt(ms_home) || parseInt(str2[2]) !== parseInt(ms_away))
                    $(this).hide();


        });
        var html = "";
        var array = [];
        for(var i=0;i<5;i++)array[i] = [];

        tr.each(function() {

            var ms = $(this).find("td.MS");

            if($(this).is(":visible")){
                var doda = $(this).find("td.MS1");

                if(ms.html() !== undefined){
                    count++;
                    var str = ms.html();

                    if (str[0] === str[2]){
                        switch(str[0]){
                            case "0":
                                counter0++;
                                array[0].push(parseFloat(doda.html()));
                                break;
                            case "1":
                                counter1++;
                                array[1].push(parseFloat(doda.html()));
                                break;
                            case "2":
                                counter2++;
                                array[2].push(parseFloat(doda.html()));
                                break;
                            case "3":
                                counter3++;
                                array[3].push(parseFloat(doda.html()));
                                break;
                            case "4":
                                array[4].push(parseFloat(doda.html()));
                                counter4++;
                                break;

                        }

                        html += doda.html();
                        html += "<br/>";
                        beraber++;
                    }
                }

            }

        });

        doit();
        $('#p1').html(count);
        $('#p2').html(beraber);
        $('#p3').html(Math.floor((beraber / count) * 100)).append("%");
        $('#00').html(counter0);
        $('#11').html(counter1);
        $('#22').html(counter2);
        $('#33').html(counter3);
        $('#44').html(counter4);


        count = 0;
        beraber = 0;
        counter0 = 0;
        counter1 = 0;
        counter2 = 0;
        counter3 = 0;
        counter4 = 0;
        var result = [];
        for(i = 0; i < 5;i++)
            result[i] = getResults(array[i]);

        $('#00top3').html(result[0][0] + "   " + result[0][1] + "   "  + result[0][2]);
        $('#11top3').html(result[1][0] + "   " + result[1][1] + "   "  + result[1][2]);
        $('#22top3').html(result[2][0] + "   " + result[2][1] + "   "  + result[2][2]);
        $('#33top3').html(result[3][0] + "   " + result[3][1] + "   "  + result[3][2]);
        $('#44top3').html(result[4][0] + "   " + result[4][1] + "   "  + result[4][2]);
    });
    $( "input[type=checkbox]" ).change( "click", doit );

});

function myFunk(docName) {

    if(docName === "5-11Dec"){

        var val = document.getElementById('5-11Dec').id;

        var date1 = ["5.12.2016 Tuesday", "144"];
        var date2 = ["6.12.2016 Wednesday", "401"];
        var date3 = ["7.12.2016 Thursday", "429"];
        var date4 = ["8.12.2016 Friday", "444"];
        var date5 = ["9.12.2016 Saturday", "101"];
        var date6 = ["10.12.2016 Sunday", "106"];
        var date7 = ["11.12.2016 Monday", "133"];

    }else
    if(docName === "28-4Dec"){

        var val = document.getElementById('28-4Dec').id;

        var date1 = ["28.11.2016 Tuesday", "155"];
        var date2 = ["29.11.2016 Wednesday", "401"];
        var date3 = ["30.11.2016 Thursday", "455"];
        var date4 = ["01.12.2016 Friday", "512"];
        var date5 = ["02.12.2016 Saturday", "102"];
        var date6 = ["03.12.2016 Sunday", "104"];
        var date7 = ["04.12.2016 Monday", "124"];

    }else
    if(docName === "21-27Nov"){

        var val = document.getElementById('21-27Nov').id;

        var date1 = ["21.11.2016 Tuesday", "156"];
        var date2 = ["22.11.2016 Wednesday", "400"];
        var date3 = ["23.11.2016 Thursday", "448"];
        var date4 = ["24.11.2016 Friday", "470"];
        var date5 = ["25.11.2016 Saturday", "101"];
        var date6 = ["26.11.2016 Sunday", "106"];
        var date7 = ["27.11.2016 Monday", "134"];

    }else
    if(docName === "14-20Nov"){

        var val = document.getElementById('14-20Nov').id;

        var date1 = ["14.11.2016 Tuesday", "2V2"];
        var date2 = ["15.11.2016 Wednesday", "257"];
        var date3 = ["16.11.2016 Thursday", "443"];
        var date4 = ["17.11.2016 Friday", "252"];
        var date5 = ["18.11.2016 Saturday", "101"];
        var date6 = ["19.11.2016 Sunday", "106"];
        var date7 = ["20.11.2016 Monday", "136"];

    }else
    if(docName === "8-13"){

        var val = document.getElementById('8-13').id;

        var date1 = ["08.11.2016 Tuesday", "401"];
        var date2 = ["09.11.2016 Wednesday", "426"];
        var date3 = ["10.11.2016 Thursday", "468"];
        var date4 = ["11.11.2016 Friday", "101"];
        var date5 = ["12.11.2016 Saturday", "104"];
        var date6 = ["13.11.2016 Sunday", "107"];
        var date7 = ["14.11.2016 Monday", ""];

    }else
    if(docName === "1-7"){

        var val = document.getElementById('1-7').id;

        var date1 = ["01.11.2016 Tuesday", "401"];
        var date2 = ["02.11.2016 Wednesday", "422"];
        var date3 = ["03.11.2016 Thursday", "451"];
        var date4 = ["04.11.2016 Friday", "101"];
        var date5 = ["05.11.2016 Saturday", "105"];
        var date6 = ["06.11.2016 Sunday", "132"];
        var date7 = ["07.11.2016 Monday", "509"];

    }
    else if (docName === "25-31") {

        var val = document.getElementById('25-31').id;
        var date1 = ["25.10.2016 Tuesday", "401"];
        var date2 = ["26.10.2016 Wednesday", "471"];
        var date3 = ["27.10.2016 Thursday", "569"];
        var date4 = ["28.10.2016 Friday", "596"];
        var date5 = ["29.10.2016 Saturday", "105"];
        var date6 = ["30.10.2016 Sunday", "130"];
        var date7 = ["31.10.2016 Monday", "144"];
    }else if(docName === "18-24"){

        var val = document.getElementById('18-24').id;

        var date1 = ["18.10.2016 Tuesday", "401"];
        var date2 = ["19.10.2016 Wednesday", "445"];
        var date3 = ["20.10.2016 Thursday", "467"];
        var date4 = ["21.10.2016 Friday", "101"];
        var date5 = ["22.10.2016 Saturday", "106"];
        var date6 = ["23.10.2016 Sunday", "135"];
        var date7 = ["24.10.2016 Monday", "158"];

    }else if(docName === "11-17"){
        var val = document.getElementById('11-17').id;
        var date1 = ["11.10.2016 Tuesday", "340"];
        var date2 = ["12.10.2016 Wednesday", "447"];
        var date3 = ["13.10.2016 Thursday", "460"];
        var date4 = ["14.10.2016 Friday", "101"];
        var date5 = ["15.10.2016 Saturday", "105"];
        var date6 = ["16.10.2016 Sunday", "134"];
        var date7 = ["17.10.2016 Monday", "155"];

    }else if(docName === "4-10"){
        var val = document.getElementById('4-10').id;
        var date1 = ["4.10.2016 Tuesday", "401"];
        var date2 = ["5.10.2016 Wednesday", "447"];
        var date3 = ["6.10.2016 Thursday", "461"];
        var date4 = ["7.10.2016 Friday", "101"];
        var date5 = ["8.10.2016 Saturday", "137"];
        var date6 = ["9.10.2016 Sunday", "154"];
        var date7 = ["10.10.2016 Monday", "322"];

    }else if(docName === "27-3"){
        var val = document.getElementById('27-3').id;
        var date1 = ["27.09.2016 Tuesday", "401"];
        var date2 = ["28.09.2016 Wednesday", "463"];
        var date3 = ["29.09.2016 Thursday", "490"];
        var date4 = ["30.09.2016 Friday", "101"];
        var date5 = ["1.10.2016 Saturday", "106"];
        var date6 = ["2.10.2016 Sunday", "133"];
        var date7 = ["3.10.2016 Monday", "538"];

    }else if(docName === "20-26"){
        var val = document.getElementById('20-26').id;
        var date1 = ["20.09.2016 Tuesday", "404"];
        var date2 = ["21.09.2016 Wednesday", "475"];
        var date3 = ["22.09.2016 Thursday", "607"];
        var date4 = ["23.09.2016 Friday", "101"];
        var date5 = ["24.09.2016 Saturday", "102"];
        var date6 = ["25.09.2016 Sunday", "113"];
        var date7 = ["26.09.2016 Monday", "118"];

    }else{
        var val = document.getElementById('1-6').id;
        var date1 = ["", ""];
        var date2 = ["", ""];
        var date3 = ["", ""];
        var date4 = ["", ""];
        var date5 = ["", ""];
        var date6 = ["", ""];
        var date7 = ["", ""];
    }

    var dates = [date1, date2, date3, date4, date5, date6, date7];

    getMatches('../CsvFiles/CsvFinished/' +  val + 'Finished.csv', dates);

}

function getMatches(doc, dates){
    $.get(doc, function (data) {

        var html = "<table class='table table-striped' >";
        html += "<thead>";
        html += "<tr>";

        html += "<th>Kod</th>";

        html += "<th>Saat</th>";

        html += "<th>Home</th>";

        html += "<th>Away</th>";

        html += "<th>1</th>";

        html += "<th>0</th>";

        html += "<th>2</th>";

        html += "<th>Alt</th>";

        html += "<th>Ust</th>";

        html += "<th>IY</th>";

        html += "<th>MS</th>";

        html += "<th> Link </th>";

        html += "</tr>";
        html += "</thead>";

        html += "<tbody>";
        var rows = data.split("\n");


        rows.forEach(function getvalues(ourrow) {

            var columns = ourrow.split(",");



            if (columns[0] === dates[0][1])
                html += "<tr><td class='date'>" + dates[0][0] + "<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[1][1])
                html += "<tr><td class='date'>" + dates[1][0] + "<td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[2][1])
                html += "<tr><td class='date'>" + dates[2][0] + "<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[3][1])
                html += "<tr><td class='date'>" + dates[3][0] + "<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[4][1])
                html += "<tr><td class='date'>" + dates[4][0] + "<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[5][1])
                html += "<tr><td class='date'>" + dates[5][0] + "<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[6][1])
                html += "<tr><td class='date'>" + dates[6][0] + "<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";

            html += "<tr>";

            html += "<td>" + columns[0] + "</td>";

            html += "<td>" + columns[1] + "</td>";

            html += "<td>" + columns[2] + "</td>";

            html += "<td>" + columns[3] + "</td>";

            html += "<td class='MS1'>" + columns[4] + "</td>";

            html += "<td class='MS0'>" + columns[5] + "</td>";

            html += "<td class='MS2'>" + columns[6] + "</td>";

            html += "<td class='alt'>" + columns[7] + "</td>";

            html += "<td class='ust'>" + columns[8] + "</td>";

            html += "<td>" + columns[9] + "</td>";

            html += "<td class='MS'>" + columns[10] + "</td>";


            var path = "http://istatistik.nesine.com/HeadToHead/Index.aspx?matchCode=" + columns[0];

            html += '<td>';
            html += '<a href="' + path + '">Check Teams</a>';
            html += '</td>';
            html += "</tr>";


        });
        html += "</tbody>";
        html += "</table>";


        $('#container').empty().append(html);
        doit()();

    });
}

function getResults(array) {
    var dict = {};
    for(var i = 0; i < array.length;i++){
        dict[array[i]] = 0;
    }
    for( i = 0; i < array.length;i++){
        dict[array[i]]++;
    }
    var sortable = [];

    for (var key in dict)
        sortable.push([key, dict[key]])
    sortable.sort( function(a, b) {
        return a[1] - b[1]
    });
    if(sortable[0] === undefined){
        sortable[0] = ["",0];
        sortable[1] = ["",0];
        sortable[2] = ["",0];
    }else if(sortable[1] === undefined){
        sortable[1] = ["",0];
        sortable[2] = ["",0];
    }else if(sortable[2] === undefined){
        sortable[2] = ["",0];
    }
    var results = [sortable[sortable.length-1][0], sortable[sortable.length-2][0], sortable[sortable.length-3][0]]
    return results;
}
function doit() {

    var tr = $("#container table tbody tr");

    tr.each(function(){

       // if($(this).find("td.alt").html() === "-" && $( "input:checked" ).length === 0)
         //  $(this).show();
         if($(this).find("td.alt").html() === "-" && $( "input:checked" ).length === 1)
            $(this).hide();

    });
}