function ReportSpecification(data, localeFunctions) {
    this.data = data;
    this.localeFunctions = localeFunctions;
}

ReportSpecification.prototype.getReportTitle = function () {
    var language = this.localeFunctions.getLanguage();
    return this.data.report.title.languageTexts[language];
};

