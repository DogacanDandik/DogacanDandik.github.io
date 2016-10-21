/**
 * Created by dogacandandik on 10/21/16.
 */
$.get('iddia.csv', function(data) {



// start the table

    var html = "<table class='table table-striped' >";



// split into lines

    var rows = data.split("\n");


// parse lines

    rows.forEach( function getvalues(ourrow) {



// split line into columns

        var columns = ourrow.split(",");
        if(columns[0] === "G"){
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

            html += "<th> Link </th>";

            html += "</thead>";
            html += "</tr>";
            html += "<tbody>";

        }else {
            html += "<tr>";


            html += "<td>" + columns[0] + "</td>";

            html += "<td>" + columns[1] + "</td>";

            html += "<td>" + columns[2] + "</td>";

            html += "<td>" + columns[3] + "</td>";

            html += "<td>" + columns[4] + "</td>";

            html += "<td>" + columns[5] + "</td>";

            html += "<td>" + columns[6] + "</td>";

            html += "<td>" + columns[7] + "</td>";

            //onclick does not work???
            html += "<td><a type='button' href='http://istatistik.nesine.com/HeadToHead/Index.aspx?matchCode=' onclick='location.href= this.href + columns[0];'>Tikla</a></td>";
        }
// close row

            html += "</tr>";


    })

// close table

    html += "</table>";



// insert into div

    $('#container').append(html);


});

