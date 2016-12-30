'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoutesProvider = function (_React$Component) {
  _inherits(RoutesProvider, _React$Component);

  function RoutesProvider() {
    _classCallCheck(this, RoutesProvider);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  RoutesProvider.prototype.getChildContext = function getChildContext() {
    return {
      routes: this.props.routes
    };
  };

  RoutesProvider.prototype.render = function render() {
    return _react2.default.Children.only(this.props.children);
  };

  return RoutesProvider;
}(_react2.default.Component);

RoutesProvider.childContextTypes = {
  routes: _react.PropTypes.array
};
RoutesProvider.propTypes = {
  routes: _react.PropTypes.array,
  children: _react.PropTypes.node
};
exports.default = RoutesProvider;