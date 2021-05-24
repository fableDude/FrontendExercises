"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    /**
     *
     */
    function Exam(questions) {
        this.questions = questions;
    }
    Exam.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    Exam.prototype.print = function () {
        this.questions.forEach(function (question, index) {
            console.log("question" + (index + 1) + ":" + question.caption);
            question.answers.forEach(function (answer, index) {
                console.log(index + 1 + "." + answer);
            });
        });
    };
    Exam.prototype.grade = function (answers) {
        var _this = this;
        var grade = 0;
        answers.forEach(function (answer, index) {
            if (_this.questions[index].correctIndex == answer) {
                grade++;
            }
            grade = (100 / _this.questions.length) * grade;
        });
        return grade;
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map