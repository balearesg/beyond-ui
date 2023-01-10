System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/icon", "prism-react-renderer@1.3.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, CopyableImplementation, __beyond_pkg, hmr;
  _export("CopyableImplementation", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_1 = _beyondJsKernel017Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_bgroupUi0021Toast) {
      dependency_3 = _bgroupUi0021Toast;
    }, function (_bgroupUi0021Icon) {
      dependency_4 = _bgroupUi0021Icon;
    }, function (_prismReactRenderer2) {
      dependency_5 = _prismReactRenderer2;
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
          "vspecifier": "@bgroup/ui@0.0.21/copyable-implementation"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@bgroup/ui/toast', dependency_3], ['@bgroup/ui/icon', dependency_4], ['prism-react-renderer', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/copyable-implementation');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3658884157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CopyableImplementation = CopyableImplementation;
          var React = require("react");
          var _toast = require("@bgroup/ui/toast");
          var _icon = require("@bgroup/ui/icon");
          var _prismReactRenderer = require("prism-react-renderer");
          /*bundle*/
          function CopyableImplementation({
            children
          }) {
            const {
              add
            } = (0, _toast.useToastContext)();
            function copy() {
              navigator.clipboard.writeText(children);
              add({
                type: 'info',
                message: 'Copied implementation'
              });
            }
            return React.createElement("div", {
              className: "copyable-content"
            }, React.createElement("div", {
              className: "code"
            }, React.createElement(_prismReactRenderer.default, {
              ..._prismReactRenderer.defaultProps,
              code: children,
              language: "jsx"
            }, ({
              className,
              style,
              tokens,
              getLineProps,
              getTokenProps
            }) => React.createElement("code", {
              className: className,
              style: style
            }, tokens.map((line, i) => React.createElement("div", {
              ...getLineProps({
                line,
                key: i
              })
            }, line.map((token, key) => React.createElement("span", {
              ...getTokenProps({
                token,
                key
              })
            }))))))), React.createElement(_icon.BeyondIconButton, {
              icon: "copy",
              onClick: copy,
              className: "copy-button"
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "CopyableImplementation",
        "name": "CopyableImplementation"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CopyableImplementation') && _export("CopyableImplementation", CopyableImplementation = require ? require('./index').CopyableImplementation : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUFVQSxzQkFBc0IsQ0FBQztZQUFFQztVQUFRLENBQUU7WUFDN0QsTUFBTTtjQUFFQztZQUFHLENBQUUsR0FBRywwQkFBZSxHQUFFO1lBRWpDLFNBQVNDLElBQUk7Y0FDWkMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDO2NBQ3ZDQyxHQUFHLENBQUM7Z0JBQ0hLLElBQUksRUFBRSxNQUFNO2dCQUNaQyxPQUFPLEVBQUU7ZUFDVCxDQUFDO1lBQ0g7WUFFQSxPQUNDQztjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENEO2NBQUtDLFNBQVMsRUFBQztZQUFNLEdBQ3BCRCxvQkFBQ0UsMkJBQVM7Y0FBQSxHQUFLQyxnQ0FBWTtjQUFFQyxJQUFJLEVBQUVaLFFBQVE7Y0FBRWEsUUFBUSxFQUFDO1lBQUssR0FDekQsQ0FBQztjQUFFSixTQUFTO2NBQUVLLEtBQUs7Y0FBRUMsTUFBTTtjQUFFQyxZQUFZO2NBQUVDO1lBQWEsQ0FBRSxLQUMxRFQ7Y0FBTUMsU0FBUyxFQUFFQSxTQUFTO2NBQUVLLEtBQUssRUFBRUE7WUFBSyxHQUN0Q0MsTUFBTSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEtBQ25CWjtjQUFBLEdBQVNRLFlBQVksQ0FBQztnQkFBRUcsSUFBSTtnQkFBRUUsR0FBRyxFQUFFRDtjQUFDLENBQUU7WUFBQyxHQUNyQ0QsSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQ0ksS0FBSyxFQUFFRCxHQUFHLEtBQ3BCYjtjQUFBLEdBQVVTLGFBQWEsQ0FBQztnQkFBRUssS0FBSztnQkFBRUQ7Y0FBRyxDQUFFO1lBQUMsRUFDdkMsQ0FBQyxDQUVILENBQUMsQ0FFSCxDQUNVLENBQ1AsRUFDTmIsb0JBQUNlLHNCQUFnQjtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUV2QixJQUFJO2NBQUVPLFNBQVMsRUFBQztZQUFhLEVBQUUsQ0FDakU7VUFFUiIsIm5hbWVzIjpbIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJjaGlsZHJlbiIsImFkZCIsImNvcHkiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0eXBlIiwibWVzc2FnZSIsIlJlYWN0IiwiY2xhc3NOYW1lIiwiSGlnaGxpZ2h0IiwiZGVmYXVsdFByb3BzIiwiY29kZSIsImxhbmd1YWdlIiwic3R5bGUiLCJ0b2tlbnMiLCJnZXRMaW5lUHJvcHMiLCJnZXRUb2tlblByb3BzIiwibWFwIiwibGluZSIsImkiLCJrZXkiLCJ0b2tlbiIsIkJleW9uZEljb25CdXR0b24iLCJpY29uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=