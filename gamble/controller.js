var flag = "1-6";
$(document).ready(function() {
    myFunk(flag);
    $('#25-31').on('click', function () {
        flag = "25-31";
        myFunk(flag);
    });
    $('#28-31').on('click', function () {
        flag = "28-31";
        myFunk(flag);
    });
    $('#1-6').on('click', function () {
        flag = "1-6";
        myFunk(flag);
    });
    $('#clear').on('click',function () {

        $('#alt_min').val('');
        $('#alt_max').val('');
        $('#home_min').val('');
        $('#home_max').val('');
    });
    $('#reset').on('click',function () {
        if(flag !== 0)
            myFunk(flag);

        $('#container').empty();
    });
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

            if(ms1.html() !== "")
                if(ms1.html() < home_min || ms1.html() > home_max || alt.html() !== "" && alt.html() < alt_min
                    || alt.html() > alt_max)
                    $(this).hide();
        });

    });

});


function myFunk(docName) {
    if (docName === "25-31") {

        var val = document.getElementById('25-31').id;
        var date1 = ["25.10.2016 Tuesday", "401"];
        var date2 = ["26.10.2016 Wednesday", "471"];
        var date3 = ["27.10.2016 Thursday", "569"];
        var date4 = ["28.10.2016 Friday", "596"];
        var date5 = ["29.10.2016 Saturday", "105"];
        var date6 = ["30.10.2016 Sunday", "130"];
        var date7 = ["31.10.2016 Monday", "144"];
    }else if(docName === "28-31"){

        var val = document.getElementById('28-31').id;

        var date1 = ["25.10.2016 Tuesday", "1"];
        var date2 = ["26.10.2016 Wednesday", "1"];
        var date3 = ["27.10.2016 Thursday", "1"];
        var date4 = ["28.10.2016 Friday", "596"];
        var date5 = ["29.10.2016 Saturday", "199"];
        var date6 = ["30.10.2016 Sunday", "374"];
        var date7 = ["31.10.2016 Monday", "496"];

    } else if(docName === "1-6"){

        var val = document.getElementById('1-6').id;

        var date1 = ["01.11.2016 Tuesday", "401"];
        var date2 = ["02.11.2016 Wednesday", "422"];
        var date3 = ["03.11.2016 Thursday", "452"];
        var date4 = ["04.10.2016 Friday", "499"];
        var date5 = ["05.10.2016 Saturday", "105"];
        var date6 = ["06.10.2016 Sunday", "132"];
        var date7 = ["07.10.2016 Monday", ""];

    }

    var dates = [date1, date2, date3, date4, date5, date6, date7];

    getMatches('CsvFiles/' +  val + '.csv', dates);

}

function getMatches(doc, dates){
    $.get(doc, function (data) {

        var html = "<table class='table table-striped' >";
        html += "<thead>";
        html += "<tr>";

        html += "<th>Kod</th>";

        //html += "<th>" + columns[1] + "</th>";

        html += "<th>Saat</th>";

        html += "<th>Home</th>";

        html += "<th>Away</th>";

        html += "<th>1</th>";

        html += "<th>0</th>";

        html += "<th>2</th>";

        html += "<th>Alt</th>";

        html += "<th>Ust</th>";

        html += "<th> Link </th>";

        html += "</tr>";
        html += "</thead>";

        html += "<tbody>";
        var rows = data.split("\n");


        rows.forEach(function getvalues(ourrow) {

            var columns = ourrow.split(",");



            if (columns[0] === dates[0][1])
                html += "<tr><td class='date'>" + dates[0][0] + "<td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[1][1])
                html += "<tr><td class='date'>" + dates[1][0] + "<td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[2][1])
                html += "<tr><td class='date'>" + dates[2][0] + "<td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[3][1])
                html += "<tr><td class='date'>" + dates[3][0] + "<td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[4][1])
                html += "<tr><td class='date'>" + dates[4][0] + "<td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[5][1])
                html += "<tr><td class='date'>" + dates[5][0] + "<td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[6][1])
                html += "<tr><td class='date'>" + dates[6][0] + "<td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";




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
