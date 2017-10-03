var App;
(function (App) {
    var Calculator = (function () {
        function Calculator() {
        }
        Calculator.prototype.Addition = function () {
            return Number(this.firstNumber) + Number(this.secondNumber);
        };
        Calculator.prototype.Sunbstraction = function () {
            return Number(this.firstNumber) - Number(this.secondNumber);
        };
        Calculator.prototype.Multiplication = function () {
            return Number(this.firstNumber) * Number(this.secondNumber);
        };
        Calculator.prototype.Divide = function () {
            return Number(this.firstNumber) / Number(this.secondNumber);
        };
        return Calculator;
    }());
    var CalculatorController = (function () {
        function CalculatorController() {
            this.cal = new Calculator();
        }
        CalculatorController.prototype.getAdditionResult = function () {
            if (!isNaN(this.cal.firstNumber) && !isNaN(this.cal.secondNumber)) {
                this.result = this.cal.Addition();
            }
        };
        CalculatorController.prototype.getSubResult = function () {
            if (!isNaN(this.cal.firstNumber) && !isNaN(this.cal.secondNumber)) {
                this.result = this.cal.Sunbstraction();
            }
        };
        CalculatorController.prototype.getMultiResult = function () {
            if (!isNaN(this.cal.firstNumber) && !isNaN(this.cal.secondNumber)) {
                this.result = this.cal.Multiplication();
            }
        };
        CalculatorController.prototype.getDivisionResult = function () {
            if (!isNaN(this.cal.firstNumber) && !isNaN(this.cal.secondNumber) && this.cal.secondNumber != 0) {
                this.result = this.cal.Divide();
            }
        };
        return CalculatorController;
    }());
    var app = angular.module('app', []);
    angular.module('app').controller("CalculatorController", CalculatorController);
})(App || (App = {}));
//# sourceMappingURL=app.js.map