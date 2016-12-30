'use strict';

exports.__esModule = true;

var _matchPattern = require('react-router/matchPattern');

var _matchPattern2 = _interopRequireDefault(_matchPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mergePatterns = function mergePatterns(a, b) {
  return a[a.length - 1] === '/' && b[0] === '/' ? '' + a.slice(0, a.length - 1) + b : '' + a + b;
};

var matchRoutesToLocation = function matchRoutesToLocation(routes, location) {
  var matchedRoutes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var parentPattern = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

  routes.forEach(function (route) {
    var _route$exactly = route.exactly,
        exactly = _route$exactly === undefined ? false : _route$exactly;


    var nestedPattern = mergePatterns(parentPattern, route.pattern || '');

    var withoutTrailing = nestedPattern[nestedPattern.length - 1] === '/' ? nestedPattern.slice(0, nestedPattern.length - 1) : nestedPattern;

    var match = !route.pattern ? true : (0, _matchPattern2.default)(withoutTrailing, location, exactly) || (0, _matchPattern2.default)(withoutTrailing + '/', location, exactly);

    if (match) {
      matchedRoutes.push(route);

      if (match.params) {
        Object.keys(match.params).forEach(function (key) {
          return params[key] = match.params[key];
        });
      }

      if (route.routes) {
        matchRoutesToLocation(route.routes, location, matchedRoutes, params, nestedPattern);
      }
    }
  });

  return { matchedRoutes: matchedRoutes, params: params };
};

exports.default = matchRoutesToLocation;