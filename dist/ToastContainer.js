'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastContainer = undefined;

var _emotion = require('emotion');

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require('react-transition-group');

var _ToastElement = require('./ToastElement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var placements = {
  'top-left': { top: 0, left: 0 },
  'top-center': { top: 0, left: '50%', transform: 'translateX(-50%)' },
  'top-right': { top: 0, right: 0 },
  'bottom-left': { bottom: 0, left: 0 },
  'bottom-center': { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
  'bottom-right': { bottom: 0, right: 0 }
};

var ToastContainer = exports.ToastContainer = function ToastContainer(_ref) {
  var children = _ref.children,
      placement = _ref.placement;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _emotion.css)(_extends({
        boxSizing: 'border-box',
        maxHeight: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        padding: _ToastElement.gutter,
        pointerEvents: _react.Children.count(children) ? 'auto' : 'none',
        position: 'fixed',
        zIndex: 9999999
      }, placements[placement]), '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdENvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkkiLCJmaWxlIjoiLi4vc3JjL1RvYXN0Q29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5cbmltcG9ydCB0eXBlIHsgUGxhY2VtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBndXR0ZXIgfSBmcm9tICcuL1RvYXN0RWxlbWVudCc7XG5cbmNvbnN0IHBsYWNlbWVudHMgPSB7XG4gICd0b3AtbGVmdCc6IHsgdG9wOiAwLCBsZWZ0OiAwIH0sXG4gICd0b3AtY2VudGVyJzogeyB0b3A6IDAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9LFxuICAndG9wLXJpZ2h0JzogeyB0b3A6IDAsIHJpZ2h0OiAwIH0sXG4gICdib3R0b20tbGVmdCc6IHsgYm90dG9tOiAwLCBsZWZ0OiAwIH0sXG4gICdib3R0b20tY2VudGVyJzogeyBib3R0b206IDAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9LFxuICAnYm90dG9tLXJpZ2h0JzogeyBib3R0b206IDAsIHJpZ2h0OiAwIH0sXG59O1xuXG5leHBvcnQgdHlwZSBUb2FzdENvbnRhaW5lclByb3BzID0geyBjaGlsZHJlbjogTm9kZSwgcGxhY2VtZW50OiBQbGFjZW1lbnQgfTtcblxuZXhwb3J0IGNvbnN0IFRvYXN0Q29udGFpbmVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIHBsYWNlbWVudCxcbn06IFRvYXN0Q29udGFpbmVyUHJvcHMpID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIHBhZGRpbmc6IGd1dHRlcixcbiAgICAgIHBvaW50ZXJFdmVudHM6IENoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA/ICdhdXRvJyA6ICdub25lJyxcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgekluZGV4OiA5OTk5OTk5LFxuICAgICAgLi4ucGxhY2VtZW50c1twbGFjZW1lbnRdLFxuICAgIH19XG4gID5cbiAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+e2NoaWxkcmVufTwvVHJhbnNpdGlvbkdyb3VwPlxuICA8L2Rpdj5cbik7XG4iXX0= */')
    },
    _react2.default.createElement(
      _reactTransitionGroup.TransitionGroup,
      { component: null },
      children
    )
  );
};