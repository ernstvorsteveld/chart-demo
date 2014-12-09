function GoogleColumnChart(elementName, dataProvider, viewColors) {
    this.elementName = elementName;
    this.dataProvider = dataProvider;
    this.viewColors = viewColors;
    this.chartLegend = {};
}

GoogleColumnChart.prototype.withTitles = function (title, hAxisTitle) {
    this.chartLegend.title = title;
    this.chartLegend.hAxisTitle = hAxisTitle;
};

GoogleColumnChart.prototype.draw = function (period, dateFrom, dateTo) {
    var arrayToTableData = this.getChartData(period, dateFrom, dateTo);
    var data = google.visualization.arrayToDataTable(arrayToTableData);
    var options = {
        title: this.chartLegend.title,
        hAxis: {title: this.chartLegend.hAxisTitle, titleTextStyle: {color: 'red'}},
        colors: [this.viewColors.getColors().bar.even, this.viewColors.getColors().bar.odd]
    };
    var chart = new google.visualization.ColumnChart(document.getElementById(this.elementName));
    chart.draw(data, options);
};

GoogleColumnChart.prototype.getChartData = function (period, dateFrom, dateTo) {
    var rawData = this.dataProvider.getDataPerPeriod(period, dateFrom, dateTo);
    var columns = this.getColumnNames(this.chartLegend.hAxisTitle, rawData);
    var arrayToTableData = [columns];
    var data = this.getDataForGoogle(period, rawData);
    return arrayToTableData.concat(data);
};

GoogleColumnChart.prototype.getColumnNames = function (title, seriesData) {
    var columns = [title];
    var count = seriesData[0].series.length;
    for (var i = 0; i < count; i++) {
        columns.push(seriesData[0].series[i].name);
    }
    return columns;
};

GoogleColumnChart.prototype.getDataForGoogle = function (periodType, seriesData) {
    var series = [];
    var count = seriesData[0].series[0].data.length;
    for (var i = 0; i < count; i++) {
        var name = periodType.getDateAsString(seriesData[0].series[0].data[i][0], periodType.getDateFormat());
        var seriesObject = [
            name,
            seriesData[0].series[0].data[i][1],
            seriesData[0].series[1].data[i][1]];
        series.push(seriesObject);
    }
    return series;
};

