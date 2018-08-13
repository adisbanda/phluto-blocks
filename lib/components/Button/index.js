'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var children = _ref.children,
      kind = _ref.kind,
      className = _ref.className,
      tag = _ref.tag,
      href = _ref.href,
      type = _ref.type,
      outline = _ref.outline;

  switch (tag) {
    case 'a':
      return _react2.default.createElement(
        'a',
        { className: getButtonClassName(kind, outline) + ' ' + className, href: href, role: 'button' },
        children
      );
    default:
      return _react2.default.createElement(
        'button',
        { className: getButtonClassName(kind, outline) + ' ' + className, type: type },
        children
      );
  }
};

function getButtonClassName(className, outline) {
  var clazz = void 0;
  switch (className) {
    case 'primary':
      clazz = 'btn btn-primary';
      break;
    case 'secondary':
      clazz = 'btn btn-secondary';
      break;
    case 'success':
      clazz = 'btn btn-success';
      break;
    case 'danger':
      clazz = 'btn btn-danger';
      break;
    case 'warning':
      clazz = 'btn btn-warning';
      break;
    case 'info':
      clazz = 'btn btn-info';
      break;
    case 'dark':
      clazz = 'btn btn-dark';
      break;
    default:
      clazz = 'btn btn-light';
      break;
  }

  return outline ? clazz.replace('btn-', 'btn-outline-') : clazz;
}

exports.default = Button;