// Code goes here

window.onload = function() {
    var socket = io("/admin");
    var season = [];
    var chart;
    var chartContainer = document.querySelector('#chartContainer');

    var initializeChart = function() {
        if (chartContainer) {
            chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                theme: "theme2",
                title: {
                    text: "Online polling"
                },
                data: [{
                    type: "column",
                    dataPoints: season
                }]
            });
            chart.render();
        }
    }


    function drawChart(data) {
        if (chart) {
            chart.destroy();
        }
        season = [];
        data = JSON.parse(data);
        for (var item in data) {
            console.log(data[item]);
            season.push({ "label": data[item].option_text, "y": data[item].vote });
        }
        console.log(season);
        initializeChart();
    }


    getAjax('http://localhost:3000/getPollResult/1', function(data) {
        drawChart(data);
    }, function(err) {
        alert('Error in reterving data');
    });


    socket.on("pollingData", function(data) {
        drawChart(data);
    });

    /*socket.emit('getData', 1);*/


}