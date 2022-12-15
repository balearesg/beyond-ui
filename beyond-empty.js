System.register(["@beyond-js/widgets@0.1.1/render", "@beyond-js/kernel@0.1.2/bundle", "@beyond-js/react-widgets@18.20.3/page", "react@18.2.0", "@beyond/ui@1.0.0/header", "@beyond/ui@1.0.0/empty", "@beyond/ui@1.0.0/toast", "@beyond/ui@1.0.0/copyable-implementation", "@beyond-js/kernel@0.1.2/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets011Render) {
      dependency_0 = _beyondJsWidgets011Render;
    }, function (_beyondJsKernel012Bundle) {
      dependency_1 = _beyondJsKernel012Bundle;
    }, function (_beyondJsReactWidgets18203Page) {
      dependency_2 = _beyondJsReactWidgets18203Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondUi100Header) {
      dependency_4 = _beyondUi100Header;
    }, function (_beyondUi100Empty) {
      dependency_5 = _beyondUi100Empty;
    }, function (_beyondUi100Toast) {
      dependency_6 = _beyondUi100Toast;
    }, function (_beyondUi100CopyableImplementation) {
      dependency_7 = _beyondUi100CopyableImplementation;
    }, function (_beyondJsKernel012Styles) {
      dependency_8 = _beyondJsKernel012Styles;
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
          "vspecifier": "@beyond/ui@1.0.0/beyond-empty"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond/ui/header', dependency_4], ['@beyond/ui/empty', dependency_5], ['@beyond/ui/toast', dependency_6], ['@beyond/ui/copyable-implementation', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-empty",
        "vspecifier": "@beyond/ui@1.0.0/beyond-empty",
        "is": "page",
        "route": "/components/beyond-empty"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/beyond-empty');
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
        hash: 3985385810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
<BeyondEmpty text="No records to display" />
`;
          exports.implementation = implementation;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3203825519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@beyond/ui/header");
          var _empty = require("@beyond/ui/empty");
          var _toast = require("@beyond/ui/toast");
          var _copyableImplementation = require("@beyond/ui/copyable-implementation");
          var _implementation = require("./implementation");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Empty"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import: "), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondEmpty } from '@beyond/ui/empty';`)), React.createElement("div", {
              className: 'component-implementation'
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation: "), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_empty.BeyondEmpty, {
              icon: "info",
              text: "No records to display"
            })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1DLGNBQWMsR0FBRzs7Q0FFN0I7VUFBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRkY7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUNSRCxJQUFJO1lBQ1osT0FDQ0csb0JBQUNDLDJCQUFvQixRQUNwQkQ7Y0FBS0UsU0FBUyxFQUFDO1lBQU0sR0FDcEJGLG9CQUFDRyxjQUFNO2NBQUNDLGFBQWEsRUFBQztZQUFPLEVBQUcsRUFDaENKO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QkYsMkNBQWlCLEVBQ2pCQSxvQkFBQ0ssOENBQXNCLFFBQUUsaURBQWlELENBQTBCLENBQy9GLEVBQ05MO2NBQUtFLFNBQVMsRUFBQztZQUEwQixHQUN6Q0Y7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCRixtREFBeUIsRUFDekJBLG9CQUFDSyw4Q0FBc0IsUUFBRU4sOEJBQWMsQ0FBMEIsQ0FDNUQsRUFFTkM7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDRiwwQ0FBZ0IsRUFDaEJBLG9CQUFDTSxrQkFBVztjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxJQUFJLEVBQUM7WUFBdUIsRUFBRyxDQUNuRCxDQUNBLENBRUQsQ0FDZ0I7VUFFekIiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiaW1wbGVtZW50YXRpb24iLCJSZWFjdCIsIlRvYXN0Q29udGV4dFByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiSGVhZGVyIiwiY29tcG9uZW50TmFtZSIsIkNvcHlhYmxlSW1wbGVtZW50YXRpb24iLCJCZXlvbmRFbXB0eSIsImljb24iLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvZW1wdHkvdmlldy93aWRnZXQvdHMvY29udHJvbGxlci50cyIsInByb2plY3QvbW9kdWxlcy9lbXB0eS92aWV3L3dpZGdldC90cy92aWV3cy9pbXBsZW1lbnRhdGlvbi50cyIsInByb2plY3QvbW9kdWxlcy9lbXB0eS92aWV3L3dpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19