var flag = "23-30Dec";
$(document).ready(function() {
    $( "input[type=checkbox]" ).change( "click", doit );
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
        if(ust[ust.length-1] === "\n")
            ust = ust.slice(0, -1);
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
        var html = "<tr>" + kod_td + home_td + away_td  + MS1td + MS0td + MS2td + alt_td  + ust_td + minus + "</tr>";
        for(var i=0; i < html.length; i++) {
            html = html.replace(".", ",");
        }
        $('#selectedMatches').append(html);
        download();

    });

    $(document).on('click', ".minus", function() {
        $(this).parent().remove();
        var id = '#' + $(this).parent().find('td:eq(0)').html();
        $(id).addClass('add');
        download();
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
    $('#11-15').on('click', function () {
        $('#dropdownMenu1').html("11-15");
        flag = "11-15";
        myFunk(flag);
    });
    $('#15-21').on('click', function () {
        $('#dropdownMenu1').html("15-21");
        flag = "15-21";
        myFunk(flag);
    });
    $('#15-21Nov').on('click', function () {
        $('#dropdownMenu1').html("15-21Nov");
        flag = "15-21Nov";
        myFunk(flag);
    });
    $('#18-22Nov').on('click', function () {
        $('#dropdownMenu1').html("18-22Nov");
        flag = "18-22Nov";
        myFunk(flag);
    });
    $('#22-28Nov').on('click', function () {
        $('#dropdownMenu1').html("22-28Nov");
        flag = "22-28Nov";
        myFunk(flag);
    });
    $('#25-28Nov').on('click', function () {
        $('#dropdownMenu1').html("25-28Nov");
        flag = "25-28Nov";
        myFunk(flag);
    });
    $('#29-5Nov').on('click', function () {
        $('#dropdownMenu1').html("29-5Nov");
        flag = "29-5Nov";
        myFunk(flag);
    });
    $('#2-5Nov').on('click', function () {
        $('#dropdownMenu1').html("2-5Nov");
        flag = "2-5Nov";
        myFunk(flag);
    });
    $('#6-12Dec').on('click', function () {
        $('#dropdownMenu1').html("6-12Dec");
        flag = "6-12Dec";
        myFunk(flag);
    });
    $('#13-19Dec').on('click', function () {
        $('#dropdownMenu1').html("13-19Dec");
        flag = "13-19Dec";
        myFunk(flag);
    });
    $('#16-19Dec').on('click', function () {
        $('#dropdownMenu1').html("16-19Dec");
        flag = "16-19Dec";
        myFunk(flag);
    });
    $('#23-30Dec').on('click', function () {
        $('#dropdownMenu1').html("23-30Dec");
        flag = "23-30Dec";
        myFunk(flag);
    });
    $('#clear').on('click',function () {

        $('#alt_min').val('');
        $('#alt_max').val('');
        $('#ust_min').val('');
        $('#ust_max').val('');
        $('#alt1_min').val('');
        $('#alt1_max').val('');
        $('#ust1_min').val('');
        $('#ust1_max').val('');
        $('#alt3_min').val('');
        $('#alt3_max').val('');
        $('#ust3_min').val('');
        $('#ust3_max').val('');
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
        var alt1_min = $('#alt1_min').val();
        var alt1_max = $('#alt1_max').val();
        var ust1_min = $('#ust1_min').val();
        var ust1_max = $('#ust1_max').val();
        var alt3_min = $('#alt3_min').val();
        var alt3_max = $('#alt3_max').val();
        var ust3_min = $('#ust3_min').val();
        var ust3_max = $('#ust3_max').val();
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
        if (alt1_min.length === 0 )alt1_min = 0.1;
        if (alt1_max.length === 0 )alt1_max = 100;
        if (ust1_min.length === 0 )ust1_min = 0.1;
        if (ust1_max.length === 0 )ust1_max = 100;
        if (alt3_min.length === 0 )alt3_min = 0.1;
        if (alt3_max.length === 0 )alt3_max = 100;
        if (ust3_min.length === 0 )ust3_min = 0.1;
        if (ust3_max.length === 0 )ust3_max = 100;
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
            var alt1 = $(this).find("td.alt1");
            var alt3 = $(this).find("td.alt3");
            var ust = $(this).find("td.ust");
            var ust1 = $(this).find("td.ust1");
            var ust3 = $(this).find("td.ust3");
            if(ms1.html() ===  "" &&  alt.html() === "")
                $(this).hide();
            if(ms1.html() !==  "")
                if(parseFloat(ms1.html()) < parseFloat(home_min) || parseFloat(ms1.html()) > parseFloat(home_max) || parseFloat(ms0.html()) < parseFloat(tie_min) || parseFloat(ms0.html()) > parseFloat(tie_max) || parseFloat(ms2.html()) < parseFloat(away_min) || parseFloat(ms2.html()) > parseFloat(away_max))
                    $(this).hide();
            if(alt.html() !== "")
                if(parseFloat(alt.html()) < parseFloat(alt_min) || parseFloat(alt.html()) > parseFloat(alt_max) || parseFloat(ust.html()) < parseFloat(ust_min) || parseFloat(ust.html()) > parseFloat(ust_max))
                    $(this).hide();
            if(alt1.html() !== "")
                if(parseFloat(alt1.html()) < parseFloat(alt1_min) || parseFloat(alt1.html()) > parseFloat(alt1_max) || parseFloat(ust1.html()) < parseFloat(ust1_min) || parseFloat(ust1.html()) > parseFloat(ust1_max))
                    $(this).hide();
            if(alt3.html() !== "")
                if(parseFloat(alt3.html()) < parseFloat(alt3_min) || parseFloat(alt3.html()) > parseFloat(alt3_max) || parseFloat(ust3.html()) < parseFloat(ust3_min) || parseFloat(ust3.html()) > parseFloat(ust3_max))
                    $(this).hide();

        });
        doit();

    });

});


