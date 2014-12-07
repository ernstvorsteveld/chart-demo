function DataProvider() {
}

DataProvider.prototype.getDataPerPeriod = function (period, dateFrom, dateTo) {
    if (period.isOfType(period.getPeriodTypes()[0])) {
        return [{
            "maxValue": 7,
            "series": [
                {
                    "data": [[1417132800000, 1], [1417219200000, 2], [1417305600000, 3], [1417392000000, 4], [1417478400000, 5], [1417564800000, 6], [1417651200000, 7]],
                    "name": "failed"
                },
                {
                    "data": [[1417132800000, 7], [1417219200000, 6], [1417305600000, 5], [1417392000000, 4], [1417478400000, 3], [1417564800000, 2], [1417651200000, 1]],
                    "name": "success"
                }
            ]
        }]
    } else if (period.isOfType(period.getPeriodTypes()[1])) {
        return [{
            "series": [
                {
                    "data": [[1406851200000, 0], [1409529600000, 0], [1412121600000, 9], [1414800000000, 2], [1417392000000, 0]],
                    "name": "failed"
                },
                {
                    "data": [[1406851200000, 0], [1409529600000, 2], [1412121600000, 10], [1414800000000, 4], [1417392000000, 1]],
                    "name": "success"
                }
            ],
            "maxValue": 10
        }]
    } else {
        alert("Not implemented yet!");
    }
};

function PeriodType(periodType) {
    this.periodTypes = ["Daily", "Monthly"];
    this.period = periodType;
}

PeriodType.prototype.isOfType = function (typeToBe) {
    return this.period === typeToBe;
};

PeriodType.prototype.getPeriodTypes = function () {
    return this.periodTypes;
};

PeriodType.prototype.getDateFormat = function () {
    if (this.period === this.getPeriodTypes()[0]) {
        return "#D#/#M#";
    } else {
        return "#MMM#";
    }
};

PeriodType.prototype.getDateAsString = function (dateAsLong, format) {
    var date = new Date(dateAsLong);
    return date.customFormat(format);
};



