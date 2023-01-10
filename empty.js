System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0", "@bgroup/ui@0.0.21/icon"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, BeyondEmpty, __beyond_pkg, hmr;
  _export("BeyondEmpty", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_1 = _beyondJsKernel017Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_bgroupUi0021Icon) {
      dependency_3 = _bgroupUi0021Icon;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["swiper", "8.4.5"], ["@bgroup/ui", "0.0.21"], ["@bgroup/ui", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/ui@0.0.21/empty"
        },
        "type": "code",
        "name": "empty"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@bgroup/ui/icon', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/empty');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./empty
      ***********************/
      ims.set('./empty', {
        hash: 3543454297,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondEmpty = BeyondEmpty;
          var React = require("react");
          var _icon = require("@bgroup/ui/icon");
          /*bundle*/
          function BeyondEmpty(props) {
            const text = props.text ? props.text : 'No hay registros';
            const cls = `${props.className ?? ''} beyond-element-empty`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("div", {
              className: "content"
            }, props.icon && React.createElement(_icon.BeyondIcon, {
              icon: props.icon
            }), React.createElement("h3", null, text), props.additionalElement ? props.additionalElement : null, props.children ? props.children : null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./empty",
        "from": "BeyondEmpty",
        "name": "BeyondEmpty"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BeyondEmpty') && _export("BeyondEmpty", BeyondEmpty = require ? require('./empty').BeyondEmpty : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFRTztVQUFVLFNBQ1JBLFdBQVcsQ0FBQ0MsS0FBWTtZQUNoQyxNQUFNQyxJQUFJLEdBQVdELEtBQUssQ0FBQ0MsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQUksR0FBRyxrQkFBa0I7WUFDakUsTUFBTUMsR0FBRyxHQUFHLEdBQUdGLEtBQUssQ0FBQ0csU0FBUyxJQUFJLEVBQUUsdUJBQXVCO1lBQzNELE9BQ0NDO2NBQUtELFNBQVMsRUFBRUQ7WUFBRyxHQUNsQkU7Y0FBS0QsU0FBUyxFQUFDO1lBQVMsR0FDdEJILEtBQUssQ0FBQ0ssSUFBSSxJQUFJRCxvQkFBQ0UsZ0JBQVU7Y0FBQ0QsSUFBSSxFQUFFTCxLQUFLLENBQUNLO1lBQUksRUFBSSxFQUMvQ0QsZ0NBQUtILElBQUksQ0FBTSxFQUNkRCxLQUFLLENBQUNPLGlCQUFpQixHQUFHUCxLQUFLLENBQUNPLGlCQUFpQixHQUFHLElBQUksRUFDeERQLEtBQUssQ0FBQ1EsUUFBUSxHQUFHUixLQUFLLENBQUNRLFFBQVEsR0FBRyxJQUFJLENBQ2xDLENBQ0Q7VUFFUiIsIm5hbWVzIjpbIkJleW9uZEVtcHR5IiwicHJvcHMiLCJ0ZXh0IiwiY2xzIiwiY2xhc3NOYW1lIiwiUmVhY3QiLCJpY29uIiwiQmV5b25kSWNvbiIsImFkZGl0aW9uYWxFbGVtZW50IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvZW1wdHkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19