function myFunk(docName) {
    var flag = false;
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

    }else if(docName === "11-15"){

        var val = document.getElementById('11-15').id;

        var date1 = ["15.11.2016 Tuesday", "257"];
        var date2 = ["09.11.2016 Wednesday", ""];
        var date3 = ["10.11.2016 Thursday", ""];
        var date4 = ["11.11.2016 Friday", "479"];
        var date5 = ["12.11.2016 Saturday", "130"];
        var date6 = ["13.11.2016 Sunday", "219"];
        var date7 = ["14.11.2016 Monday", "252"];

    }else if(docName === "15-21"){

        var val = document.getElementById('15-21').id;

        var date1 = ["15.11.2016 Tuesday", "257"];
        var date2 = ["16.11.2016 Wednesday", "443"];
        var date3 = ["17.11.2016 Thursday", "444"];
        var date4 = ["18.11.2016 Friday", "471"];
        var date5 = ["19.11.2016 Saturday", "106"];
        var date6 = ["20.11.2016 Sunday", "136"];
        var date7 = ["21.11.2016 Monday", "156"];

    }
    else if(docName === "15-21Nov"){

        var val = document.getElementById('15-21Nov').id;

        var date1 = ["15.11.2016 Tuesday", "257"];
        var date2 = ["16.11.2016 Wednesday", "443"];
        var date3 = ["17.11.2016 Thursday", "444"];
        var date4 = ["18.11.2016 Friday", "471"];
        var date5 = ["19.11.2016 Saturday", "106"];
        var date6 = ["20.11.2016 Sunday", "136"];
        var date7 = ["21.11.2016 Monday", "156"];
        flag= true;
    }
    else if(docName === "18-22Nov"){

        var val = document.getElementById('18-22Nov').id;

        var date1 = ["22.11.2016 Tuesday", "519"];
        var date2 = ["16.11.2016 Wednesday", ""];
        var date3 = ["17.11.2016 Thursday", ""];
        var date4 = ["18.11.2016 Friday", "161"];
        var date5 = ["19.11.2016 Saturday", "211"];
        var date6 = ["20.11.2016 Sunday", "388"];
        var date7 = ["21.11.2016 Monday", "495"];
        flag= true;
    }else if(docName === "22-28Nov"){

        var val = document.getElementById('22-28Nov').id;

        var date1 = ["22.11.2016 Tuesday", "400"];
        var date2 = ["23.11.2016 Wednesday", "448"];
        var date3 = ["24.11.2016 Thursday", "470"];
        var date4 = ["25.11.2016 Friday", "510"];
        var date5 = ["26.11.2016 Saturday", "106"];
        var date6 = ["27.11.2016 Sunday", "134"];
        var date7 = ["28.11.2016 Monday", "155"];
        flag= true;
    }
    else if(docName === "25-28Nov"){

        var val = document.getElementById('25-28Nov').id;

        var date1 = ["29.11.2016 Tuesday", "528"];
        var date2 = ["23.11.2016 Wednesday", ""];
        var date3 = ["24.11.2016 Thursday", ""];
        var date4 = ["25.11.2016 Friday", "160"];
        var date5 = ["26.11.2016 Saturday", "206"];
        var date6 = ["27.11.2016 Sunday", "363"];
        var date7 = ["28.11.2016 Monday", "488"];
        flag= true;
    }
    else if(docName === "29-5Nov"){

        var val = document.getElementById('29-5Nov').id;

        var date1 = ["29.11.2016 Tuesday", "404"];
        var date2 = ["30.11.2016 Wednesday", "455"];
        var date3 = ["1.12.2016 Thursday", "512"];
        var date4 = ["2.12.2016 Friday", "548"];
        var date5 = ["3.12.2016 Saturday", "104"];
        var date6 = ["4.12.2016 Sunday", "124"];
        var date7 = ["5.12.2016 Monday", "144"];
        flag= true;
    }
    else if(docName === "2-5Nov"){

        var val = document.getElementById('2-5Nov').id;

        var date1 = ["6.12.2016 Tuesday", "452"];
        var date2 = ["30.11.2016 Wednesday", ""];
        var date3 = ["1.12.2016 Thursday", "2"];
        var date4 = ["2.12.2016 Friday", "552"];
        var date5 = ["3.12.2016 Saturday", "188"];
        var date6 = ["4.12.2016 Sunday", "312"];
        var date7 = ["5.12.2016 Monday", "422"];
        flag= true;
    }
    else if(docName === "6-12Dec"){

        var val = document.getElementById('6-12Dec').id;

        var date1 = ["6.12.2016 Tuesday", "401"];
        var date2 = ["7.12.2016 Wednesday", "429"];
        var date3 = ["8.12.2016 Thursday", "444"];
        var date4 = ["9.12.2016 Friday", "479"];
        var date5 = ["10.12.2016 Saturday", "106"];
        var date6 = ["11.12.2016 Sunday", "133"];
        var date7 = ["12.12.2016 Monday", "156"];
        flag= true;
    }else if(docName === "13-19Dec"){

        var val = document.getElementById('13-19Dec').id;

        var date1 = ["13.12.2016 Tuesday", "401"];
        var date2 = ["14.12.2016 Wednesday", "432"];
        var date3 = ["15.12.2016 Thursday", "470"];
        var date4 = ["16.12.2016 Friday", "484"];
        var date5 = ["17.12.2016 Saturday", "489"];
        var date6 = ["18.12.2016 Sunday", "410"];
        var date7 = ["19.12.2016 Monday", "430"];
        flag= true;
    } else if(docName === "16-19Dec"){

        var val = document.getElementById('16-19Dec').id;

        var date1 = ["20.12.2016 Tuesday", "376"];
        var date2 = ["14.12.2016 Wednesday", ""];
        var date3 = ["15.12.2016 Thursday", ""];
        var date4 = ["16.12.2016 Friday", "101"];
        var date5 = ["17.12.2016 Saturday", "132"];
        var date6 = ["18.12.2016 Sunday", "272"];
        var date7 = ["19.12.2016 Monday", "356"];
        flag= true;
    }
    else if(docName === "23-30Dec"){

        var val = document.getElementById('23-30Dec').id;

        var date1 = ["28.12.2016 Tuesday", "249"];
        var date2 = ["29.12.2016 Wednesday", "263"];
        var date3 = ["23.12.2016 Thursday", "101"];
        var date4 = ["24.12.2016 Friday", "128"];
        var date5 = ["25.12.2016 Saturday", "163"];
        var date6 = ["26.12.2016 Sunday", "171"];
        var date7 = ["27.12.2016 Monday", "232"];
        flag= true;
    }
    var dates = [date1, date2, date3, date4, date5, date6, date7];

    if(flag)
        getMatchesNew('CsvFiles/CsvNew/' +  val + '.csv', dates)
    else
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
        doit();

    });
}
function getMatchesNew(doc, dates){
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
        html += "<th>1,5 Alt</th>";

        html += "<th>1,5 Ust</th>";

        html += "<th>2,5 Alt</th>";

        html += "<th>2,5 Ust</th>";

        html += "<th>3,5 Alt</th>";

        html += "<th>3,5 Ust</th>";

        html += "<th> Link </th>";

        html += "</tr>";
        html += "</thead>";

        html += "<tbody>";
        var rows = data.split("\n");


        rows.forEach(function getvalues(ourrow) {

            var columns = ourrow.split(",");



            if (columns[0] === dates[0][1])
                html += "<tr><td class='date'>" + dates[0][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[1][1])
                html += "<tr><td class='date'>" + dates[1][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[2][1])
                html += "<tr><td class='date'>" + dates[2][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[3][1])
                html += "<tr><td class='date'>" + dates[3][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[4][1])
                html += "<tr><td class='date'>" + dates[4][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[5][1])
                html += "<tr><td class='date'>" + dates[5][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if (columns[0] === dates[6][1])
                html += "<tr><td class='date'>" + dates[6][0] + "<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";




            html += "<tr>";

            html += "<td>" + columns[0] + "</td>";

            html += "<td>" + columns[1] + "</td>";

            html += "<td>" + columns[2] + "</td>";

            html += "<td>" + columns[3] + "</td>";

            html += "<td class='MS1'>" + columns[4] + "</td>";

            html += "<td class='MS0'>" + columns[5] + "</td>";

            html += "<td class='MS2'>" + columns[6] + "</td>";

            html += "<td class='alt1'>" + columns[7] + "</td>";

            html += "<td class='ust1'>" + columns[8] + "</td>";

            html += "<td class='alt'>" + columns[9] + "</td>";

            html += "<td class='ust'>" + columns[10] + "</td>";

            html += "<td class='alt3'>" + columns[11] + "</td>";

            html += "<td class='ust3'>" + columns[12] + "</td>";



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
        doit();

    });
}

function download() {
    $(".xls").hide();
    $(".downTable").tableExport({
        formats: ["xls"]
    });
}
function doit() {

    var tr = $("#container table tbody tr");

    tr.each(function(){

        //    if($(this).find("td.alt").html() === "-" && $( "input:checked" ).length === 0)
        //      $(this).show();
        if($(this).find("td.alt").html() === "" && $( "input:checked" ).length === 1)
            $(this).hide();

    });
}