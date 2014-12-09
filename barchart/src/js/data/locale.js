function LocaleFunctions() {
}

LocaleFunctions.prototype.getLanguage = function () {
    return (navigator.userLanguage || navigator.browserLanguage || navigator.language).substr(0, 2);
};