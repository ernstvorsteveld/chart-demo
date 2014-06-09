var chartManager = function() {
    
    return {
        loadData: function() {
            var data = {
                labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],
                datasets : [
                    {
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        data : [65,59,90,81,56,55,40,30, 34,56]
                    },
                    {
                        fillColor : "rgba(151,187,205,0.5)",
                        strokeColor : "rgba(151,187,205,1)",
                        pointColor : "rgba(151,187,205,1)",
                        pointStrokeColor : "#fff",
                        data : [28,48,40,19,96,27,100,20,21,11]
                    }
                ]
            }
            return data;
        },

        show: function(chartElement, data) {
            //Get the context of the canvas element we want to select
            var ctx = document.getElementById(chartElement).getContext("2d");
            var options = {
                scaleShowLabels : true
            };
            var myNewChart = new Chart(ctx).Bar(data, options);
        },
        
        doIt: function() {
            var data = manager.loadData();
            manager.show("myChart", data);
        }
        
    }
    
};

var manager = chartManager()
manager.doIt();
