System.register(["@beyond-js/kernel@0.1.2/bundle", "@beyond-js/kernel@0.1.2/styles", "react@18.2.0", "@beyond/ui@1.0.0/icon"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, BeyondEmpty, __beyond_pkg, hmr;
  _export("BeyondEmpty", void 0);
  return {
    setters: [function (_beyondJsKernel012Bundle) {
      dependency_0 = _beyondJsKernel012Bundle;
    }, function (_beyondJsKernel012Styles) {
      dependency_1 = _beyondJsKernel012Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_beyondUi100Icon) {
      dependency_3 = _beyondUi100Icon;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.20.3"], ["@beyond-js/widgets", "0.1.1"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["@beyond/ui", "1.0.0"], ["@beyond/ui", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/ui@1.0.0/empty"
        },
        "type": "code",
        "name": "empty"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond/ui/icon', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/empty');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./empty
      ***********************/
      ims.set('./empty', {
        hash: 1029884092,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BeyondEmpty = BeyondEmpty;
          var React = require("react");
          var _icon = require("@beyond/ui/icon");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFRTztVQUFVLFNBQ1JBLFdBQVcsQ0FBQ0MsS0FBWTtZQUNoQyxNQUFNQyxJQUFJLEdBQVdELEtBQUssQ0FBQ0MsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQUksR0FBRyxrQkFBa0I7WUFDakUsTUFBTUMsR0FBRyxHQUFHLEdBQUdGLEtBQUssQ0FBQ0csU0FBUyxJQUFJLEVBQUUsdUJBQXVCO1lBQzNELE9BQ0NDO2NBQUtELFNBQVMsRUFBRUQ7WUFBRyxHQUNsQkU7Y0FBS0QsU0FBUyxFQUFDO1lBQVMsR0FDdEJILEtBQUssQ0FBQ0ssSUFBSSxJQUFJRCxvQkFBQ0UsZ0JBQVU7Y0FBQ0QsSUFBSSxFQUFFTCxLQUFLLENBQUNLO1lBQUksRUFBSSxFQUMvQ0QsZ0NBQUtILElBQUksQ0FBTSxFQUNkRCxLQUFLLENBQUNPLGlCQUFpQixHQUFHUCxLQUFLLENBQUNPLGlCQUFpQixHQUFHLElBQUksRUFDeERQLEtBQUssQ0FBQ1EsUUFBUSxHQUFHUixLQUFLLENBQUNRLFFBQVEsR0FBRyxJQUFJLENBQ2xDLENBQ0Q7VUFFUiIsIm5hbWVzIjpbIkJleW9uZEVtcHR5IiwicHJvcHMiLCJ0ZXh0IiwiY2xzIiwiY2xhc3NOYW1lIiwiUmVhY3QiLCJpY29uIiwiQmV5b25kSWNvbiIsImFkZGl0aW9uYWxFbGVtZW50IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9lbXB0eS9jb21wb25lbnQvY29kZS90cy9lbXB0eS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=