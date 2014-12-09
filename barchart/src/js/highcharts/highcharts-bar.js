function HighChartsBarChart(dataProvider, viewColors, container) {
    this.dataProvider = dataProvider;
    this.colors = viewColors;
    this.container = container;
}

HighChartsBarChart.prototype.draw = function (periodType, dateFrom, dateTo) {
    var data = this.dataProvider.getDataPerPeriod(periodType, null, null);
    new Highcharts.Chart(this.getChartObject(data, periodType, this.container));
};

HighChartsBarChart.prototype.getColors = function () {
    return this.colors;
};

HighChartsBarChart.prototype.getChartObject = function (data, period, container) {
    var chartObject = {
        chart: {
            type: 'column'
        },
        title: {
            text: this.getTitle(data)
        },
        subtitle: {
            text: this.getSubTitle(data)
        },
        xAxis: {
            categories: this.getSeriesCategories(data, period)
        },
        yAxis: {
            min: 0,
            title: {
                text: this.getYAxisTitle(data)
            },
            alternateGridColor: this.getColors().getAlternateGridColor()
        },
        credits: {
            enabled: false
        },
        chart: {
            renderTo: container,
            defaultSeriesType: 'column'
        },
        tooltip: this.getToolTip(data),
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: this.getSeries(data)
    };
    return chartObject;
};

HighChartsBarChart.prototype.getTitle = function (seriesData) {
    return "Password resets";
};

HighChartsBarChart.prototype.getSubTitle = function (seriesData) {
    return "";
};

HighChartsBarChart.prototype.getYAxisTitle = function (seriesData) {
    return "Number of attemtps";
};

HighChartsBarChart.prototype.getToolTip = function (seriesData) {
    var tooltip = {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    };
    return tooltip;
};

HighChartsBarChart.prototype.getSeries = function (seriesData) {
    var series = [];
    var count = seriesData[0].series.length;
    for (var i = 0; i < count; i++) {
        var seriesObject = {
            name: seriesData[0].series[i].name,
            data: this.getCleanData(seriesData[0].series[i].data),
            color: this.colors.getBarColor(i)
        };
        series.push(seriesObject);
    }
    return series;
};

HighChartsBarChart.prototype.getCleanData = function (data) {
    var cleanData = [];
    var count = data.length;
    for (var i = 0; i < count; i++) {
        cleanData.push(data[i][1]);
    }
    return cleanData;
};

HighChartsBarChart.prototype.getSeriesCategories = function (seriesData, periodType) {
    var categories = [];
    var count = seriesData[0].series[0].data.length;
    var format = periodType.getDateFormat();
    for (var i = 0; i < count; i++) {
        var dateAsString = periodType.getDateAsString(seriesData[0].series[0].data[i][0], periodType.getDateFormat());
        categories.push(dateAsString);
    }
    return categories;
};



