module App {
    class Calculator {
        firstNumber: number;
        secondNumber: number;

        Addition(): number {
            return Number(this.firstNumber) + Number(this.secondNumber);

        }
        Sunbstraction(): number {
            return Number(this.firstNumber) - Number(this.secondNumber);
        }

        Multiplication(): number {
            return Number(this.firstNumber) * Number(this.secondNumber);
        }

        Divide(): number {
            return Number(this.firstNumber) / Number(this.secondNumber);
        }
    }

    class CalculatorController {
        cal: Calculator;
        result: number;
        constructor() {
            this.cal = new Calculator();
        }

        getAdditionResult(): void {
            if (!isNaN(this.cal.firstNumber) && !isNaN(this.cal.secondNumber)) {
                this.result = this.cal.Addition();
            }

        }

        getSubResult(): void {
            if (!isNaN(this.cal.firstNumber) && !isNaN(this.cal.secondNumber)) {
                this.result = this.cal.Sunbstraction();
            }

        }

        getMultiResult(): void {
            if (!isNaN(this.cal.firstNumber) && !isNaN(this.cal.secondNumber)) {
                this.result = this.cal.Multiplication();
            }

        }

        getDivisionResult(): void {
            if (!isNaN(this.cal.firstNumber) && !isNaN(this.cal.secondNumber) && this.cal.secondNumber != 0) {
                this.result = this.cal.Divide();
            }

        }

    

    }
    var app = angular.module('app', []);
    angular.module('app').controller("CalculatorController", CalculatorController);
}