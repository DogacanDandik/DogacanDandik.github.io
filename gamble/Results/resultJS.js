
$.get('25-31Finished.csv', function(data) {


    var html = "<table class='table table-striped' >";
    var counter = 0;
    var beraber = 0;

    var rows = data.split("\n");

    rows.forEach( function getvalues(ourrow) {



        var columns = ourrow.split(",");
        if(columns[0] === "Kod"){
            html += "<thead>";
            html += "<tr>";
            html += "<th>" + columns[0] + "</th>";

            html += "<th>" + columns[1] + "</th>";

            html += "<th>" + columns[2] + "</th>";

            html += "<th>" + columns[3] + "</th>";

            html += "<th>" + columns[4] + "</th>";

            html += "<th>" + columns[5] + "</th>";

            html += "<th>" + columns[6] + "</th>";

            html += "<th>" + columns[7] + "</th>";

            html += "<th>" + columns[8] + "</th>";

            html += "<th>" + columns[9] + "</th>";

            html += "<th>" + columns[10] + "</th>";

            html += "<th> Link </th>";

            html += "</thead>";
            html += "</tr>";
            html += "<tbody>";

        }else {
            if(columns[0] === "401")
                html += "<tr><td class='date'>25.10.2016 Tuesday<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if(columns[0] === "471")
                html += "<tr><td class='date'>26.10.2016 Wednesday<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if(columns[0] === "569")
                html += "<tr><td class='date'>27.10.2016 Thursday<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if(columns[0] === "596")
                html += "<tr><td class='date'>28.10.2016 Friday<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if(columns[0] === "105")
                html += "<tr><td class='date'>29.10.2016 Saturday<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if(columns[0] === "130")
                html += "<tr><td class='date'>30.10.2016 Sunday<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
            if(columns[0] === "144")
                html += "<tr><td class='date'>31.10.2016 Monday<td/><td><td/><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";

            html += "<tr>";



                html += "<td>" + columns[0] + "</td>";

                html += "<td>" + columns[1] + "</td>";

                html += "<td>" + columns[2] + "</td>";

                html += "<td>" + columns[3].trim() + "</td>";

                html += "<td class='MS1'>" + columns[4].trim() + "</td>";

                html += "<td>" + columns[5].trim() + "</td>";

                html += "<td>" + columns[6].trim() + "</td>";

                html += "<td class='alt'>" + columns[7].trim() + "</td>";

                html += "<td>" + columns[8].trim() + "</td>";

                html += "<td>" + columns[9].trim() + "</td>";

                html += "<td class='MS'>" + columns[10].trim() + "</td>";

                if(columns[10][0] === columns[10][2])
                    beraber++;
                var path = "http://istatistik.nesine.com/HeadToHead/Index.aspx?matchCode=" + columns[0];

                html += '<td>';
                html += '<a href="' + path + '">Check Teams</a>';
                html += '</td>';
                counter++;

        }
// close row

        html += "</tr>";


    });

// close table

    html += "</table>";



// insert into div

    $('#container').empty().append(html);

});


