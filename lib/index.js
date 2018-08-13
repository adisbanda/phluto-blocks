'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./index.css');

var _components = require('./components');

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Playground = function Playground(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _components.Button,
      null,
      'Click Me'
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(Playground, null), document.getElementById('root'));
(0, _registerServiceWorker2.default)();