function initialize() {
    var viewColors = new ViewColors();
    var dataProvider = new DataProvider();
    var periodType = new PeriodType("Daily");
    var highChartsBarChart = new HighChartsBarChart(dataProvider, viewColors);
    highChartsBarChart.draw(periodType, null, null);
    var refreshHandler = new RefreshHandler(highChartsBarChart);
}

initialize();
