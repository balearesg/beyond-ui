System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/header", "@bgroup/ui@0.0.21/copyable-implementation", "@bgroup/ui@0.0.21/implementation-result", "@bgroup/ui@0.0.21/alert", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, Page, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0,
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
    }, function (_bgroupUi0021Toast) {
      dependency_4 = _bgroupUi0021Toast;
    }, function (_bgroupUi0021Header) {
      dependency_5 = _bgroupUi0021Header;
    }, function (_bgroupUi0021CopyableImplementation) {
      dependency_6 = _bgroupUi0021CopyableImplementation;
    }, function (_bgroupUi0021ImplementationResult) {
      dependency_7 = _bgroupUi0021ImplementationResult;
    }, function (_bgroupUi0021Alert) {
      dependency_8 = _bgroupUi0021Alert;
    }, function (_beyondJsKernel017Styles) {
      dependency_9 = _beyondJsKernel017Styles;
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
          "vspecifier": "@bgroup/ui@0.0.21/beyond-alert"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bgroup/ui/toast', dependency_4], ['@bgroup/ui/header', dependency_5], ['@bgroup/ui/copyable-implementation', dependency_6], ['@bgroup/ui/implementation-result', dependency_7], ['@bgroup/ui/alert', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-alert",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-alert",
        "is": "page",
        "route": "/components/beyond-alert"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/beyond-alert');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1353635915,
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
              return _views.Page;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/cases
      *****************************/

      ims.set('./views/cases', {
        hash: 2514992002,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.cases = void 0;
          const cases = {
            error: {
              message: "this is a error message",
              title: "title error",
              mode: "error",
              show: true,
              isClose: true
            },
            success: {
              message: "this is a success message",
              title: "success error",
              mode: "success",
              show: true,
              isClose: true
            },
            warning: {
              message: "this is a warning message",
              title: "title warning",
              mode: "warning",
              show: true,
              isClose: false
            },
            info: {
              message: "this is a info message",
              title: "title info",
              mode: "info",
              show: true,
              isClose: true
            }
          };
          exports.cases = cases;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/implementation
      **************************************/

      ims.set('./views/implementation', {
        hash: 1830504499,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementationWaring = exports.implementationInfo = exports.implementationError = exports.implementation = void 0;
          const implementation = `
import { useToastContext } from "@bgroup/ui/toast";
export function ImplementationAlert() {
<BeyondAlert  
    message="this is a success message"
    title="title success"
    mode="success"
    show={true}   
    isClose={true}
/>
  }
`;
          exports.implementation = implementation;
          const implementationError = `
<BeyondAlert   
    message="this is a error message"
    title="title error"
    mode="error"
    show={true}
    isClose={true}   
/>
`;
          exports.implementationError = implementationError;
          const implementationWaring = `
<BeyondAlert   
    message="this is a success warning"
    title="title warning"
    mode="warning"
    show={true}   
    isClose={false}
/>
`;
          exports.implementationWaring = implementationWaring;
          const implementationInfo = `
<BeyondAlert   
    message="this is a info message"
    title="title info"
    mode="info"
    show={true} 
    isClose={true}  
/>
`;
          exports.implementationInfo = implementationInfo;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4096591602,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _toast = require("@bgroup/ui/toast");
          var _view = require("./view");
          /*bundle*/
          function Page() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement(_view.View, null));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/view
      ****************************/

      ims.set('./views/view', {
        hash: 518782929,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@bgroup/ui/header");
          var _copyableImplementation = require("@bgroup/ui/copyable-implementation");
          var _implementation = require("./implementation");
          var _implementationResult = require("@bgroup/ui/implementation-result");
          var _alert = require("@bgroup/ui/alert");
          var _cases = require("./cases");
          /*bundle*/
          function View() {
            return React.createElement("div", null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Alert"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondAlert } from '@bgroup/alert';`)), React.createElement("div", {
              className: "component-implementation"
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation:"), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_alert.BeyondAlert, {
              ..._cases.cases.success
            }), React.createElement("h3", null, "Case success alert"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationError
            }, React.createElement(_alert.BeyondAlert, {
              ..._cases.cases.error
            })), React.createElement("h3", null, "Case error alert"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationWaring
            }, React.createElement(_alert.BeyondAlert, {
              ..._cases.cases.warning
            })), React.createElement("h3", null, "Case warning alert"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationInfo
            }, React.createElement(_alert.BeyondAlert, {
              ..._cases.cases.info
            }))))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Page",
        "name": "Page"
      }, {
        "im": "./views/view",
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
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/index').Page : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/view').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3JCLFlBQUssQ0FBQ1M7WUFBSSxFQUFJLENBQ1osQ0FDckIsQ0FDSixDQUNKLENBQ0o7VUFFZCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsImV4cG9ydHMiLCJjYXNlcyIsImVycm9yIiwibWVzc2FnZSIsInRpdGxlIiwibW9kZSIsInNob3ciLCJpc0Nsb3NlIiwic3VjY2VzcyIsIndhcm5pbmciLCJpbmZvIiwiaW1wbGVtZW50YXRpb24iLCJpbXBsZW1lbnRhdGlvbkVycm9yIiwiaW1wbGVtZW50YXRpb25XYXJpbmciLCJpbXBsZW1lbnRhdGlvbkluZm8iLCJSZWFjdCIsIlRvYXN0Q29udGV4dFByb3ZpZGVyIiwiVmlldyIsImNsYXNzTmFtZSIsIkhlYWRlciIsImNvbXBvbmVudE5hbWUiLCJDb3B5YWJsZUltcGxlbWVudGF0aW9uIiwiQmV5b25kQWxlcnQiLCJJbXBsZW1lbnRhdGlvblJlc3VsdCIsImNvZGUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2Nhc2VzLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2ltcGxlbWVudGF0aW9uLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCIsIndpZGdldC90cy92aWV3cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19