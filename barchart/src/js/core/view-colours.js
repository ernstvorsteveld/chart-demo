function ViewColors() {
    this.colors = {
        bar: {
            odd: "#4571ab",
            even: "#A84841"
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

ViewColors.prototype.getColors = function() {
    return this.colors;
};

ViewColors.prototype.getAlternateGridColor = function () {
    return this.colors.alternateGridColor;
};

