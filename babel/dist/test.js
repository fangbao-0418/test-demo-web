"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sum = function sum(a, b) {
	return a + b;
};

var A = function () {
	function A(name, age) {
		_classCallCheck(this, A);

		this.name = name;
		this.age = age;
	}

	_createClass(A, [{
		key: "sayName",
		value: function (_sayName) {
			function sayName() {
				return _sayName.apply(this, arguments);
			}

			sayName.toString = function () {
				return _sayName.toString();
			};

			return sayName;
		}(function () {
			console.log(sayName);
		})
	}]);

	return A;
}();

console.log(sum(1, 2));