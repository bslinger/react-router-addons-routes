'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Match = require('react-router/Match');

var _Match2 = _interopRequireDefault(_Match);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _React$PropTypes = _react2.default.PropTypes,
    array = _React$PropTypes.array,
    func = _React$PropTypes.func;


var MatchWithRoutes = function MatchWithRoutes(_ref) {
  var routes = _ref.routes,
      Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ['routes', 'component']);

  return _react2.default.createElement(_Match2.default, _extends({}, rest, { render: function render(matchProps) {
      return _react2.default.createElement(Component, _extends({}, matchProps, { routes: routes }));
    } }));
};

MatchWithRoutes.propTypes = {
  routes: array,
  component: func.isRequired
};

exports.default = MatchWithRoutes;