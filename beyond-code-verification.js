System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/header", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/copyable-implementation", "@bgroup/ui@0.0.21/code-verification", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsReactWidgets18211Page) {
      dependency_2 = _beyondJsReactWidgets18211Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_bgroupUi0021Header) {
      dependency_4 = _bgroupUi0021Header;
    }, function (_bgroupUi0021Toast) {
      dependency_5 = _bgroupUi0021Toast;
    }, function (_bgroupUi0021CopyableImplementation) {
      dependency_6 = _bgroupUi0021CopyableImplementation;
    }, function (_bgroupUi0021CodeVerification) {
      dependency_7 = _bgroupUi0021CodeVerification;
    }, function (_beyondJsKernel017Styles) {
      dependency_8 = _beyondJsKernel017Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.2"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["swiper", "8.4.5"], ["@bgroup/ui", "0.0.21"], ["@bgroup/ui", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/ui@0.0.21/beyond-code-verification"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bgroup/ui/header', dependency_4], ['@bgroup/ui/toast', dependency_5], ['@bgroup/ui/copyable-implementation', dependency_6], ['@bgroup/ui/code-verification', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-code-verification",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-code-verification",
        "is": "page",
        "route": "/components/beyond-code-verification"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/beyond-code-verification');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3638196390,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/implementation
      **************************************/

      ims.set('./views/implementation', {
        hash: 3646672315,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
export function CodeVerificationImplementation() {

	const [code, setCode] = React.useState<string>("");

	const onCodeFull = (code: string): void => setCode(code);
	
	return (
	  <InputCode
		className="code-result"
		length={6}
		onCodeFull={onCodeFull}
		onlyNumber={false}
	  />
	);
}
`;
          exports.implementation = implementation;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2663321807,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@bgroup/ui/header");
          var _toast = require("@bgroup/ui/toast");
          var _copyableImplementation = require("@bgroup/ui/copyable-implementation");
          var _results = require("./results");
          var _implementation = require("./implementation");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view beyond-image-view"
            }, React.createElement(_header.Header, {
              componentName: "Verification Code"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import: "), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { InputCode } from "@bgroup/code-verification";`)), React.createElement("div", {
              className: 'component-implementation'
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation: "), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_results.Result, null)))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/results
      *******************************/

      ims.set('./views/results', {
        hash: 3417725655,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Result = Result;
          var React = require("react");
          var _codeVerification = require("@bgroup/ui/code-verification");
          function Result() {
            const [code, setCode] = React.useState("");
            const onCodeFull = code => setCode(code);
            return React.createElement(_codeVerification.InputCode, {
              className: "code-result",
              length: 6,
              onCodeFull: onCodeFull,
              onlyNumber: false
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1DLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztDQWdCN0I7VUFBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVPO1VBQVUsU0FDUEQsSUFBSTtZQUNiLE9BQ0NHLG9CQUFDQywyQkFBb0IsUUFDcEJEO2NBQUtFLFNBQVMsRUFBQztZQUF3QixHQUN0Q0Ysb0JBQUNHLGNBQU07Y0FBQ0MsYUFBYSxFQUFDO1lBQW1CLEVBQUcsRUFDNUNKO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QkYsMkNBQWlCLEVBQ2pCQSxvQkFBQ0ssOENBQXNCLFFBQUUsd0RBQXdELENBQTBCLENBQ3RHLEVBQ05MO2NBQUtFLFNBQVMsRUFBQztZQUEwQixHQUN4Q0Y7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCRixtREFBeUIsRUFDekJBLG9CQUFDSyw4Q0FBc0IsUUFBRU4sOEJBQWMsQ0FBMEIsQ0FDNUQsRUFDTkM7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDRiwwQ0FBZ0IsRUFDaEJBLG9CQUFDTSxlQUFNLE9BQUcsQ0FDTCxDQUNELENBRUQsQ0FDZ0I7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBO1VBQ0E7VUFFTSxTQUFVQSxNQUFNO1lBQ3BCLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1IsS0FBSyxDQUFDUyxRQUFRLENBQVMsRUFBRSxDQUFDO1lBQ2xELE1BQU1DLFVBQVUsR0FBSUgsSUFBWSxJQUFXQyxPQUFPLENBQUNELElBQUksQ0FBQztZQUN4RCxPQUNFUCxvQkFBQ1csMkJBQVM7Y0FDUlQsU0FBUyxFQUFDLGFBQWE7Y0FDdkJVLE1BQU0sRUFBRSxDQUFDO2NBQ1RGLFVBQVUsRUFBRUEsVUFBVTtjQUN0QkcsVUFBVSxFQUFFO1lBQUssRUFDakI7VUFFTiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJpbXBsZW1lbnRhdGlvbiIsIlJlYWN0IiwiVG9hc3RDb250ZXh0UHJvdmlkZXIiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJjb21wb25lbnROYW1lIiwiQ29weWFibGVJbXBsZW1lbnRhdGlvbiIsIlJlc3VsdCIsImNvZGUiLCJzZXRDb2RlIiwidXNlU3RhdGUiLCJvbkNvZGVGdWxsIiwiSW5wdXRDb2RlIiwibGVuZ3RoIiwib25seU51bWJlciJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW1wbGVtZW50YXRpb24udHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3Jlc3VsdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF19