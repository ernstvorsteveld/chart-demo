google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2004',  1000,      400,     200],
      ['2005',  1170,      460,     100],
      ['2006',  660,       1120,    29],
      ['2007',  1030,      540,     1100]
    ]);

    var options = {
      title: 'Company Performance',
      vAxis: {title: 'Year',  titleTextStyle: {color: 'red'}}
    };

    var chart = new google.visualization.BarChart(document.getElementById('pie_2_chart_div'));
    chart.draw(data, options);
}