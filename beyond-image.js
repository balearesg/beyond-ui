System.register(["@beyond-js/widgets@0.1.1/render", "@beyond-js/kernel@0.1.2/bundle", "@beyond-js/react-widgets@18.20.3/page", "react@18.2.0", "@beyond/ui@1.0.0/header", "@beyond/ui@1.0.0/toast", "@beyond/ui@1.0.0/copyable-implementation", "@beyond/ui@1.0.0/image", "@beyond-js/kernel@0.1.2/styles"], function (_export, _context) {
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
    }, function (_beyondUi100Toast) {
      dependency_5 = _beyondUi100Toast;
    }, function (_beyondUi100CopyableImplementation) {
      dependency_6 = _beyondUi100CopyableImplementation;
    }, function (_beyondUi100Image) {
      dependency_7 = _beyondUi100Image;
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
          "vspecifier": "@beyond/ui@1.0.0/beyond-image"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond/ui/header', dependency_4], ['@beyond/ui/toast', dependency_5], ['@beyond/ui/copyable-implementation', dependency_6], ['@beyond/ui/image', dependency_7], ['@beyond-js/kernel/styles', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyond-image",
        "vspecifier": "@beyond/ui@1.0.0/beyond-image",
        "is": "page",
        "route": "/components/beyond-image"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond/ui@1.0.0/beyond-image');
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
        hash: 497111328,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.implementation = void 0;
          const implementation = `
<BeyondImage src="https://th.bing.com/th/id/R.676e186b253fa27707e3a5e288134d5a?rik=9%2bGaUnKmaIlMEA&pid=ImgRaw&r=0" alt="Brasil vencio a Argentina" />;`;
          exports.implementation = implementation;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3074312872,
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
          var _results = require("./results");
          var _implementation = require("./implementation");
          /*bundle*/
          function View() {
            return React.createElement(_toast.ToastContextProvider, null, React.createElement("div", {
              className: "view beyond-image-view"
            }, React.createElement(_header.Header, {
              componentName: "Image"
            }), React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Import: "), React.createElement(_copyableImplementation.CopyableImplementation, null, `import { BeyondImage } from '@beyond/ui/image';`)), React.createElement("div", {
              className: 'component-implementation'
            }, React.createElement("div", {
              className: "component-info"
            }, React.createElement("h3", null, "Implementation: "), React.createElement(_copyableImplementation.CopyableImplementation, null, _implementation.implementation), React.createElement("div", {
              className: 'component-detail'
            }, React.createElement("h4", null, "Informacion adicional:"), React.createElement("div", null, React.createElement("p", null, "This component detects when the image is loading or when the image could not be loaded in both cases a different html class is set, for the loading case ", React.createElement("code", null, "beyond-element-image-preload"), "\u00A0 and for the error case", React.createElement("code", null, "beyond-element-image-error"))))), React.createElement("div", {
              className: "component-result"
            }, React.createElement("h3", null, "Result:"), React.createElement(_results.Results, null)))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/results
      *******************************/

      ims.set('./views/results', {
        hash: 1117005161,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = Results;
          var React = require("react");
          var _image = require("@beyond/ui/image");
          function Results() {
            return React.createElement(_image.BeyondImage, {
              src: "https://th.bing.com/th/id/R.676e186b253fa27707e3a5e288134d5a?rik=9%2bGaUnKmaIlMEA&pid=ImgRaw&r=0",
              alt: "Brasil vencio a Argentina"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JNLE1BQU1DLGNBQWMsR0FBRzt3SkFDMEg7VUFBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRHpKO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVPO1VBQVUsU0FDUEQsSUFBSTtZQUNiLE9BQ0NHLG9CQUFDQywyQkFBb0IsUUFDcEJEO2NBQUtFLFNBQVMsRUFBQztZQUF3QixHQUN0Q0Ysb0JBQUNHLGNBQU07Y0FBQ0MsYUFBYSxFQUFDO1lBQU8sRUFBRyxFQUNoQ0o7Y0FBS0UsU0FBUyxFQUFDO1lBQWdCLEdBQzlCRiwyQ0FBaUIsRUFDakJBLG9CQUFDSyw4Q0FBc0IsUUFBRSxpREFBaUQsQ0FBMEIsQ0FDL0YsRUFDTkw7Y0FBS0UsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDRjtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJGLG1EQUF5QixFQUN6QkEsb0JBQUNLLDhDQUFzQixRQUFFTiw4QkFBYyxDQUEwQixFQUNqRUM7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDRix5REFBK0IsRUFDL0JBLGlDQUNDQSw0TEFBNEpBLGlFQUF5QyxtQ0FDL0tBLCtEQUF1QyxDQUFJLENBQzVELENBQ0QsQ0FDRCxFQUNOQTtjQUFLRSxTQUFTLEVBQUM7WUFBa0IsR0FDaENGLDBDQUFnQixFQUNoQkEsb0JBQUNNLGdCQUFPLE9BQUcsQ0FDTixDQUNELENBRUQsQ0FDZ0I7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBO1VBQ0E7VUFFTSxTQUFVQSxPQUFPO1lBQ3RCLE9BQU9OLG9CQUFDTyxrQkFBVztjQUFDQyxHQUFHLEVBQUMsa0dBQWtHO2NBQUNDLEdBQUcsRUFBQztZQUEyQixFQUFHO1VBQzlKIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsImltcGxlbWVudGF0aW9uIiwiUmVhY3QiLCJUb2FzdENvbnRleHRQcm92aWRlciIsImNsYXNzTmFtZSIsIkhlYWRlciIsImNvbXBvbmVudE5hbWUiLCJDb3B5YWJsZUltcGxlbWVudGF0aW9uIiwiUmVzdWx0cyIsIkJleW9uZEltYWdlIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvaW1hZ2Uvdmlldy93aWRnZXQvdHMvY29udHJvbGxlci50cyIsInByb2plY3QvbW9kdWxlcy9pbWFnZS92aWV3L3dpZGdldC90cy92aWV3cy9pbXBsZW1lbnRhdGlvbi50cyIsInByb2plY3QvbW9kdWxlcy9pbWFnZS92aWV3L3dpZGdldC90cy92aWV3cy9pbmRleC50c3giLCJwcm9qZWN0L21vZHVsZXMvaW1hZ2Uvdmlldy93aWRnZXQvdHMvdmlld3MvcmVzdWx0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXX0=