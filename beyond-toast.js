System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/header", "@bgroup/ui@0.0.21/copyable-implementation", "@bgroup/ui@0.0.21/form", "@bgroup/ui@0.0.21/implementation-result", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
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
    }, function (_bgroupUi0021Form) {
      dependency_7 = _bgroupUi0021Form;
    }, function (_bgroupUi0021ImplementationResult) {
      dependency_8 = _bgroupUi0021ImplementationResult;
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
          "vspecifier": "@bgroup/ui@0.0.21/beyond-toast"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bgroup/ui/toast', dependency_4], ['@bgroup/ui/header', dependency_5], ['@bgroup/ui/copyable-implementation', dependency_6], ['@bgroup/ui/form', dependency_7], ['@bgroup/ui/implementation-result', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-toast",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-toast",
        "is": "page",
        "route": "/components/beyond-toast"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/beyond-toast');
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

      /**************************************
      INTERNAL MODULE: ./views/implementation
      **************************************/

      ims.set('./views/implementation', {
        hash: 3697539139,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementationWaring = exports.implementationSuccess = exports.implementationInfo = exports.implementationError = exports.implementation2 = exports.implementation = void 0;
          const implementation = `
import { useToastContext } from "@bgroup/ui/toast";
export function ImplementationToast() {
    function toggleToast() {
        add({
            type: "info",
            message: "This is an example",
        });
    }
    return (
        <button className="btn btn-primary" onClick={toggleToast}>Show Toast</button>
    );
  }
`;
          exports.implementation = implementation;
          const implementation2 = `
import { ToastContextProvider } from '@bgroup/ui/toast';
import { ImplementationToast } from './implementation-toast';
export function View() {
	return (
		<ToastContextProvider>
			<ImplementationToast />
		</ToastContextProvider>
	);
}
`;
          exports.implementation2 = implementation2;
          const implementationSuccess = `
function toggleToast() {
    add({
        type: "success",
        message: "This is an example of success toast",
    });
}
`;
          exports.implementationSuccess = implementationSuccess;
          const implementationError = `
function toggleToast() {
    add({
        type: "error",
        message: "This is an example of error toast",
    });
}
`;
          exports.implementationError = implementationError;
          const implementationWaring = `
function toggleToast() {
    add({
        type: "warning",
        message: "This is an example of warning toast",
    });
}
`;
          exports.implementationWaring = implementationWaring;
          const implementationInfo = `
function toggleToast() {
    add({
        type: "info",
        message: "This is an example of info toast",
    });
}
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
        hash: 786735852,
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
          var _implementation = require("./implementation");
          var _form = require("@bgroup/ui/form");
          var _implementationResult = require("@bgroup/ui/implementation-result");
          /*bundle*/
          function View() {
            const {
              add
            } = (0, _toast.useToastContext)();
            function toggleToast(event) {
              const {
                dataset
              } = event.currentTarget;
              add({
                type: dataset.type,
                message: dataset.message
              });
            }
            return React.createElement("div", null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Toast"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { ToastContextProvider } from '@bgroup/toast';`), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { useToastContext } from '@bgroup/toast';`)), React.createElement("div", {
              className: "component-implementation"
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation:"), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation2)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_form.BeyondButton, {
              "data-type": "info",
              "data-message": "This is an example",
              className: "btn btn-primary",
              onClick: toggleToast
            }, "Show Toast"), React.createElement("h3", null, "Case success toast"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationSuccess
            }, React.createElement(_form.BeyondButton, {
              "data-type": "success",
              "data-message": "This is an example of success toast",
              className: "btn btn-primary",
              onClick: toggleToast
            }, "Show success Toast")), React.createElement("h3", null, "Case error toast"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationError
            }, React.createElement(_form.BeyondButton, {
              "data-type": "error",
              "data-message": "This is an example of error toast",
              className: "btn btn-primary",
              onClick: toggleToast
            }, "Show error Toast")), React.createElement("h3", null, "Case warning toast"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationError
            }, React.createElement(_form.BeyondButton, {
              "data-type": "warning",
              "data-message": "This is an example of warning toast",
              className: "btn btn-primary",
              onClick: toggleToast
            }, "Show warning Toast")), React.createElement("h3", null, "Case info toast"), React.createElement(_implementationResult.ImplementationResult, {
              code: _implementation.implementationError
            }, React.createElement(_form.BeyondButton, {
              "data-type": "info",
              "data-message": "This is an example of info toast",
              className: "btn btn-primary",
              onClick: toggleToast
            }, "Show info Toast"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7Y0FBQSxnQkFDTixxQ0FBcUM7Y0FDbERKLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0JLLE9BQU8sRUFBRVg7WUFBVyx3QkFHVCxDQUNJLEVBQ3ZCSixrREFBd0IsRUFDeEJBLG9CQUFDZ0IsMENBQW9CO2NBQUNDLElBQUksRUFBRXBCO1lBQW1CLEdBQzNDRyxvQkFBQ2Msa0JBQVk7Y0FBQSxhQUNDLE1BQU07Y0FBQSxnQkFDSCxrQ0FBa0M7Y0FDL0NKLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0JLLE9BQU8sRUFBRVg7WUFBVyxxQkFHVCxDQUNJLENBQ3JCLENBQ0osQ0FDSixDQUNKO1VBRWQiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJleHBvcnRzIiwiaW1wbGVtZW50YXRpb24iLCJpbXBsZW1lbnRhdGlvbjIiLCJpbXBsZW1lbnRhdGlvblN1Y2Nlc3MiLCJpbXBsZW1lbnRhdGlvbkVycm9yIiwiaW1wbGVtZW50YXRpb25XYXJpbmciLCJpbXBsZW1lbnRhdGlvbkluZm8iLCJSZWFjdCIsIlRvYXN0Q29udGV4dFByb3ZpZGVyIiwiVmlldyIsImFkZCIsInRvZ2dsZVRvYXN0IiwiZXZlbnQiLCJkYXRhc2V0IiwiY3VycmVudFRhcmdldCIsInR5cGUiLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiY29tcG9uZW50TmFtZSIsIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJCZXlvbmRCdXR0b24iLCJvbkNsaWNrIiwiSW1wbGVtZW50YXRpb25SZXN1bHQiLCJjb2RlIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ3aWRnZXQvdHMvY29udHJvbGxlci50cyIsIndpZGdldC90cy92aWV3cy9pbXBsZW1lbnRhdGlvbi50cyIsIndpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJ3aWRnZXQvdHMvdmlld3Mvdmlldy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=