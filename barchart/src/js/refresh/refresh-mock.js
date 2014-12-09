function RefreshMock() {
}

RefreshMock.prototype.draw = function (period, dateFrom, dateTo) {
    alert("period type:" + period + ", dateFrom: " + dateFrom + ", dateTo: " + dateTo);
};