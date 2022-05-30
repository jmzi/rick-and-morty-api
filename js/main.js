$.getJSON('https://rickandmortyapi.com/api/character/', function(data) {

       
        var text = "";
        
        for (let i = 0; i < data.results.length; i++) {

            var typ = data.results[i].type;

            if(typ == "") {
                typ = "Unknown";
            }

            text += "<div class='item'><img src='" + data.results[i].image + "'/>" +
                "<h3>" + data.results[i].id + ".) " + data.results[i].name + "</h3> " +
                "Status: " + data.results[i].status + "<br>" + 
                "Gender: " + data.results[i].gender + "<br>" +
                "Species: " + data.results[i].species + "<br>" +
                "Origin: " + data.results[i].origin.name + "<br>" +
                "Location: " + data.results[i].location.name + "<br>" +
                "Type: " + typ + "</div>";
        }

        $(".mycontainer").html(text);
    });