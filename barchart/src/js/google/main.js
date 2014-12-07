var googleColumnChart;

function initializeGoogle() {
    var dataProvider = new DataProvider();
    googleColumnChart = new GoogleColumnChart("google_chart_div", dataProvider);
    googleColumnChart.withTitles("Password resets", "weekly");

    google.load("visualization", "1", {packages: ["corechart"]});
    google.setOnLoadCallback(drawChart);
    var refreshHandler = new RefreshHandler(googleColumnChart);
}

function drawChart() {
    var periodType = new PeriodType("Daily");
    googleColumnChart.draw(periodType, null, null);
}

initializeGoogle();
