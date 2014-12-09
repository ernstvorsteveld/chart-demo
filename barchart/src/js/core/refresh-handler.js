function RefreshHandler() {
    this.div = {};
}

RefreshHandler.prototype.bind = function (element, elements) {
    $(elements.calculateButton.id).click(function () {
        alert("hiero!");
    });

    $(elements.periodPicker.id).click(function () {
        reCalculate(element, elements);
    });
};

RefreshHandler.prototype.initialize = function (div, elements) {
    this.div = div;
    // period selector
    var element = $(elements.periodPicker.id);
    element.val("Daily");

    // date pickers
    element = $(elements.datePickerFrom.id);
    var today = new Date();
    element.val(today.customFormat("#DD#-#YY#-#YYYY#"));
    element.datepicker({dateFormat: "dd-mm-yy"});

    element = $(elements.datePickerTo.id);
    today.setDate(today.getDate() + 7);
    element.val(today.customFormat("#DD#-#YY#-#YYYY#"));
    element.datepicker({defaultDate: +7, dateFormat: "dd-mm-yy"});

    this.bind(div, elements);
};

RefreshHandler.prototype.getElement = function() {
    return this.div;
};


var reCalculate = function (element, elements) {
    var selectElement = $(elements.periodPicker.id);
    var period = selectElement.val();
    var dateFrom = $(elements.datePickerFrom.id).val();
    var dateTo = $(elements.datePickerTo.id).val();
    element.draw(period, dateFrom, dateTo);
};


