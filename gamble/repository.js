/**
 * Created by dogacandandik on 10/28/16.
 */
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




            if (columns[1] === "F") {
                html += "<tr>";

                html += "<td>" + columns[0] + "</td>";

                //html += "<td>" + columns[1] + "</td>";

                html += "<td>" + columns[2] + "</td>";

                html += "<td>" + columns[3] + "</td>";

                html += "<td>" + columns[4] + "</td>";

                html += "<td class='MS1'>" + columns[5] + "</td>";

                html += "<td>" + columns[6] + "</td>";

                html += "<td>" + columns[7] + "</td>";

                html += "<td class='alt'>" + columns[8] + "</td>";

                html += "<td>" + columns[9] + "</td>";

                var path = "http://istatistik.nesine.com/HeadToHead/Index.aspx?matchCode=" + columns[0];

                html += '<td>';
                html += '<a href="' + path + '">Check Teams</a>';
                html += '</td>';
                html += "</tr>";
            }



        });
        html += "</tbody>";
        html += "</table>";


        $('#container').empty().append(html);


    });
}
