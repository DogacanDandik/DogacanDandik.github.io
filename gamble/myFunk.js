/**
 * Created by dogacandandik on 10/28/16.
 */
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

    }

    var dates = [date1, date2, date3, date4, date5, date6, date7];

    getMatches('CsvFiles/' +  val + '.csv', dates);

}

