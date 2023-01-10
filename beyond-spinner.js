System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bgroup/ui@0.0.21/header", "@bgroup/ui@0.0.21/spinner", "@bgroup/ui@0.0.21/toast", "@bgroup/ui@0.0.21/copyable-implementation", "@bgroup/ui@0.0.21/implementation-result", "@beyond-js/kernel@0.1.7/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_bgroupUi0021Header) {
      dependency_4 = _bgroupUi0021Header;
    }, function (_bgroupUi0021Spinner) {
      dependency_5 = _bgroupUi0021Spinner;
    }, function (_bgroupUi0021Toast) {
      dependency_6 = _bgroupUi0021Toast;
    }, function (_bgroupUi0021CopyableImplementation) {
      dependency_7 = _bgroupUi0021CopyableImplementation;
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
          "vspecifier": "@bgroup/ui@0.0.21/beyond-spinner"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bgroup/ui/header', dependency_4], ['@bgroup/ui/spinner', dependency_5], ['@bgroup/ui/toast', dependency_6], ['@bgroup/ui/copyable-implementation', dependency_7], ['@bgroup/ui/implementation-result', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-spinner",
        "vspecifier": "@bgroup/ui@0.0.21/beyond-spinner",
        "is": "page",
        "route": "/components/beyond-spinner"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bgroup/ui@0.0.21/beyond-spinner');
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3315292884,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _header = require("@bgroup/ui/header");
          var _spinner = require("@bgroup/ui/spinner");
          var _toast = require("@bgroup/ui/toast");
          var _copyableImplementation = require("@bgroup/ui/copyable-implementation");
          var _implementationResult = require("@bgroup/ui/implementation-result");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view"
            }, React.createElement(_header.Header, {
              componentName: "Icons"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondSpinner } from '@bgroup/spinner';`)), React.createElement("div", {
              className: 'component-implementation'
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation:"), React.createElement(_copyableImplementation.CopyableImplementation, null, `<BeyondSpinner color="#617096" className="spinner" />`)), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_spinner.BeyondSpinner, {
              color: "#617096",
              className: "spinner"
            }), React.createElement("h3", null, "Spinner primary:"), React.createElement(_implementationResult.ImplementationResult, {
              code: `<BeyondSpinner primary className="spinner" />`
            }, React.createElement(_spinner.BeyondSpinner, {
              primary: true,
              className: "spinner"
            })), React.createElement("h3", null, "Spinner secondary:"), React.createElement(_implementationResult.ImplementationResult, {
              code: `<BeyondSpinner secondary className="spinner" />`
            }, React.createElement(_spinner.BeyondSpinner, {
              secondary: true,
              className: "spinner"
            })), React.createElement("h3", null, "Spinner size defined:"), React.createElement(_implementationResult.ImplementationResult, {
              code: `<BeyondSpinner size="80px" className="spinner" />`
            }, React.createElement(_spinner.BeyondSpinner, {
              size: "80px",
              className: "spinner"
            }))))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/spinner-primary
      ***************************************/

      ims.set('./views/spinner-primary', {
        hash: 2200184029,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpinnerPrimary = SpinnerPrimary;
          var _react = require("react");
          var _spinner = require("@bgroup/ui/spinner");
          function SpinnerPrimary() {
            return _react.default.createElement(_spinner.BeyondSpinner, {
              secondary: true,
              className: "spinner"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUVPO1VBQVUsTUFDWEEsVUFBVyxTQUFRQywrQkFBeUI7WUFDOUMsSUFBSUMsTUFBTTtjQUNOLE9BQU9DLFdBQUk7WUFDZjs7VUFDSEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQ7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVSxTQUNQRCxJQUFJO1lBQ2IsT0FDQ0Usb0JBQUNDLDJCQUFvQixRQUNwQkQ7Y0FBS0UsU0FBUyxFQUFDO1lBQU0sR0FDcEJGLG9CQUFDRyxjQUFNO2NBQUNDLGFBQWEsRUFBQztZQUFPLEVBQUcsRUFDaENKO2NBQUtFLFNBQVMsRUFBQztZQUFnQixHQUM5QkYsMENBQWdCLEVBQ2hCQSxvQkFBQ0ssOENBQXNCLFFBQUUsa0RBQWtELENBQTBCLENBQ2hHLEVBQ05MO2NBQUtFLFNBQVMsRUFBQztZQUEwQixHQUN4Q0Y7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCRixrREFBd0IsRUFDeEJBLG9CQUFDSyw4Q0FBc0IsUUFBRSx1REFBdUQsQ0FBMEIsQ0FDckcsRUFDTkw7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDRiwwQ0FBZ0IsRUFDaEJBLG9CQUFDTSxzQkFBYTtjQUFDQyxLQUFLLEVBQUMsU0FBUztjQUFDTCxTQUFTLEVBQUM7WUFBUyxFQUFHLEVBQ3JERixtREFBeUIsRUFDekJBLG9CQUFDUSwwQ0FBb0I7Y0FBQ0MsSUFBSSxFQUFFO1lBQStDLEdBQzFFVCxvQkFBQ00sc0JBQWE7Y0FBQ0ksT0FBTztjQUFDUixTQUFTLEVBQUM7WUFBUyxFQUFHLENBQ3ZCLEVBQ3ZCRixxREFBMkIsRUFDM0JBLG9CQUFDUSwwQ0FBb0I7Y0FBQ0MsSUFBSSxFQUFFO1lBQWlELEdBQzVFVCxvQkFBQ00sc0JBQWE7Y0FBQ0ssU0FBUztjQUFDVCxTQUFTLEVBQUM7WUFBUyxFQUFHLENBQ3pCLEVBQ3ZCRix3REFBOEIsRUFDOUJBLG9CQUFDUSwwQ0FBb0I7Y0FBQ0MsSUFBSSxFQUFFO1lBQW1ELEdBQzlFVCxvQkFBQ00sc0JBQWE7Y0FBQ00sSUFBSSxFQUFDLE1BQU07Y0FBQ1YsU0FBUyxFQUFDO1lBQVMsRUFBRyxDQUMzQixDQUNsQixDQUVELENBQ0QsQ0FDZ0I7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBO1VBRUE7VUFDTSxTQUFVVyxjQUFjO1lBQzVCLE9BQ0ViLDZCQUFDTSxzQkFBYTtjQUFDSyxTQUFTO2NBQUNULFNBQVMsRUFBQztZQUFTLEVBQUc7VUFFbkQiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiUmVhY3QiLCJUb2FzdENvbnRleHRQcm92aWRlciIsImNsYXNzTmFtZSIsIkhlYWRlciIsImNvbXBvbmVudE5hbWUiLCJDb3B5YWJsZUltcGxlbWVudGF0aW9uIiwiQmV5b25kU3Bpbm5lciIsImNvbG9yIiwiSW1wbGVtZW50YXRpb25SZXN1bHQiLCJjb2RlIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInNpemUiLCJTcGlubmVyUHJpbWFyeSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Iiwid2lkZ2V0L3RzL3ZpZXdzL3NwaW5uZXItcHJpbWFyeS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF19