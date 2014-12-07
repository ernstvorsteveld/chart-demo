function RefreshHandler(bar) {
    this.bar = bar;
    this.elements = {
        calculateButton: {
            id: "#calculate"
        },
        periodPicker: {
            id: "#period_picker"
        },
        datePickerFrom: {
            id: "#date_picker_from"
        },
        datePickerTo: {
            id: "#date_picker_to"
        }
    };

    this.bind(this.elements);
    this.initialize(this.elements);
}

RefreshHandler.prototype.bind = function (elements) {
    $(elements.calculateButton.id).click(function () {
        reCalculate(elements);
    });
};

RefreshHandler.prototype.initialize = function (elements) {
    // period selector
    var element = $(elements.periodPicker.id);
    element.val("Daily");

    // date pickers
    element = $(elements.datePickerFrom.id);
    //element[0].style.display = "inline";
    var today = new Date();
    element.val(today.customFormat("#DD#-#YY#-#YYYY#"));
    element.datepicker({dateFormat: "dd-mm-yy"});

    element = $(elements.datePickerTo.id);
    today.setDate(today.getDate() + 7);
    element.val(today.customFormat("#DD#-#YY#-#YYYY#"));
    element.datepicker({defaultDate: +7, dateFormat: "dd-mm-yy"});
};

var reCalculate = function (elements) {
    var selectElement = $(elements.periodPicker.id);
    var period = selectElement.val();
    var dateFrom = $(elements.datePickerFrom.id).val();
    var dateTo = $(elements.datePickerTo.id).val();
    this.bar.draw(period, dateFrom, dateTo);
};


