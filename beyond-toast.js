System.register(["@beyond-js/widgets@0.1.1/render", "@beyond-js/kernel@0.1.2/bundle", "@beyond-js/react-widgets@18.20.3/page", "react@18.2.0", "@beyond/ui@1.0.0/toast", "@beyond/ui@1.0.0/header", "@beyond/ui@1.0.0/copyable-implementation", "@beyond/ui@1.0.0/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, Page, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets011Render) {
      dependency_0 = _beyondJsWidgets011Render;
    }, function (_beyondJsKernel012Bundle) {
      dependency_1 = _beyondJsKernel012Bundle;
    }, function (_beyondJsReactWidgets18203Page) {
      dependency_2 = _beyondJsReactWidgets18203Page;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondUi100Toast) {
      dependency_4 = _beyondUi100Toast;
    }, function (_beyondUi100Header) {
      dependency_5 = _beyondUi100Header;
    }, function (_beyondUi100CopyableImplementation) {
      dependency_6 = _beyondUi100CopyableImplementation;
    }, function (_beyondUi100Form) {
      dependency_7 = _beyondUi100Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.20.3"], ["@beyond-js/widgets", "0.1.1"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.5.4"], ["@beyond/ui", "1.0.0"], ["@beyond/ui", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond/ui@1.0.0/beyond-toast"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond/ui/toast', dependency_4], ['@beyond/ui/header', dependency_5], ['@beyond/ui/copyable-implementation', dependency_6], ['@beyond/ui/form', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-toast",
        "vspecifier": "@beyond/ui@1.0.0/beyond-toast",
        "is": "page",
        "route": "/components/beyond-toast"
      }]);
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
        hash: 198593030,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation2 = exports.implementation = void 0;
          const implementation = `
import { useToastContext } from "@beyond/ui/toast";
export function ImplementationToast() {
    function toggleToast() {
        add({
            type: "info",
            message: "Nombre copiado",
        });
    }
    return (
        <button className="btn btn-primary" onClick={toggleToast}>Show Toast</button>
    );
  }
`;
          exports.implementation = implementation;
          const implementation2 = `
import { ToastContextProvider } from '@beyond/ui/toast';
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
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4240291021,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _toast = require("@beyond/ui/toast");
          var _view = require("./view");
          /*bundle*/
          function Page() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement(_view.View, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/result
      ******************************/

      ims.set('./views/result', {
        hash: 1735993249,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Result = Result;
          var _react = require("react");
          function Result() {
            return _react.default.createElement("div", null, "result");
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/view
      ****************************/

      ims.set('./views/view', {
        hash: 2923596923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@beyond/ui/header");
          var _toast = require("@beyond/ui/toast");
          var _copyableImplementation = require("@beyond/ui/copyable-implementation");
          var _implementation = require("./implementation");
          var _form = require("@beyond/ui/form");
          /*bundle*/
          function View() {
            const {
              add
            } = (0, _toast.useToastContext)();
            function toggleToast() {
              add({
                type: "info",
                message: "This is an example"
              });
            }
            return React.createElement("div", null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Toast"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Importaci\u00F3n:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { ToastContextProvider } from '@beyond/ui/toast';`), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { useToastContext } from '@beyond/ui/toast';`)), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementaci\u00F3n:"), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation2)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Resultado:"), React.createElement(_form.BeyondButton, {
              className: "btn btn-primary",
              onClick: toggleToast
            }, "Show Toast"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBRU87VUFBVSxNQUNYQSxVQUFXLFNBQVFDLCtCQUF5QjtZQUM5QyxJQUFJQyxNQUFNO2NBQ04sT0FBT0MsV0FBSTtZQUNmOztVQUNIQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSTSxNQUFNQyxjQUFjLEdBQUc7Ozs7Ozs7Ozs7Ozs7Q0FhN0I7VUFBQ0Q7VUFFSyxNQUFNRSxlQUFlLEdBQUc7Ozs7Ozs7Ozs7Q0FVOUI7VUFBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJGO1VBQ0E7VUFDQTtVQUNPO1VBQVUsU0FDUEQsSUFBSTtZQUNiLE9BQ0NJLG9CQUFDQywyQkFBb0IsUUFDcEJELG9CQUFDRSxVQUFJLE9BQUcsQ0FDYztVQUV6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQTtVQUVNLFNBQVVDLE1BQU07WUFDcEIsT0FDRUgsbURBQWlCO1VBRXJCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNPO1VBQVUsU0FDSkUsSUFBSTtZQUNiLE1BQU07Y0FBRUU7WUFBRyxDQUFFLEdBQUcsMEJBQWUsR0FBRTtZQUNqQyxTQUFTQyxXQUFXO2NBQ2hCRCxHQUFHLENBQUM7Z0JBQ0FFLElBQUksRUFBRSxNQUFNO2dCQUNaQyxPQUFPLEVBQUU7ZUFDWixDQUFDO1lBQ047WUFFQSxPQUNJUCxpQ0FDSUE7Y0FBS1EsU0FBUyxFQUFDO1lBQU0sR0FDakJSLG9CQUFDUyxjQUFNO2NBQUNDLGFBQWEsRUFBQztZQUFPLEVBQUcsRUFDaENWO2NBQUtRLFNBQVMsRUFBQztZQUFnQixHQUMzQlIsb0RBQXFCLEVBQ3JCQSxvQkFBQ1csOENBQXNCLFFBQUUsMERBQTBELENBQTBCLEVBQzdHWCxvQkFBQ1csOENBQXNCLFFBQUUscURBQXFELENBQTBCLENBQ3RHLEVBQ05YO2NBQUtRLFNBQVMsRUFBQztZQUFnQixHQUMzQlIsdURBQXdCLEVBQ3hCQSxvQkFBQ1csOENBQXNCLFFBQUViLDhCQUFjLENBQTBCLEVBQ2pFRSxvQkFBQ1csOENBQXNCLFFBQUVaLCtCQUFlLENBQTBCLENBQ2hFLEVBQ05DO2NBQUtRLFNBQVMsRUFBQztZQUFrQixHQUM3QlIsNkNBQW1CLEVBQ25CQSxvQkFBQ1ksa0JBQVk7Y0FBQ0osU0FBUyxFQUFDLGlCQUFpQjtjQUFDSyxPQUFPLEVBQUVSO1lBQVcsZ0JBQTJCLENBQ3ZGLENBQ0osQ0FDSjtVQUVkIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiZXhwb3J0cyIsImltcGxlbWVudGF0aW9uIiwiaW1wbGVtZW50YXRpb24yIiwiUmVhY3QiLCJUb2FzdENvbnRleHRQcm92aWRlciIsIlZpZXciLCJSZXN1bHQiLCJhZGQiLCJ0b2dnbGVUb2FzdCIsInR5cGUiLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiY29tcG9uZW50TmFtZSIsIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJCZXlvbmRCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvdG9hc3Qvdmlldy93aWRnZXQvdHMvY29udHJvbGxlci50cyIsInByb2plY3QvbW9kdWxlcy90b2FzdC92aWV3L3dpZGdldC90cy92aWV3cy9pbXBsZW1lbnRhdGlvbi50cyIsInByb2plY3QvbW9kdWxlcy90b2FzdC92aWV3L3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJwcm9qZWN0L21vZHVsZXMvdG9hc3Qvdmlldy93aWRnZXQvdHMvdmlld3MvcmVzdWx0LnRzeCIsInByb2plY3QvbW9kdWxlcy90b2FzdC92aWV3L3dpZGdldC90cy92aWV3cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19