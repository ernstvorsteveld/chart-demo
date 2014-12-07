function ViewColors() {
    this.colors = {
        bar: {
            odd: "#FFFF00",
            even: "#AAFF00"
        },
        alternateGridColor: "#FDFFD5"
    };
}

ViewColors.prototype.getBarColor = function (index) {
    if (index % 2) {
        return this.colors.bar.even;
    } else {
        return this.colors.bar.odd;
    }
};

ViewColors.prototype.getAlternateGridColor = function () {
    return this.colors.alternateGridColor;
};

