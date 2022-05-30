$.getJSON('https://rickandmortyapi.com/api/character/', function(data) {

        var text = "";
        
        for (let i = 0; i < data.results.length; i++) {
            text += "<div class='item'><img src='" + data.results[i].image + "'/>" +
                "<h3>" + data.results[i].id + ".) " + data.results[i].name + "</h3> " +
                "Status: " + data.results[i].status + " <br>" + 
                " Gender: " + data.results[i].gender + "</div>";
        }

        $(".mycontainer").html(text);
    });