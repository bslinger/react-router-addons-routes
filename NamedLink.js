'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('react-router/Link');

var _Link2 = _interopRequireDefault(_Link);

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var findRouteByName = function findRouteByName(nameToFind, routes) {
  var foundRoute = null;
  routes.some(function (route) {
    if (route.name === nameToFind) foundRoute = route;else if (route.routes) foundRoute = findRouteByName(nameToFind, route.routes);
    return foundRoute;
  });
  return foundRoute;
};

var NamedLink = function (_React$Component) {
  _inherits(NamedLink, _React$Component);

  function NamedLink() {
    _classCallCheck(this, NamedLink);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  NamedLink.prototype.render = function render() {
    var _props = this.props,
        to = _props.to,
        params = _props.params,
        rest = _objectWithoutProperties(_props, ['to', 'params']);
    // TODO: handle location descriptors


    var route = findRouteByName(to, this.context.routes);
    var path = _pathToRegexp2.default.compile(route.pattern)(params);
    return _react2.default.createElement(_Link2.default, _extends({ to: path }, rest));
  };

  return NamedLink;
}(_react2.default.Component);

NamedLink.contextTypes = {
  routes: _react.PropTypes.array
};
NamedLink.propTypes = {
  to: _react.PropTypes.string,
  params: _react.PropTypes.object
};
NamedLink.defaultProps = {
  params: {}
};
exports.default = NamedLink;