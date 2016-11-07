var flag = "1-6";
$(document).ready(function() {

    $("#down").on('click',function () {
       //window.open('data:application/csv,' + $('#selectedMatches').html());
      //  e.preventDefault();
        $(".downTable").tableExport({                   // (Boolean), display table footers (th/td elements) in the <tfoot>
            formats: ["xls"]
        });
    });

    $(document).on('click', ".add", function() {
        $(this).removeClass('add');

        var kod = $(this).parent().find('td:eq(0)').html();
        var saat = $(this).parent().find('td:eq(1)').html();
        var home = $(this).parent().find('td:eq(2)').html();
        var away = $(this).parent().find('td:eq(3)').html();
        var MS1 = $(this).parent().find('td:eq(4)').html();
        var MS0 = $(this).parent().find('td:eq(5)').html();
        var MS2 = $(this).parent().find('td:eq(6)').html();
        var alt = $(this).parent().find('td:eq(7)').html();
        var ust = $(this).parent().find('td:eq(8)').html();
        var link = $(this).parent().find('td:eq(9)').html();
        $(this).attr('id', kod);
        var kod_td= "<td>" + kod + "</td>";
        var home_td= "<td>" + home + "</td>";
        var away_td= "<td>" + away + "</td>";
        var MS1td= "<td class='hid'>" + MS1 + "</td>";
        var MS0td= "<td class='hid'>" + MS0 + "</td>";
        var MS2td= "<td class='hid'>" + MS2 + "</td>";
        var alt_td= "<td class='hid'>" + alt + "</td>";
        var ust_td= "<td class='hid'>" + ust + "</td>";


        var minus = "<td class='minus'>" + "<span class='glyphicon glyphicon-minus-sign button' aria-hidden='true'></span>" + "</td>";
        var html = "<tr>" + kod_td + home_td + away_td  + MS1td + MS0td + MS2td + alt_td  + minus + "</tr>";

        $('#selectedMatches').append(html);


    });

    $(document).on('click', ".minus", function() {
        $(this).parent().remove();
        var id = '#' + $(this).parent().find('td:eq(0)').html();
        $(id).addClass('add');
    });

    myFunk(flag);
    $('#25-31').on('click', function () {
        $('#dropdownMenu1').html("25-31");
        flag = "25-31";
        myFunk(flag);
    });
    $('#28-31').on('click', function () {
        $('#dropdownMenu1').html("28-31");
        flag = "28-31";
        myFunk(flag);
    });
    $('#1-6').on('click', function () {
        $('#dropdownMenu1').html("1-6");
        flag = "1-6";
        myFunk(flag);
    });
    $('#4-7').on('click', function () {
        $('#dropdownMenu1').html("4-7");
        flag = "4-7";
        myFunk(flag);
    });
    $('#8-13').on('click', function () {
        $('#dropdownMenu1').html("8-13");
        flag = "8-13";
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
    });

    $('#reset').on('click',function () {
        $('#dropdownMenu1').html("Select");
        if(flag !== 0)
            myFunk(flag);

        $('#container').empty();
    });
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

        if (alt_min.length === 0 )alt_min = 0.1;
        if (alt_max.length === 0 )alt_max = 100;
        if (ust_min.length === 0 )ust_min = 0.1;
        if (ust_max.length === 0 )ust_max = 100;
        if (home_min.length === 0)home_min = 0.1;
        if (home_max.length === 0)home_max = 100;
        if (tie_min.length === 0)tie_min = 0.1;
        if (tie_max.length === 0)tie_max = 100;
        if (away_min.length === 0)away_min = 0.1;
        if (away_max.length === 0)away_max = 100;


        $("#container table tbody tr").each(function() {
            $(this).show();
            var ms1 = $(this).find("td.MS1");
            var ms0 = $(this).find("td.MS0");
            var ms2 = $(this).find("td.MS2");
            var alt = $(this).find("td.alt");
            var ust = $(this).find("td.ust");
            if(ms1.html() ===  "" &&  alt.html() === "")
                $(this).hide();
            if(ms1.html() !==  "")
                if(parseFloat(ms1.html()) < parseFloat(home_min) || parseFloat(ms1.html()) >= parseFloat(home_max) || parseFloat(ms0.html()) < parseFloat(tie_min) || parseFloat(ms0.html()) >= parseFloat(tie_max) || parseFloat(ms2.html()) < parseFloat(away_min) || parseFloat(ms2.html()) >= parseFloat(away_max))
                    $(this).hide();
            if(alt.html() !== "")
                if(parseFloat(alt.html()) < parseFloat(alt_min) || parseFloat(alt.html()) >= parseFloat(alt_max) || parseFloat(ust.html()) < parseFloat(ust_min) || parseFloat(ust.html()) >= parseFloat(ust_max))
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
        var date4 = ["04.11.2016 Friday", "499"];
        var date5 = ["05.11.2016 Saturday", "105"];
        var date6 = ["06.11.2016 Sunday", "132"];
        var date7 = ["07.11.2016 Monday", ""];

    }else if(docName === "4-7"){

        var val = document.getElementById('4-7').id;

        var date1 = ["01.11.2016 Tuesday", ""];
        var date2 = ["02.11.2016 Wednesday", ""];
        var date3 = ["03.11.2016 Thursday", ""];
        var date4 = ["04.11.2016 Friday", "499"];
        var date5 = ["05.11.2016 Saturday", "209"];
        var date6 = ["06.11.2016 Sunday", "394"];
        var date7 = ["07.11.2016 Monday", "521"];

    }else if(docName === "8-13"){

        var val = document.getElementById('8-13').id;

        var date1 = ["08.11.2016 Tuesday", "527"];
        var date2 = ["09.11.2016 Wednesday", "426"];
        var date3 = ["10.11.2016 Thursday", "468"];
        var date4 = ["11.11.2016 Friday", "474"];
        var date5 = ["12.11.2016 Saturday", "104"];
        var date6 = ["13.11.2016 Sunday", "107"];
        var date7 = ["14.11.2016 Monday", ""];

    }

    var dates = [date1, date2, date3, date4, date5, date6, date7];

    getMatches('CsvFiles/CsvNow/' +  val + '.csv', dates);

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
                html += "<tr><td class='date'>" + dates[0][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[1][1])
                html += "<tr><td class='date'>" + dates[1][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[2][1])
                html += "<tr><td class='date'>" + dates[2][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[3][1])
                html += "<tr><td class='date'>" + dates[3][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[4][1])
                html += "<tr><td class='date'>" + dates[4][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[5][1])
                html += "<tr><td class='date'>" + dates[5][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[6][1])
                html += "<tr><td class='date'>" + dates[6][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";




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



                var path = "http://istatistik.nesine.com/HeadToHead/Index.aspx?matchCode=" + columns[0];

                html += "<td>";
                html += '<a href="' + path + '">Check Teams</a>';
                html += "</td>";

                html += "<td class='add plus'>" + "<span class='glyphicon glyphicon-plus-sign button clickable-row' aria-hidden='true'></span>" + "</td>";

                html += "</tr>";


        });
        html += "</tbody>";
        html += "</table>";


        $('#container').empty().append(html);


    });
}

