var flag="25-31";

$(document).ready(function () {
    $('#reset').on('click',function () {
        if(flag !== "")
            myFunk(flag);
        $('#container').empty();
    });
    $('#20-26').on('click', function () {
        $('#ddbtn').html("20-26");
        flag = "20-26";
        myFunk(flag);
    });
    $('#27-3').on('click', function () {
        $('#ddbtn').html("27-3");
        flag = "27-3";
        myFunk(flag);
    });
    $('#4-10').on('click', function () {
        $('#ddbtn').html("4-10");
        flag = "4-10";
        myFunk(flag);
    });
    $('#11-17').on('click', function () {
        $('#ddbtn').html("11-17");
        flag = "11-17";
        myFunk(flag);
    });
    $('#18-24').on('click', function () {
        $('#ddbtn').html("18-24");
        flag = "18-24";
        myFunk(flag);
    });
    $('#25-31').on('click', function () {
        $('#ddbtn').html("25-31");
        flag = "25-31";
        myFunk(flag);
    });
    $('#clear').on('click',function () {

        $('#alt_min').val('');
        $('#alt_max').val('');
        $('#home_min').val('');
        $('#home_max').val('');
    });

    var count=0;
    var beraber=0;
    $('#filter').on('click',function () {

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

            if(ms1.html() === "-" && alt.html() === "-")
                $(this).hide();
            if(ms1.html() !== "-")
                if(ms1.html() < home_min || ms1.html() > home_max)
                    $(this).hide();
            if(alt.html() !== "-")
                if(alt.html() < alt_min || alt.html() > alt_max)
                    $(this).hide();
        });
        var html = "";
        var max="";
        $("#container table tbody tr").each(function() {

            var ms = $(this).find("td.MS");

            if($(this).is(":visible")){
                var doda = $(this).find("td.MS1");


                if(ms.html() !== undefined){
                    count++;
                    var str = ms.html();

                    if (str[0] === str[2]){
                        if(max < doda.html())
                            max = doda.html();

                        html += doda.html();
                        html += "<br/>";
                        beraber++;
                    }
                }

            }

        });

        $('#p4').empty().append(html);
        $('#p1').html(count);
        $('#p2').html(beraber);
        $('#p3').html(Math.floor((beraber / count) * 100)).append("%");

        count = 0;
        beraber = 0;

    });
});

function myFunk(docName) {
    if(docName === "1-6"){

        var val = document.getElementById('1-6').id;

        var date1 = ["01.11.2016 Tuesday", "401"];
        var date2 = ["02.11.2016 Wednesday", "422"];
        var date3 = ["03.11.2016 Thursday", "452"];
        var date4 = ["04.10.2016 Friday", "499"];
        var date5 = ["05.10.2016 Saturday", "105"];
        var date6 = ["06.10.2016 Sunday", "132"];
        var date7 = ["07.10.2016 Monday", ""];

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

            html += "<td>" + columns[5] + "</td>";

            html += "<td>" + columns[6] + "</td>";

            html += "<td class='alt'>" + columns[7] + "</td>";

            html += "<td>" + columns[8] + "</td>";

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


    });
}