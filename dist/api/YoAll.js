'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonBaseJs = require('./common/Base.js');

var _commonBaseJs2 = _interopRequireDefault(_commonBaseJs);

var _commonValidJs = require('./common/Valid.js');

var _commonValidJs2 = _interopRequireDefault(_commonValidJs);

var method = 'POST';
var REQUIRED_PARAMETERS = [];

var YoAll = (function (_Base) {
    _inherits(YoAll, _Base);

    function YoAll(yo) {
        _classCallCheck(this, YoAll);

        _get(Object.getPrototypeOf(YoAll.prototype), 'constructor', this).call(this, yo);
        this.endpoint = 'yoall';
    }

    _createClass(YoAll, [{
        key: 'post',
        value: function post(parameters) {
            _commonValidJs2['default'].parameters(parameters, REQUIRED_PARAMETERS, true);
            return _get(Object.getPrototypeOf(YoAll.prototype), 'request', this).call(this, method, this.endpoint, parameters);
        }
    }]);

    return YoAll;
})(_commonBaseJs2['default']);

exports['default'] = YoAll;
module.exports = exports['default'];