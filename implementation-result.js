System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "react@18.2.0", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/icon", "prism-react-renderer@1.3.5", "@bgroup/ui@0.0.21/tabs"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, ImplementationResult, __beyond_pkg, hmr;
  _export("ImplementationResult", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_1 = _beyondJsKernel017Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_bgroupUi0021Toast) {
      dependency_3 = _bgroupUi0021Toast;
    }, function (_bgroupUi0021Icon) {
      dependency_4 = _bgroupUi0021Icon;
    }, function (_prismReactRenderer2) {
      dependency_5 = _prismReactRenderer2;
    }, function (_bgroupUi0021Tabs) {
      dependency_6 = _bgroupUi0021Tabs;
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
          "vspecifier": "@bgroup/ui@0.0.21/implementation-result"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@bgroup/ui/toast', dependency_3], ['@bgroup/ui/icon', dependency_4], ['prism-react-renderer', dependency_5], ['@bgroup/ui/tabs', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/implementation-result');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./code
      **********************/
      ims.set('./code', {
        hash: 2193282096,
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
          function CopyableImplementation({
            code
          }) {
            const {
              add
            } = (0, _toast.useToastContext)();
            function copy() {
              navigator.clipboard.writeText(code);
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
              code: code,
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

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 2175293366,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImplementationResult = ImplementationResult;
          var _react = require("react");
          var _tabs = require("@bgroup/ui/tabs");
          var _icon = require("@bgroup/ui/icon");
          var _code = require("./code");
          /*bundle*/
          function ImplementationResult({
            code,
            children
          }) {
            const [tab, setTab] = _react.default.useState(0);
            return _react.default.createElement(_tabs.BeyondTabs, {
              selected: tab
            }, _react.default.createElement(_tabs.Tabs, {
              selected: tab
            }, _react.default.createElement(_icon.BeyondIconButton, {
              "data-tooltip": "Result",
              className: "tooltip",
              icon: "result",
              onClick: () => setTab(0)
            }), _react.default.createElement(_icon.BeyondIconButton, {
              "data-tooltip": "Code",
              className: "tooltip",
              icon: "code",
              onClick: () => setTab(1)
            })), _react.default.createElement(_tabs.TabsContent, null, children, _react.default.createElement(_code.CopyableImplementation, {
              code: code
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./view",
        "from": "ImplementationResult",
        "name": "ImplementationResult"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ImplementationResult') && _export("ImplementationResult", ImplementationResult = require ? require('./view').ImplementationResult : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBQ0E7VUFFTSxTQUFVQSxzQkFBc0IsQ0FBQztZQUFFQztVQUFJLENBQUU7WUFDOUMsTUFBTTtjQUFFQztZQUFHLENBQUUsR0FBRywwQkFBZSxHQUFFO1lBRWpDLFNBQVNDLElBQUk7Y0FDWkMsU0FBUyxDQUFDQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0wsSUFBSSxDQUFDO2NBQ25DQyxHQUFHLENBQUM7Z0JBQ0hLLElBQUksRUFBRSxNQUFNO2dCQUNaQyxPQUFPLEVBQUU7ZUFDVCxDQUFDO1lBQ0g7WUFFQSxPQUNDQztjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENEO2NBQUtDLFNBQVMsRUFBQztZQUFNLEdBQ3BCRCxvQkFBQ0UsMkJBQVM7Y0FBQSxHQUFLQyxnQ0FBWTtjQUFFWCxJQUFJLEVBQUVBLElBQUk7Y0FBRVksUUFBUSxFQUFDO1lBQUssR0FDckQsQ0FBQztjQUFFSCxTQUFTO2NBQUVJLEtBQUs7Y0FBRUMsTUFBTTtjQUFFQyxZQUFZO2NBQUVDO1lBQWEsQ0FBRSxLQUMxRFI7Y0FBTUMsU0FBUyxFQUFFQSxTQUFTO2NBQUVJLEtBQUssRUFBRUE7WUFBSyxHQUN0Q0MsTUFBTSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEtBQ25CWDtjQUFBLEdBQVNPLFlBQVksQ0FBQztnQkFBRUcsSUFBSTtnQkFBRUUsR0FBRyxFQUFFRDtjQUFDLENBQUU7WUFBQyxHQUNyQ0QsSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQ0ksS0FBSyxFQUFFRCxHQUFHLEtBQ3BCWjtjQUFBLEdBQVVRLGFBQWEsQ0FBQztnQkFBRUssS0FBSztnQkFBRUQ7Y0FBRyxDQUFFO1lBQUMsRUFDdkMsQ0FBQyxDQUVILENBQUMsQ0FFSCxDQUNVLENBQ1AsRUFDTlosb0JBQUNjLHNCQUFnQjtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUV0QixJQUFJO2NBQUVPLFNBQVMsRUFBQztZQUFhLEVBQUcsQ0FDbEU7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDTztVQUFVLFNBQVVnQixvQkFBb0IsQ0FBQztZQUM5Q3pCLElBQUk7WUFDSjBCO1VBQVEsQ0FDNEI7WUFDcEMsTUFBTSxDQUFDQyxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxHQUFHcEIsY0FBSyxDQUFDcUIsUUFBUSxDQUFTLENBQUMsQ0FBQztZQUMvQyxPQUNFckIsNkJBQUNzQixnQkFBVTtjQUFDQyxRQUFRLEVBQUVKO1lBQUcsR0FDdkJuQiw2QkFBQ3dCLFVBQUk7Y0FBQ0QsUUFBUSxFQUFFSjtZQUFHLEdBQ2pCbkIsNkJBQUNjLHNCQUFnQjtjQUFBLGdCQUNGLFFBQVE7Y0FDckJiLFNBQVMsRUFBQyxTQUFTO2NBQ25CYyxJQUFJLEVBQUMsUUFBUTtjQUNiQyxPQUFPLEVBQUUsTUFBTUksTUFBTSxDQUFDLENBQUM7WUFBQyxFQUN4QixFQUNGcEIsNkJBQUNjLHNCQUFnQjtjQUFBLGdCQUNGLE1BQU07Y0FDbkJiLFNBQVMsRUFBQyxTQUFTO2NBQ25CYyxJQUFJLEVBQUMsTUFBTTtjQUNYQyxPQUFPLEVBQUUsTUFBTUksTUFBTSxDQUFDLENBQUM7WUFBQyxFQUN4QixDQUNHLEVBQ1BwQiw2QkFBQ3lCLGlCQUFXLFFBQ1RQLFFBQVEsRUFDVGxCLDZCQUFDVCw0QkFBc0I7Y0FBQ0MsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDMUIsQ0FDSDtVQUVqQiIsIm5hbWVzIjpbIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJjb2RlIiwiYWRkIiwiY29weSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInR5cGUiLCJtZXNzYWdlIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJIaWdobGlnaHQiLCJkZWZhdWx0UHJvcHMiLCJsYW5ndWFnZSIsInN0eWxlIiwidG9rZW5zIiwiZ2V0TGluZVByb3BzIiwiZ2V0VG9rZW5Qcm9wcyIsIm1hcCIsImxpbmUiLCJpIiwia2V5IiwidG9rZW4iLCJCZXlvbmRJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJJbXBsZW1lbnRhdGlvblJlc3VsdCIsImNoaWxkcmVuIiwidGFiIiwic2V0VGFiIiwidXNlU3RhdGUiLCJCZXlvbmRUYWJzIiwic2VsZWN0ZWQiLCJUYWJzIiwiVGFic0NvbnRlbnQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvY29kZS50c3giLCJjb2RlL3RzL3ZpZXcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=