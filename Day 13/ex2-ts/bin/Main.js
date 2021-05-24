"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("start");
var exam_1 = require("./exam");
var question_1 = require("./question");
var q1 = new question_1.Question("1+1", ["2", "1", "3", "4"], 0);
var q2 = new question_1.Question("5+5", ["2", "1", "10", "4"], 2);
var q3 = new question_1.Question("10/2", ["2", "5", "3", "4"], 1);
var q4 = new question_1.Question("5*3", ["2", "1", "3", "15"], 3);
var exam1 = new exam_1.Exam([q1, q2, q3, q4]);
console.log("your grade is:" + exam1.grade([0, 2, 1, 3]));
console.log("your grade is:" + exam1.grade([1, 2, 1, 3]));
console.log("your grade is:" + exam1.grade([2, 1, 1, 0]));
//# sourceMappingURL=Main.js.map